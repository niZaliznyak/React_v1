import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsQuickPanel from "./FriendsQuickPanel/FriendsQuickPanel";
import StoreContext from "../../StoreContext";
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
                <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>
            </li>
        </ul>

        <FriendsQuickPanelContainer/>

    </nav>
}

export default Navbar;