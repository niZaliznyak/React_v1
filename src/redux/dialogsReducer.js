const UPD_TYPING_MESSAGE = "UPD_TYPING_MESSAGE";
const ADD_MESSAGE = 'ADD_MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPD_TYPING_MESSAGE:
            state.messageTypingText = action.typingText;
            return state;

        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                sender: false,
                text: state.messageTypingText
            };
            state.messageDataBase.push(newMessage);
            state.messageTypingText = "";
            return state;

        default : // если ни один из action.type не подходит
            return state;
    }

}

//chat Creators
export const sendMessageCreator = () => {

    return {
        type: ADD_MESSAGE
    }
}

export const updTypingMessageCreator = (text) => {

    return {
        type: UPD_TYPING_MESSAGE,
        typingText: text
    }
}

export default dialogsReducer;