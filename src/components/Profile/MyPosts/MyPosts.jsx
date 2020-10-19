import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let postsDataBase = [
    {id: 0, text: 'Hello my friends!', like: 25},
    {id: 1, text: 'I learn react', like: 13},
    {id: 2, text: 'Far far away...', like: 20},
];

let markupPosts = postsDataBase.map(elem => <Post message={elem.text} like={elem.like}/>);

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
            {markupPosts}
        </div>

    </div>

}

export default MyPosts;