import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let globalData = {
    'dialogsNamesData': [
        {id: 1, name: 'Nikita'},
        {id: 2, name: 'Egor'},
        {id: 3, name: 'Dima'},
    ],

    'messageDataBase' : [
        {id: 1, text: "Hello!"},
        {id: 2, text: "How are you?"},
        {id: 3, text: "I'll find you and kill!"},
    ],

    'postsDataBase' : [
        {id: 0, text: 'Hello my friends!', like: 25},
        {id: 1, text: 'I learn react', like: 13},
        {id: 2, text: 'Far far away...', like: 20},
    ]
}

ReactDOM.render(<App globalData={globalData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
