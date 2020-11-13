import React from 'react';
import * as serviceWorker from './serviceWorker';
import store from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let reRenderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter>
        <App state={state}
             addToPostsDataBase={store.addToPostsDataBase.bind(store)}
             updatePostText={store.updatePostText.bind(store)}/>
    </BrowserRouter>, document.getElementById('root'));
};

reRenderEntireTree(store.getState());

store.subscribe(reRenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
