import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

export let reRenderEntireTree = (state, otherFunction) => {
    ReactDOM.render(<BrowserRouter>
        <App state={state} addToPostsDataBase={otherFunction}/>
    </BrowserRouter>, document.getElementById('root'));
};