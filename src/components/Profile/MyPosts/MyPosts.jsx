import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const refTextArea = React.createRef(); //получает ссылку на объект. Тут на тег <textarea/>

const addPostButton = () => {
    let textAreaValue = refTextArea.current.value;
    alert(textAreaValue);
}


const MyPosts = (props) => {

    return <div className={s.content}>
        <div>
            My posts
        </div>

        <textarea ref={refTextArea} placeholder="Type something"/>
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