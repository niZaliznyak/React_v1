import React from 'react';
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import Loading from "../Common/Preloader/Loading";

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

export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers})(UsersContainer);