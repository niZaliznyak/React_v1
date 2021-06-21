import React from 'react';
import styles from "./Users.module.css";
import AvatarIMG from '../../assets/img/simple-avatar.png';
import {NavLink} from "react-router-dom";

let UserElementMarkup = (props) => {


    return <div className={styles.userElement}>
        <NavLink to={`/profile/${props.id}`}>
            <div><img alt="userPhoto" className={styles.userPhoto}
                      src={props.photos.small != null ? props.photos.small : AvatarIMG}/></div>
        </NavLink>
        <div>Nickname: {props.name}; id: {props.id}; status: {props.status}</div>
        <button
            disabled={props.waitingSubscribe.status === true && props.waitingSubscribe.id === props.id}
            onClick={() => {
                    props.followed === true
                        ? props.unfollow(props.id)
                        : props.follow(props.id);
                }}>
            {props.followed === true ? "unfollow" : "follow"}
        </button>


    </div>
}

export default UserElementMarkup;