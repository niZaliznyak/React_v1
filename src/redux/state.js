import React from 'react';

let store = {
    _state : {
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

    getState(){
        return this._state;
    },

    _callSubscriber() {
        console.log("")
    },

    addToPostsDataBase(){
        let newPost = {
            id: 3,
            text: this._state.profilePage.postTypingText,
            like: 0
        };
        this._state.profilePage.postsDataBase.push(newPost);
        this._state.profilePage.postTypingText = '';//после добавления поста, очищает textarea
        this._callSubscriber(this._state);
    },

    updatePostText(typetext){
        this._state.profilePage.postTypingText = typetext;
        debugger;
        this._callSubscriber(this._state);
    },

    subscribe(observer){
        this._callSubscriber = observer;
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


