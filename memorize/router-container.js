import { connect } from "react-redux";
import RouterComponent from "./components/router";
const mapStateToProps = (state) => {
  return (state) => {
    return {
      mode: state.mode,
    };
  };
};

export default connect(mapStateToProps)(RouterComponent);
