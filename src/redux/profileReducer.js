const UPD_TYPING_POST = "UPD_TYPING_POST";
const ADD_POST = "ADD_POST";

let initialState = {
    postsDataBase: [
        {id: 1, text: 'Hello my friends!', like: 25},
        {id: 2, text: 'I learn react', like: 13},
        {id: 3, text: 'Far far away...', like: 20},
    ],
    postTypingText: ""
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPD_TYPING_POST: {
            let tempState = {...state};
            tempState.postTypingText = action.typingText;
            return tempState;
        }
        case ADD_POST: {
            let newPost = {
                id: 3,
                text: state.postTypingText,
                like: 0
            };
            let tempState = {...state};
            tempState.postsDataBase = [...state.postsDataBase];
            tempState.postsDataBase.push(newPost);
            tempState.postTypingText = '';
            return tempState;
        }
        default: // если ни один из action.type не подходит. Default необходим
            return state;
    }

}

//post Creators
export const addPostCreator = () => {

    return {
        type: ADD_POST
    }
}

export const updTypingPostCreator = (text) => {

    return {
        type: UPD_TYPING_POST,
        typingText: text
    }
}

export default profileReducer;