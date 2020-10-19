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

let nameDataBase = [
    {id: 1, name: 'Nikita'},
    {id: 2, name: 'Egor'},
    {id: 3, name: 'Dima'},
];

let markupNames = nameDataBase.map(elem => <Chat id={elem.id} chatName={elem.name}/>);

let messageDataBase = [
    {id: 1, text: "Hello!"},
    {id: 2, text: "How are you?"},
    {id: 3, text: "I'll find you and kill!"},
];

let markupMessages = messageDataBase.map(elem => <Message message={elem.text}/>);

const
Dialogs = (props) => {
    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogsWindow}>
                {markupNames}
            </div>

            <div className={s.chatWindow}>
                {markupMessages}
            </div>
        </div>
    );
}

export default Dialogs;