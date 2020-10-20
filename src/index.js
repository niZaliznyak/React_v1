import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsNamesData = [
    {id: 1, name: 'Nikita'},
    {id: 2, name: 'Egor'},
    {id: 3, name: 'Dima'},
];

let messageDataBase = [
    {id: 1, text: "Hello!"},
    {id: 2, text: "How are you?"},
    {id: 3, text: "I'll find you and kill!"},
];

ReactDOM.render(<App dialogsNamesData={dialogsNamesData} messageDataBase={messageDataBase}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
