import {profileAPI, usersAPI} from "../api/api";

const UPD_TYPING_POST = "UPD_TYPING_POST";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    postsDataBase: [
        {id: 1, text: 'Hello my friends!', like: 25},
        {id: 2, text: 'I learn react', like: 13},
        {id: 3, text: 'Far far away...', like: 20},
    ],
    postTypingText: "",
    profile: null,
    status: ""
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPD_TYPING_POST:
            return {
                ...state,
                postTypingText: action.typingText
            };

        case ADD_POST:
            let newPost = {
                id: 4,
                text: state.postTypingText,
                like: 0
            }
            return {
                ...state,
                postsDataBase: [...state.postsDataBase, newPost],
                postTypingText: ''
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default: // если ни один из action.type не подходит. Default необходим
            return state;
    }

}

//post Creators
export const addPostCreator = () => ({type: ADD_POST});
export const updTypingPostCreator = (text) => ({type: UPD_TYPING_POST, typingText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status: status});

export const getUserProfile = (userID) => (dispatch) => {
    profileAPI.getProfile(userID).then(response => {
        dispatch(setUserProfile(response.data)); //dispatch вызывает setUserProfile(response.data) и тот возвращает экшн
    });
}

export const getStatus = (userID) => (dispatch) => {
    profileAPI.getStatus(userID).then(response => {
        dispatch(setStatus(response.data));
    });
}


export default profileReducer;