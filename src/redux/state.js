import React from 'react';
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const UPD_TYPING_POST = "UPD_TYPING_POST";
const ADD_POST = "ADD_POST";
const UPD_TYPING_MESSAGE = "UPD_TYPING_MESSAGE";
const ADD_MESSAGE = 'ADD_MESSAGE';

let store = {
    _state: {
        dialogsPage: {
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
        },

        profilePage: {
            postsDataBase: [
                {id: 1, text: 'Hello my friends!', like: 25},
                {id: 2, text: 'I learn react', like: 13},
                {id: 3, text: 'Far far away...', like: 20},
            ],
            postTypingText: ""
        }
    },

    _callSubscriber() {
        console.log("")
    },


    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
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


window.store = store;
export default store;

