import React from 'react';
import styles from "./Users.module.css";
import AvatarIMG from '../../assets/img/simple-avatar.png';
import {NavLink} from "react-router-dom";
import {Pagination} from "antd";

let Users = (props) => {

    function onChange(pageNumber) {
        props.onPageChange(pageNumber);
    }

    return <div>
        <Pagination defaultCurrent={1} total={props.totalUsersCount} onChange={onChange}
                    defaultPageSize={props.pageSize}/>

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