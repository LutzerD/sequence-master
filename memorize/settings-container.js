import { connect } from "react-redux";
import SettingsComponent from "./components/settings";

const mapStateToProps = (state) => {
  return (state) => {
    return { 
      ...state
     };
  };
};

export default connect(mapStateToProps)(SettingsComponent);
