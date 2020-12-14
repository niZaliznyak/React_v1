import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import ChatItem from "./ChatItem/ChatItem";

const Dialogs = (props) => {

    let refTextArea = React.createRef();

    let sendMessageButton = () => {
        props.sendMessage();
    }
    let onMessageChange = () => {
        let messageTextValue = refTextArea.current.value;
        props.textChange(messageTextValue);
    }

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogsNamesWindow}>
                {props.dialogsPage.dialogsNamesData.map(elem => <DialogItem id={elem.id} chatName={elem.name}
                                                                            avatar={elem.avatar} key={elem.id}/>)}
            </div>

            <div className={s.chatWindow}>
                {props.dialogsPage.messageDataBase.map(elem => <ChatItem message={elem.text} sender={elem.sender}
                                                                         key={elem.id}/>)}
                <div>
                    <textarea onChange={onMessageChange} ref={refTextArea} value={props.dialogsPage.messageTypingText}/>
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