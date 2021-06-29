import React from 'react';
import AvatarIMG from '../../../assets/img/simple-avatar.png';
import style from './MyPosts.module.css'
import {List} from "antd";

const MyPosts = React.memo(props => {

    let refTextArea = React.createRef(); //получает ссылку на объект. Тут на тег <textarea/>

    let onPostChange = () => {
        let postTextValue = refTextArea.current.value;
        props.updTypingPost(postTextValue);
    }

    let addToPostsDataBase = () => {
        props.addPost();
    }

    let data = props.postsDataBase;

    return <div>
        <h2>
            My posts
        </h2>
        <hr/>

        <textarea onChange={onPostChange} ref={refTextArea} value={props.postTypingText}/>
        <div>
            <button onClick={addToPostsDataBase}>Add post</button>
            <button>Remove</button>
        </div>

        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item className={style.listItem}>
                    <List.Item.Meta
                        avatar={<img src={AvatarIMG}/>}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description={item.text} bordered={true}
                    />
                </List.Item>
            )}
        />

    </div>

});

export default MyPosts;