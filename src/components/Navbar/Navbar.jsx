import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsQuickPanel from "./FriendsQuickPanel/FriendsQuickPanel";
import StoreContext from "../../StoreContext";

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

        <StoreContext.Consumer>
            {
                (store) => <FriendsQuickPanel dialogsNamesData={store.getState().dialogsPage.dialogsNamesData}/>
            }
        </StoreContext.Consumer>

    </nav>
}

export default Navbar;