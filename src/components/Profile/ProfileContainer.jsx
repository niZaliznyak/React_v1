import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if(!userID){
            userID = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`).then(response => {
            this.props.setUserProfile(response.data);
        });
    };

    render() {
        return <div>
            <Profile {...this.props}/>
        </div>
    }// {...this.props} передает все пропсы из mapStateToProps ProfileContainer'а в <Profile/> (59 урок 16минута)
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

/*
let withURLDataContainerComponent = withRouter(ProfileContainer); withRouter берет данные url
export default connect(mapStateToProps, {setUserProfile})(withURLDataContainerComponent)); можно и так
*/

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));