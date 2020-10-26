import React from 'react';
import s from './ChatItem.module.css';

const ChatItem = (props) => {
    if (props.sender == true) {
        return (
            <div className={s.sender}>{props.message}</div>
        );
    } else {
        return (
            <div className={s.answer}>{props.message}</div>
        );
    }
}

export default ChatItem;