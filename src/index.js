import React from 'react';
import * as serviceWorker from './serviceWorker';
import store from "./redux/reduxStore";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";


let reRenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>

            <Provider store={store}>
                <App />
            </Provider>

        </BrowserRouter>, document.getElementById('root'));
}; //bind позволяет при использовании this. ссылаться на свойства оригинального объекта, а не свойства объекта которым будет вызвана.

reRenderEntireTree();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
