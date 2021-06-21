import {profileAPI} from "../api/api";

const UPD_TYPING_POST = "UPD_TYPING_POST";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SET_PHOTOS_LINKS = "SET_PHOTOS_LINKS";

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
        case SET_PHOTOS_LINKS:
            debugger;
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
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
export const setPhotosLinks = (photos) => ({type: SET_PHOTOS_LINKS, photos});

export const getUserProfile = (userID) => async (dispatch) => {
    let response = await profileAPI.getProfile(userID);

    dispatch(setUserProfile(response.data)); //dispatch вызывает setUserProfile(response.data) и тот возвращает экшн
}

export const getUserStatus = (userID) =>
    async (dispatch) => {
        let response = await profileAPI.getStatus(userID);

        if (response.data === "") {
            response.data = "status if empty"
        }
        dispatch(setStatus(response.data));

    }

export const sendNewStatus = (status) =>
    async (dispatch) => {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }

    }

export const uploadPhoto = (file) =>
    async (dispatch) => {
        let response = await profileAPI.updatePhoto(file);
        if (response.data.resultCode === 0) {
            dispatch(setPhotosLinks(response.data.data.photos));
        }
    }

export default profileReducer;