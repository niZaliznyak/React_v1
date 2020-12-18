import React from 'react';

const Users = (props) => {
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