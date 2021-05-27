import React from 'react';
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import Loading from "../Common/Preloader/Loading";
import {compose} from "redux";
import {
    getCurrentPage,
    getPageSize,
    getTotalUsersCount, getUsersData,
    waitingResponse,
    waitingSubscribe
} from "../../redux/user-selector";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    /*return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        waitingResponse: state.usersPage.waitingResponse,
        waitingSubscribe: state.usersPage.waitingSubscribe
    }*/
    return {
        usersData: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        waitingResponse: waitingResponse(state),
        waitingSubscribe: waitingSubscribe(state)
    }
};

//в классовую компоненту не приходят props. Props приходят в уже отрисованый jsx. Поэтому тут обращаемся к пропсам через this.
class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
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

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers})
)(UsersContainer);