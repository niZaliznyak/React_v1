import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts postsDataBase={props.state.postsDataBase} addToPostsDataBase={props.addToPostsDataBase}/>
    </div>
}

export default Profile;