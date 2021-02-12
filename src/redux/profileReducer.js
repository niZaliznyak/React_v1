import {usersAPI} from "../api/api";

const UPD_TYPING_POST = "UPD_TYPING_POST";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    postsDataBase: [
        {id: 1, text: 'Hello my friends!', like: 25},
        {id: 2, text: 'I learn react', like: 13},
        {id: 3, text: 'Far far away...', like: 20},
    ],
    postTypingText: "",
    profile: null
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
            }

        default: // если ни один из action.type не подходит. Default необходим
            return state;
    }

}

//post Creators
export const addPostCreator = () => ({type: ADD_POST});
export const updTypingPostCreator = (text) => ({type: UPD_TYPING_POST, typingText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getUserProfile = (userID) => (dispatch) => {
    usersAPI.getProfile(userID).then(response => {
        dispatch(setUserProfile(response.data)); //dispatch вызывает setUserProfile(response.data) и тот возвращает экшн
    });
}


export default profileReducer;