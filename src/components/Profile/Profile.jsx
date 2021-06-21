import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return <div>
        <ProfileInfo profile={props.profile} yourID={props.yourID} status={props.status} sendNewStatus={props.sendNewStatus}/>
        <MyPostsContainer />
    </div>
}

export default Profile;