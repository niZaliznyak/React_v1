import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {getStatus, getUserProfile} from "../../redux/profileReducer";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if(!userID){
            userID = 2;
        }
        this.props.getUserProfile(userID);
        this.props.getStatus(userID);
    };

    render() {
        return <div>
            <Profile {...this.props}/>
        </div>
    }// {...this.props} передает все пропсы из mapStateToProps ProfileContainer'а в <Profile/> (59 урок 16минута)
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus}),
    withRouter
)(ProfileContainer); //оборачивание идет по функциям снизу вверх по списку
