import {sendSignIdData} from "../../redux/authorizeReducer";
import Login from "./Login";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        isAuthorize: state.authorizeBlock.isAuthorize
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        signIn: (email, password, rememberMe) => {
            dispatch(sendSignIdData(email, password, rememberMe));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);