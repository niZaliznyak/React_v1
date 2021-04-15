import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logOut} from "../../redux/authorizeReducer";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuthorize: state.authorizeBlock.isAuthorize,
    login: state.authorizeBlock.login
});

export default connect(mapStateToProps, {logOut})(HeaderContainer);