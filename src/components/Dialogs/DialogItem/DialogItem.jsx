import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div><NavLink activeClassName={s.active} to={path}>{props.chatName}</NavLink></div>
    );
}

export default DialogItem;