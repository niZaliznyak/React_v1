import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logOut} from "../../redux/authorizeReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    };

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuthorize: state.authorizeBlock.isAuthorize,
    login: state.authorizeBlock.login
});

export default connect(mapStateToProps, {getAuthUserData, logOut})(HeaderContainer);