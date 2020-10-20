import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import ChatItem from "./ChatItem/ChatItem";

let dialogsNamesData = [
    {id: 1, name: 'Nikita'},
    {id: 2, name: 'Egor'},
    {id: 3, name: 'Dima'},
];
let markupNames = dialogsNamesData.map(elem => <DialogItem id={elem.id} chatName={elem.name}/>);

let messageDataBase = [
    {id: 1, text: "Hello!"},
    {id: 2, text: "How are you?"},
    {id: 3, text: "I'll find you and kill!"},
];
let markupMessages = messageDataBase.map(elem => <ChatItem message={elem.text}/>);

const
    Dialogs = (props) => {
        return (
            <div className={s.dialogsWrapper}>
                <div className={s.dialogsNamesWindow}>
                    { markupNames }
                </div>

                <div className={s.chatWindow}>
                    { markupMessages }
                </div>
            </div>
        );
    }

export default Dialogs;