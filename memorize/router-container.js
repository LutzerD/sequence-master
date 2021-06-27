import { connect } from "react-redux";
import RouterComponent from "./components/router";
const mapStateToProps = (state) => {
  return (state) => {
    return {
      screen: state.screen,
    };
  };
};

export default connect(mapStateToProps)(RouterComponent);
