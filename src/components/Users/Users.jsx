import React from 'react';
import styles from "./Users.module.css";
import * as axios from "axios";
import AvatarIMG from '../../assets/img/simple-avatar.png';

const Users = (props) => {
    let showUsers = () => {
        if (props.usersData.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items);
            });
        }
    }

    return <div>
        <button onClick={showUsers}>Show users</button>
        {props.usersData.map(elem => (
                <div className={styles.userElement} key={elem.id}>
                        <div><img alt="userPhoto" className={styles.userPhoto} src={AvatarIMG}></img></div>
                        <div>Nickname: {elem.name}; id: {elem.id}; status: {elem.status}</div>
                        <div>{elem.follow ?
                            <button onClick={ () => {props.unfollow(elem.id)} }>unfollow</button>
                            : <button onClick={ () => {props.follow(elem.id)} }>follow</button>
                        }</div>
                </div>
            )
        )}
    </div>

}

export default Users;