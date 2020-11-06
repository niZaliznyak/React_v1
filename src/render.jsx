import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {addToPostsDataBase, updatePostText} from "./redux/state";

export let reRenderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter>
        <App state={state} addToPostsDataBase={addToPostsDataBase} updatePostText={updatePostText}/>
    </BrowserRouter>, document.getElementById('root'));
};