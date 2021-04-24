import React from "react";
import s from "./ProfileInfo.module.css";
import Loading from "../../Common/Preloader/Loading";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusHooks from "./ProfileStatusHooks";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Loading/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small}/>
                id: {props.profile.userId} nickname: {props.profile.fullName}
                <ProfileStatusHooks sendNewStatus={props.sendNewStatus} status={props.status}/>
            </div>
        </div>
    );
}

export default ProfileInfo;