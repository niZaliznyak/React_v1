import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Chat = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div><NavLink activeClassName={s.active} to={path}>{props.chatName}</NavLink></div>
    );
}

const Message = (props) => {
    return (
        <div>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogsWindow}>
                <Chat id="1" chatName="Nikita"/>
                <Chat id="2" chatName="Dima"/>
                <Chat id="3" chatName="Sasha"/>
                <Chat id="4" chatName="Lesha"/>
            </div>

            <div className={s.chatWindow}>
                <Message message="Hi!" />
                <Message message="How are you?" />
                <Message message="I'll found you!" />
            </div>
        </div>
    );
}

export default Dialogs;