import {Pagination} from "antd";
import UserElementMarkup from "./UserElementMarkup";
import React from 'react';

let Users = (props) => {

    function onChange(pageNumber, pageSize) {
        props.onPageChange(pageNumber, pageSize);
    }

    return <div>
        <Pagination defaultCurrent={1} total={props.totalUsersCount} onChange={onChange}
                    defaultPageSize={props.pageSize}/>

        {props.usersData.map(elem => (
            <UserElementMarkup key={elem.id} id={elem.id} name={elem.name}
                               followed={elem.followed} waitingSubscribe={props.waitingSubscribe}                                    follow={props.follow} unfollow={props.unfollow}
                               photos={elem.photos} status={elem.status}/>
        ))}

    </div>

}

export default Users;