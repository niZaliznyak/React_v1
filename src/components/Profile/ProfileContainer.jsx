import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {Redirect, withRouter} from "react-router-dom";
import {getUserProfile} from "../../redux/profileReducer";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if(!userID){
            userID = 2;
        }
        this.props.getUserProfile(userID);
    };

    render() {
        if(!this.props.isAuthorize) return <Redirect to={'/login'}/>;

        return <div>
            <Profile {...this.props}/>
        </div>
    }// {...this.props} передает все пропсы из mapStateToProps ProfileContainer'а в <Profile/> (59 урок 16минута)
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuthorize: state.authorizeBlock.isAuthorize
});

export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer));