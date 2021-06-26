import { connect } from "react-redux";
import IntroComponent from "./components/intro";

const mapStateToProps = (state) => {
  return (state) => {
    return { 
      ...state
     };
  };
};

export default connect(mapStateToProps)(IntroComponent);
