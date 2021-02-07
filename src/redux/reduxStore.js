import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authorizeReducer from "./authorizeReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    authorizeBlock: authorizeReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store; // строка для того, чтоб можно было в консоли обращаться к стору

export default store;