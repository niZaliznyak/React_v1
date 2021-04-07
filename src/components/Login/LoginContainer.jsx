import React from 'react';
import {sendSignIdData, } from "../../redux/authorizeReducer";
import {compose} from "redux";
import Login from "./Login";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        isAuthorize: state.authorizeBlock.isAuthorize
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        signIn: () => {
            dispatch(sendSignIdData());
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Login);