import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts profilePage={props.state.profilePage}
                 addToPostsDataBase={props.addToPostsDataBase}
                 updatePostText={props.updatePostText}/>
    </div>
}

export default Profile;