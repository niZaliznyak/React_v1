import React from 'react';
import styles from "./Users.module.css";
import AvatarIMG from '../../assets/img/simple-avatar.png';
import {NavLink} from "react-router-dom";
import {Pagination} from "antd";

let Users = (props) => {

    let pages = [];
    for (let i = 1; i <= Math.ceil(props.totalUsersCount / props.pageSize); i++) {
        pages.push(i);
    }

    function onChange(pageNumber) {
        console.log('Page: ', pageNumber);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : ""}
                             onClick={(e) => {
                                 props.onPageChange(p)
                             }}>{p} |</span>
            })}
        </div>
        <Pagination defaultCurrent={1} total={props.totalUsersCount} />

        {props.usersData.map(elem => (
                <div className={styles.userElement} key={elem.id}>
                    <NavLink to={`/profile/${elem.id}`}>
                        <div><img alt="userPhoto" className={styles.userPhoto}
                                  src={elem.photos.small != null ? elem.photos.small : AvatarIMG}/></div>
                    </NavLink>
                    <div>Nickname: {elem.name}; id: {elem.id}; status: {elem.status}</div>
                    <div>{elem.followed == true ?

                        <button disabled={props.waitingSubscribe.status == true && props.waitingSubscribe.id == elem.id}

                                onClick={() => {
                                    props.unfollow(elem.id)
                                }}>unfollow</button>


                        : <button disabled={props.waitingSubscribe.status == true && props.waitingSubscribe.id == elem.id}

                                  onClick={() => {
                                      props.follow(elem.id)
                                  }}>follow</button>
                    }</div>
                </div>
            )
        )}

    </div>

}

export default Users;