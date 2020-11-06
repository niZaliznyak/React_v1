import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    const refTextArea = React.createRef(); //получает ссылку на объект. Тут на тег <textarea/>

    const onPostChange = () => {
        let postTextArea = refTextArea.current.value;
        props.updatePostText(postTextArea);
    }

    return <div className={s.content}>
        <div>
            My posts
        </div>

        <textarea onChange={onPostChange} ref={refTextArea} value={props.profilePage.postTypingText}/>
        <div>
            <button onClick={props.addToPostsDataBase}>Add post</button>
            <button>Remove</button>
        </div>

        <div className={s.posts}>
            {props.profilePage.postsDataBase.map(elem => <Post message={elem.text} like={elem.like}/>)}
        </div>

    </div>

}

export default MyPosts;