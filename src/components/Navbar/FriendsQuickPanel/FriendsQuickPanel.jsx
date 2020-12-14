import React from 'react';
import FriendItem from "./FriendItem/FriendItem";
import s from './FriendsQuickPanel.module.css';


const FriendsQuickPanel = (props) => {
    return (
        <div className={s.FriendsQuickPanel}>
            {props.dialogsNamesData.map(elem => <FriendItem avatar={elem.avatar}
                                                            name={elem.name} key={elem.id}/>)}
        </div>
    )
}

export default FriendsQuickPanel;