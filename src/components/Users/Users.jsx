import React from 'react';
import styles from "./Users.module.css";
import * as axios from "axios";
import AvatarIMG from '../../assets/img/simple-avatar.png';

//в классовую компоненту не приходят props. Props приходят в уже отрисованый jsx. Поэтому тут обращаемся к пропсам через this.
class Users extends React.Component {

    componentDidMount() {
        if (this.props.usersData.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items);
            });
        }
    }

    render() {
        return <div>
            {this.props.usersData.map(elem => (
                    <div className={styles.userElement} key={elem.id}>
                        <div><img alt="userPhoto" className={styles.userPhoto} src={AvatarIMG}></img></div>
                        <div>Nickname: {elem.name}; id: {elem.id}; status: {elem.status}</div>
                        <div>{elem.follow ?
                            <button onClick={() => {
                                this.props.unfollow(elem.id)
                            }}>unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(elem.id)
                            }}>follow</button>
                        }</div>
                    </div>
                )
            )}
        </div>
    }
}


export default Users;