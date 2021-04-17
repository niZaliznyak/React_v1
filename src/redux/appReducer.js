import {getAuthUserData} from "./authorizeReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";


let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default :
            return state;
    }
}

export const initializeSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData()); // getAuthUserData возвращает промисс
    promise.then(() => {
        dispatch(initializeSuccess());
    });
};


export default appReducer;