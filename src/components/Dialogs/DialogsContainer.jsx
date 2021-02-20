import React from 'react';
import {sendMessageCreator, updTypingMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuthorize: state.authorizeBlock.isAuthorize
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        textChange: (text) => {
            dispatch(updTypingMessageCreator(text));
        }
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

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


