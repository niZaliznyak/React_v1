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

export default authorizeReducer;