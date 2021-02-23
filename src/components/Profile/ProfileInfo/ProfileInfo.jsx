import React from "react";
import s from "./ProfileInfo.module.css";
import Loading from "../../Common/Preloader/Loading";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Loading/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small}/>
                {props.profile.userId} {props.profile.fullName} description about myself
                <ProfileStatus status="cheburek"/>
            </div>
        </div>
    );
}

export default ProfileInfo;