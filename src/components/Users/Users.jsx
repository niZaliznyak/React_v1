import React from 'react';
import * as axios from "axios";

const Users = (props) => {
    if(props.usersData.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            console.log(response.data);
        });

        props.setUsers([
            {
                id: 0,
                follow: true,
                firstName: "Egor",
                lastName: "Bobrov",
                location: {country: "Ukraine", city: "Kyiv"},
                avatar: "url"
            },
            {
                id: 1,
                follow: true,
                firstName: "Alex",
                lastName: "Power",
                location: {country: "Russia", city: "Moscow"},
                avatar: "url"
            },
            {
                id: 2,
                follow: true,
                firstName: "Niko",
                lastName: "Belych",
                location: {country: "Poland", city: "Wroclav"},
                avatar: "url"
            }
        ])
    }

    return <div>
        {props.usersData.map(elem => (
                <div key={elem.id}>
                    <span>
                        <div>avatar</div>
                        <div>{elem.follow ?
                            <button onClick={ () => {props.unfollow(elem.id)} }>unfollow</button>
                            : <button onClick={ () => {props.follow(elem.id)} }>follow</button>
                        }</div>
                    </span>
                    <span>
                    {elem.firstName} {elem.lastName} from {elem.location.country}, {elem.location.city}
                    </span>
                </div>
            )
        )}
    </div>

}

export default Users;