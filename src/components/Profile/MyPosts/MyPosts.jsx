import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

    let refTextArea = React.createRef(); //получает ссылку на объект. Тут на тег <textarea/>

    let onPostChange = () => {
        let postTextValue = refTextArea.current.value;
        props.updTypingPost(postTextValue);
    }

    let addToPostsDataBase = () => {
        props.addPost();
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
            {props.profilePage.postsDataBase.map(elem => <Post message={elem.text} key={elem.id} like={elem.like}/>)}
        </div>

    </div>

}

export default MyPosts;