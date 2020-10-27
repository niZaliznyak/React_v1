import React from 'react';
import s from './FriendItem.module.css';

const FriendItem = (props) => {
    return (
        <div>
            <img className={s.friendsQuickPanelAva} src={props.avatar}/>
            <div>{props.name}</div>
        </div>
    )
}

export default FriendItem;