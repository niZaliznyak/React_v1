import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authorizeReducer from "./authorizeReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    authorizeBlock: authorizeReducer
});

let store = createStore(reducers);

window.store = store; // строка для того, чтоб можно было в консоли обращаться к стору

export default store;