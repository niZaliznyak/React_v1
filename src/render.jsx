import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {addToPostsDataBase} from "./redux/state";

export let reRenderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter>
        <App state={state} addToPostsDataBase={addToPostsDataBase}/>
    </BrowserRouter>, document.getElementById('root'));
};