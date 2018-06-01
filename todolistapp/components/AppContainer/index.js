import { connect } from "react-redux";
import AppContainer from "./presenter";

const mapStateTopProps = (state, ownProps) => {
  const { user } = state;
  return {
    isLoggedIn: user.isLoggedIn
  };
};

export default connect(mapStateTopProps, null)(AppContainer);
