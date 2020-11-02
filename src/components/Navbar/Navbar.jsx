import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsQuickPanel from "./FriendsQuickPanel/FriendsQuickPanel";

const Navbar = (props) => {
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

        <FriendsQuickPanel dialogsNamesData={props.state.dialogsPage.dialogsNamesData}/>

    </nav>
}

export default Navbar;