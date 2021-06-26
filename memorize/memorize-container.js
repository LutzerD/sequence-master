import { connect } from "react-redux";
import MemorizeComponent from "./components/memorize/memorize";

const mapStateToProps = (state) => {
  return (state) => {
    console.log(state)
    return { 
      ...state
     };
  };
};

export default connect(mapStateToProps)(MemorizeComponent);
