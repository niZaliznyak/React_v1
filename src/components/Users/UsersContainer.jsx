import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    toggleSubscribeProgress,
    toggleWaiting,
    unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import Loading from "../Common/Preloader/Loading";
import {usersAPI} from "../../api/api";

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        waitingResponse: state.usersPage.waitingResponse,
        waitingSubscribe: state.usersPage.waitingSubscribe
    }
};

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID)); // dispatch возвращает результат работы AC
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        toggleWaiting: (toggle) => {
            dispatch(toggleWaitingAC(toggle));
        }
    };
}*/

//в классовую компоненту не приходят props. Props приходят в уже отрисованый jsx. Поэтому тут обращаемся к пропсам через this.
class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.usersData.length === 0) {
            this.props.toggleWaiting(true);

            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleWaiting(false);
                this.props.setUsers(data.items);
            });
        }
        ;
    }

    onPageChange = (pageNumber) => {
        this.props.toggleWaiting(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleWaiting(false);
            this.props.setUsers(data.items);
        });
    }

    render() {
        return <>
            {this.props.waitingResponse ? <Loading/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                   usersData={this.props.usersData} follow={this.props.follow} unfollow={this.props.unfollow}
                   onPageChange={this.onPageChange} waitingSubscribe={this.props.waitingSubscribe}
                   toggleSubscribeProgress={this.props.toggleSubscribeProgress}
            />
        </>
    }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, toggleWaiting, toggleSubscribeProgress})(UsersContainer);