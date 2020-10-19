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
    {id : 1, name: 'Nikita'},
    {id : 2, name: 'Egor'},
    {id : 3, name: 'Dima'},
];

let messageDataBase = [
    {id : 1, text : "Hello!"},
    {id : 2, text : "How are you?"},
    {id : 3, text : "I'll find you and kill!"},
];

const Dialogs = (props) => {
    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogsWindow}>
                <Chat id={nameDataBase[0].id} chatName={nameDataBase[0].name}/>
                <Chat id={nameDataBase[1].id} chatName={nameDataBase[1].name}/>
                <Chat id={nameDataBase[2].id} chatName={nameDataBase[2].name}/>
            </div>

            <div className={s.chatWindow}>
                <Message message={messageDataBase[0].text} />
                <Message message={messageDataBase[1].text} />
                <Message message={messageDataBase[2].text} />
            </div>
        </div>
    );
}

export default Dialogs;