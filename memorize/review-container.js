import { connect } from "react-redux";
import ReviewComponent from "./components/review";

const mapStateToProps = (state) => {
  return (state) => {
    return { 
      ...state
     };
  };
};

export default connect(mapStateToProps)(ReviewComponent);
