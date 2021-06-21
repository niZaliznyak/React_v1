import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div>
            <NavLink activeClassName={s.active} to={path}>
                <img className={s.dialogImg} src={props.avatar} alt="chatAvatar"/>
                <span className={s.dialogName}>{props.chatName}</span>
            </NavLink>
        </div>
    );
}

export default DialogItem;