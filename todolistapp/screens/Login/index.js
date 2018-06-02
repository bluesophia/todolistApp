import { connect } from "react-redux";
import Container from "./container";
import { bindActionCreators } from 'redux';
import { reducer, actionCreators as loginActions } from "../../redux/modules/user";

function mapStateToProps(state){
    const { isLoggedIn, email, password } = state; 
    return {
        isLoggedIn,
        email,
        password
    };
}
function mapDispatchToProps(dispatch){
    return {
        logIn: bindActionCreators(loginActions.logIn, dispatch),
        logOut: bindActionCreators(loginActions.logOut, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);