import {authAPI, usersAPI} from "../api/api";
import {followSuccess, toggleSubscribeProgress} from "./usersReducer";

const SET_LOGIN_DATA = "SET_LOGIN_DATA";

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
                ...action.payload,
            };

        default:
            return state;
    }
}

export const setLoginData = (userID, email, login, isAuthorize) => ({type: SET_LOGIN_DATA, payload: {userID, email, login, isAuthorize}});
export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setLoginData(id, email, login, true));
            }
        });
};

export const sendSignIdData = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        }
    });
};

export const logOut = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setLoginData(null, null, null, false));
        }
    });
}


export default authorizeReducer;