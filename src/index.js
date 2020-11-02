import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import {addToPostsDataBase} from './redux/state';

addToPostsDataBase("Azaza");

ReactDOM.render(<BrowserRouter>
    <App state={state} addToPostsDataBase={addToPostsDataBase}/>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
