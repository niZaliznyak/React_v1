import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogName}>
                <div className={s.dialog}>
                                          <NavLink activeClassName={s.active} to="/dialogs/1">Nikita</NavLink></div>
                <div className={s.dialog}><NavLink activeClassName={s.active} to="/dialogs/2">Dima</NavLink></div>
                <div className={s.dialog}><NavLink activeClassName={s.active} to="/dialogs/3">Vasya</NavLink></div>
                <div className={s.dialog}><NavLink activeClassName={s.active} to="/dialogs/4">Gena</NavLink></div>
            </div>
            <div className={s.dialogMessage}>
                <div className={s.message}>Hello!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>I KILL YOU</div>
            </div>
        </div>
    )
}

export default Dialogs;