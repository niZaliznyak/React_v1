const UPD_TYPING_MESSAGE = "UPD_TYPING_MESSAGE";
const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
    dialogsNamesData: [
        {id: 1, name: 'Nikita', avatar: 'https://avas.at.ua/_ph/45/1/469869713.jpg?1603712491'},
        {id: 2, name: 'Egor', avatar: 'https://avas.at.ua/_ph/45/1/563058985.jpg?1603712491'},
        {id: 3, name: 'Dima', avatar: 'https://avas.at.ua/_ph/45/1/940876170.jpg?1603712670'},
    ],

    messageDataBase: [
        {id: 1, sender: true, text: "Hello!"},
        {id: 2, sender: true, text: "How are you?"},
        {id: 3, sender: false, text: "I'll find you and hug!"},
        {id: 4, sender: true, text: "Oh, no!"},
        {id: 5, sender: false, text: "Time is running..."},
    ],
    messageTypingText: ""
}

const dialogsReducer = (state = initialState, action) => {
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
            state.messageTypingText = '';
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