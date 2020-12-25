import React from 'react';
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducers";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userID) => {
            dispatch(followAC(userID)); // dispatch возвращает результат работы AC
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    };
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;