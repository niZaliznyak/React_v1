import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import ChatItem from "./ChatItem/ChatItem";

const refTextArea = React.createRef(); //получает ссылку на объект. Тут на тег <textarea/>

const sendMessageButton = () => {
    let textAreaValue = refTextArea.current.value;
    alert(textAreaValue);
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogsNamesWindow}>
                {props.state.dialogsNamesData.map(elem => <DialogItem id={elem.id} chatName={elem.name}
                                                                      avatar={elem.avatar}/>)}
            </div>

            <div className={s.chatWindow}>
                {props.state.messageDataBase.map(elem => <ChatItem message={elem.text} sender={elem.sender}/>)}
                <div>
                    <textarea ref={refTextArea} placeholder="Write message..."/>
                    <button onClick={sendMessageButton}>Send</button>
                </div>
            </div>
        </div>
    );
}

/*
тоже самое, только тут разметка занесена в переменные
return (
 let markupNames = props.dialogsNamesData.map(elem => <DialogItem id={elem.id} chatName={elem.name}/>);
 let markupMessages = props.messageDataBase.map(elem => <ChatItem message={elem.text}/>);

    <div className={s.dialogsWrapper}>
        <div className={s.dialogsNamesWindow}>
            {markupNames}
        </div>

        <div className={s.chatWindow}>
            {markupMessages}
        </div>
    </div>
);
*/


export default Dialogs;