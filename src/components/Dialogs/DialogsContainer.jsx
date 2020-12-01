import React from 'react';
import {sendMessageCreator, updTypingMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let textChange = (text) => {
        let action = updTypingMessageCreator(text);
        props.store.dispatch(action);
    }

    return (
        <Dialogs sendMessage={sendMessage} textChange={textChange}
                 dialogsPage={props.store.getState().dialogsPage}/>
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


export default DialogsContainer;