import React from 'react';
import s from './ChatItem.module.css';

const ChatItem = (props) => {
    let status = props.sender == true ? s.sender : s.answer;
    return (
        <div className={status}>{props.message}</div>
    );

}

export default ChatItem;