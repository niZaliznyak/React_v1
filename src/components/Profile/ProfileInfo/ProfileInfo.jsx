import React from "react";
import s from "./ProfileInfo.module.css";
import Loading from "../../Common/Preloader/Loading";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Loading/>
    }
    console.log(props);
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small}/>
                id: {props.profile.userId} nickname: {props.profile.fullName}
                <ProfileStatus sendNewStatus={props.sendNewStatus} status={props.status}/>
            </div>
        </div>
    );
}

export default ProfileInfo;