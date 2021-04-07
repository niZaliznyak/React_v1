import {authAPI, usersAPI} from "../api/api";
import {followSuccess, toggleSubscribeProgress} from "./usersReducer";

const SET_LOGIN_DATA = "SET_LOGIN_DATA";
const AUTHORIZE_SUCCESS = "AUTHORIZE_SUCCESS";

let initialState = {
    login: null,
    userID: null,
    email: null,
    isAuthorize: false
}

let loginData = {
    email: "",
    password: "",
    rememberMe: false
}

const authorizeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_DATA:
            return {
                ...state,
                ...action.data,
                isAuthorize: true
            };
        case AUTHORIZE_SUCCESS:
            return {
                ...state,
                isAuthorize: true
            }

        default:
            return state;
    }
}

export const setLoginData = (userID, email, login) => ({type: SET_LOGIN_DATA, data: {userID, email, login}});
export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setLoginData(id, email, login));
            }
        });
};
export const authorizeSuccess = () => ({type: AUTHORIZE_SUCCESS});
export const sendSignIdData = (email, password, rememberMe) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            console.log(response);
        });
};


export default authorizeReducer;