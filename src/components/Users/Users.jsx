import React from 'react';
import styles from "./Users.module.css";
import AvatarIMG from '../../assets/img/simple-avatar.png';
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

let Users = (props) => {

    let pages = [];
    for (let i = 1; i <= Math.ceil(props.totalUsersCount / props.pageSize); i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : ""}
                             onClick={(e) => {
                                 props.onPageChange(p)
                             }}>{p}</span>
            })}
        </div>

        {props.usersData.map(elem => (
            <div className={styles.userElement} key={elem.id}>
                <NavLink to={`/profile/${elem.id}`}>
                    <div><img alt="userPhoto" className={styles.userPhoto}
                              src={elem.photos.small != null ? elem.photos.small : AvatarIMG}/></div>
                </NavLink>
                <div>Nickname: {elem.name}; id: {elem.id}; status: {elem.status}</div>
                <div>{elem.followed ?

                    <button disabled={props.waitingSubscribe.status == true && props.waitingSubscribe.id == elem.id} onClick={() => {
                        props.toggleSubscribeProgress(true, elem.id);
                        usersAPI.getUnfollow(elem.id).then(data => {
                            if (data.resultCode == 0) {
                                props.unfollow(elem.id)
                            }
                            props.toggleSubscribeProgress(false);
                        });

                    }}>unfollow</button>


                        : <button disabled={props.waitingSubscribe.status == true && props.waitingSubscribe.id == elem.id} onClick={() => {
                        props.toggleSubscribeProgress(true, elem.id);
                        usersAPI.getFollow(elem.id).then(data => {
                                if (data.resultCode == 0) {
                                    props.follow(elem.id)
                                }
                            props.toggleSubscribeProgress(false);
                            });

                        }}>follow</button>
                    }</div>
                    </div>
                    )
                    )}

                    </div>

                    }

                    export default Users;