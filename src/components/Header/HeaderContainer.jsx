import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setLoginData} from "../../redux/authorizeReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        }).then(response => {
            if(response.data.resultCode === 0){
                let {id, email, login} = response.data.data;
                this.props.setLoginData(id, email, login);
                debugger;
            }
        });
    };

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuthorize: state.authorizeBlock.isAuthorize,
    login: state.authorizeBlock.login
});

export default connect(mapStateToProps, {setLoginData})(HeaderContainer);