const UPD_TYPING_POST = "UPD_TYPING_POST";
const ADD_POST = "ADD_POST";

const profileReducer = (state, action) => {
    switch (action.type) {
        case UPD_TYPING_POST:
            state.postTypingText = action.typingText;
            return state;

        case ADD_POST:
            let newPost = {
                id: 3,
                text: state.postTypingText,
                like: 0
            };
            state.postsDataBase.push(newPost);
            state.postTypingText = '';
            return state;

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