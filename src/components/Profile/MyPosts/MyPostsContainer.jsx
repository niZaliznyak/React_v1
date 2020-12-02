import React from 'react';
import {addPostCreator, updTypingPostCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let updTypingPost = (text) => {
                        let action = updTypingPostCreator(text);
                        store.dispatch(action);
                    }

                    let addPost = () => {
                        store.dispatch(addPostCreator());
                    }

                    return <MyPosts updTypingPost={updTypingPost} addPost={addPost}
                                    profilePage={store.getState().profilePage}/>
                }
            }
        </StoreContext.Consumer>
    );

}

export default MyPostsContainer;