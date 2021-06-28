import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.loginBlock}>
            {props.isAuthorize
                ? <div><p>user: {props.login}</p>
                <button onClick={props.logOut}>Log Out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;