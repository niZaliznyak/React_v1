import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducers from "./usersReducers";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducers
});

let store = createStore(reducers);

window.store = store; // строка для того, чтоб можно было в консоли обращаться к стору

export default store;