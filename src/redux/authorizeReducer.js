import {authAPI} from "../api/api";

const SET_LOGIN_DATA = "SET_LOGIN_DATA";


let initialState = {
    login: null,
    userID: null,
    email: null,
    isAuthorize: false
}

const authorizeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_DATA:
            return {
                ...state,
                ...action.data,
                isAuthorize: true
            };

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
}

export default authorizeReducer;