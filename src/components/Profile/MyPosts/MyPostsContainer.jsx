import React from 'react';
import {addPostCreator, updTypingPostCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {

    let updTypingPost = (text) => {
        let action = updTypingPostCreator(text);
        props.store.dispatch(action);
    }

    let addPost = () => {
        props.store.dispatch(addPostCreator());
    }

    return (<MyPosts updTypingPost={updTypingPost} addPost={addPost}
                     profilePage={props.store.getState().profilePage}/>);

}

export default MyPostsContainer;