import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const addPostButton = () => {
    alert('Hello!')
}


const MyPosts = (props) => {

    return <div className={s.content}>
        <div>
            My posts
        </div>

        <textarea placeholder="Type something"/>
        <div>
            <button onClick={addPostButton}>Add post</button>
            <button>Remove</button>
        </div>

        <div className={s.posts}>
            {props.postsDataBase.map(elem => <Post message={elem.text} like={elem.like}/>)}
        </div>

    </div>

}

export default MyPosts;