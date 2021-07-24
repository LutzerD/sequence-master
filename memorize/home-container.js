import { connect } from "react-redux";
import HomeComponent from "./components/home";


const mapStateToProps = (state) => {
  return (state) => {
    return { 
      ...state
     };
  };
};

export default connect(mapStateToProps)(HomeComponent);