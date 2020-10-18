import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return <div className={s.content}>
        <div>
            My posts
        </div>

        <textarea placeholder="Type something"></textarea>
        <div>
            <button>Add post</button>
            <button>Remove</button>
        </div>

        <div className={s.posts}>
            <Post message="Hello my friends" like="25"/>
            <Post message="I learn react" like="7"/>
            <Post message="How many years gone..." like="30"/>
        </div>

    </div>

}

export default MyPosts;