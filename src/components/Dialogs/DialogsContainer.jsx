import React from 'react';
import {sendMessageCreator, updTypingMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let sendMessage = () => {
                        store.dispatch(sendMessageCreator());
                    }
                    let textChange = (text) => {
                        let action = updTypingMessageCreator(text);
                        store.dispatch(action);
                    }

                    return <Dialogs sendMessage={sendMessage} textChange={textChange}
                                    dialogsPage={store.getState().dialogsPage}/>
                }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;
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


