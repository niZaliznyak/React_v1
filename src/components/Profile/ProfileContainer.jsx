import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {Redirect, withRouter} from "react-router-dom";
import {getUserProfile} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if(!userID){
            userID = 2;
        }
        this.props.getUserProfile(userID);
    };

    render() {
        return <div>
            <Profile {...this.props}/>
        </div>
    }// {...this.props} передает все пропсы из mapStateToProps ProfileContainer'а в <Profile/> (59 урок 16минута)
}
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToPropsForRedirect = (state) => ({
    isAuthorize: state.authorizeBlock.isAuthorize
});

AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default connect(mapStateToProps, {getUserProfile})(withRouter(AuthRedirectComponent));