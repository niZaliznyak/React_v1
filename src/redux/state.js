import React from 'react';

const UPD_TYPING_TEXT = "UPD_TYPING_TEXT";
const ADD_POST = "ADD_POST";

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
            ]
        },

        profilePage: {
            postsDataBase: [
                {id: 0, text: 'Hello my friends!', like: 25},
                {id: 1, text: 'I learn react', like: 13},
                {id: 2, text: 'Far far away...', like: 20},
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


    addToPostsDataBase() {
        let newPost = {
            id: 3,
            text: this._state.profilePage.postTypingText,
            like: 0
        };
        this._state.profilePage.postsDataBase.push(newPost);
        this._state.profilePage.postTypingText = '';//после добавления поста, очищает textarea
        this._callSubscriber(this._state);
    },

    updatePostText(typingText) {
        this._state.profilePage.postTypingText = typingText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {

        if (action.type === UPD_TYPING_TEXT) {
            this._state.profilePage.postTypingText = action.typingText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                text: this._state.profilePage.postTypingText,
                like: 0
            };
            this._state.profilePage.postsDataBase.push(newPost);
            this._state.profilePage.postTypingText = '';//после добавления поста, очищает textarea
            this._callSubscriber(this._state);
        }
    }

}

export const addPostActionCreator = () => {

    return {
        type: ADD_POST
    }
}

export const updTypingTextActionCreator = (text) => {

    return {
        type: UPD_TYPING_TEXT,
        typingText: text
    }
}

window.store = store;
export default store;
/*

let state = {
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
        ]
    },

    profilePage: {
        postsDataBase: [
            {id: 0, text: 'Hello my friends!', like: 25},
            {id: 1, text: 'I learn react', like: 13},
            {id: 2, text: 'Far far away...', like: 20},
        ],
        postTypingText: ""
    }
}

let reRenderEntireTree = () => console.log("");

export const addToPostsDataBase = () => {
    let newPost = {
        id: 3,
        text: state.profilePage.postTypingText,
        like: 0
    };
    state.profilePage.postsDataBase.push(newPost);
    state.profilePage.postTypingText = '';//после добавления поста, очищает textarea
    reRenderEntireTree(state);
}

export const updatePostText = (typetext) => {
    state.profilePage.postTypingText = typetext;
    reRenderEntireTree(state);
}

export const subscribe = (observer) => {
    reRenderEntireTree = observer;
}
*/


