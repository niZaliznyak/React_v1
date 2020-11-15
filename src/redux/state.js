import React from 'react';

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

        if (action.type === UPD_TYPING_POST) {
            this._state.profilePage.postTypingText = action.typingText;
            this._callSubscriber(this._state);
        }
        else if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                text: this._state.profilePage.postTypingText,
                like: 0
            };
            this._state.profilePage.postsDataBase.push(newPost);
            this._state.profilePage.postTypingText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPD_TYPING_MESSAGE) {
            this._state.dialogsPage.messageTypingText = action.typingText;
            this._callSubscriber(this._state);
        }
        else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 6,
                sender: false,
                text: this._state.dialogsPage.messageTypingText
            };
            this._state.dialogsPage.messageDataBase.push(newMessage);
            this._state.profilePage.postTypingText = '';
            this._callSubscriber(this._state);
        }
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

