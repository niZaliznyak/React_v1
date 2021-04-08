import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsQuickPanelContainer from "./FriendsQuickPanel/FriendsQuickPanelContainer";

const Navbar = () => {
    return <nav className={s.nav}>

        <ul>
            <li>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </li>
            <li>
                <NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink>
            </li>
            <li>
                <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
            </li>
            <li>
                <NavLink to="/login" activeClassName={s.active}>Login</NavLink>
            </li>
        </ul>

        <FriendsQuickPanelContainer/>

    </nav>
}

export default Navbar;