import React from 'react';
import {connect} from "react-redux";
import FriendsQuickPanel from "./FriendsQuickPanel";

let mapStateToProps = (state) => {
    return {
        dialogsNamesData: state.dialogsPage.dialogsNamesData
    }
}
let mapDispatchToProps = () => {
    return {

    }
}

const FriendsQuickPanelContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsQuickPanel);

export default FriendsQuickPanelContainer;