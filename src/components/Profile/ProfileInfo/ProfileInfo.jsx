import React from "react";
import s from "./ProfileInfo.module.css";
import Loading from "../../Common/Preloader/Loading";
import ProfileStatusHooks from "./ProfileStatusHooks";
import AvatarIMG from "../../../assets/img/simple-avatar.png";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Loading/>
    }

    const onPhotoSelected = (e) => {

    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small != null ? props.profile.photos.small : AvatarIMG} alt='profile avatar'/>
                {props.profile.userId === props.yourID && <input onChange={onPhotoSelected} type='file'/>}
                <p>id: {props.profile.userId}</p>
                <p>nickname: {props.profile.fullName}</p>
                <ProfileStatusHooks sendNewStatus={props.sendNewStatus} status={props.status}/>
            </div>
        </div>
    );
}

export default ProfileInfo;