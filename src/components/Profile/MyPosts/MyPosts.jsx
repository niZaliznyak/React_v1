import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let postsDataBase = [
    {id : 0, text : 'Hello my friends!', like : 25},
    {id : 1, text : 'I learn react', like : 13},
    {id : 2, text : 'Far far away...', like : 20},
];


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
            <Post message={postsDataBase[0].text} like={postsDataBase[0].like}/>
            <Post message={postsDataBase[1].text} like={postsDataBase[1].like}/>
            <Post message={postsDataBase[2].text} like={postsDataBase[2].like}/>
        </div>

    </div>

}

export default MyPosts;