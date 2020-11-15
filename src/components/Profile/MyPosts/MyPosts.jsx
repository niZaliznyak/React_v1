import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostCreator, updTypingPostCreator} from "../../../redux/state";



const MyPosts = (props) => {

    let refTextArea = React.createRef(); //получает ссылку на объект. Тут на тег <textarea/>

    let onPostChange = () => {
        let postTextArea = refTextArea.current.value;
        let action = updTypingPostCreator(postTextArea);
        props.dispatch(action);
    }

    let addToPostsDataBase = () => {
        let action = addPostCreator();
        props.dispatch(action);
    }

    return <div className={s.content}>
        <div>
            My posts
        </div>

        <textarea onChange={onPostChange} ref={refTextArea} value={props.profilePage.postTypingText}/>
        <div>
            <button onClick={addToPostsDataBase}>Add post</button>
            <button>Remove</button>
        </div>

        <div className={s.posts}>
            {props.profilePage.postsDataBase.map(elem => <Post message={elem.text} like={elem.like}/>)}
        </div>

    </div>

}

export default MyPosts;