import React from "react";
import s from "./ProfileInfo.module.css";
import Loading from "../../Common/Preloader/Loading";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Loading/>
    }
    return (
        <div>
            <img
                src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small}/>
                {props.profile.userId} {props.profile.fullName} description about myself
            </div>
        </div>
    );
}

export default ProfileInfo;