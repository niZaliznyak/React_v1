import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {getUserProfile, getUserStatus, sendNewStatus} from "../../redux/profileReducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.yourID;
        this.props.getUserProfile(userID);
        this.props.getUserStatus(userID);
    };

    render() {
        return <div>
            <Profile {...this.props} sendNewStatus={this.props.sendNewStatus}/>
        </div>
    }// {...this.props} передает все пропсы из mapStateToProps ProfileContainer'а в <Profile/> (59 урок 16минута)
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    yourID: state.authorizeBlock.userID
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, sendNewStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer); //оборачивание идет по функциям снизу вверх по списку
