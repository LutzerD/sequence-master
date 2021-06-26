import { connect } from "react-redux";
import MemorizeComponent from "./components/memorize/memorize";

const mapStateToProps = (state) => {
  return (state) => {
    return { 
      number: state.number,
      currentScore: state.currentScore,
      settings: state.settings,
     };
  };
};

export default connect(mapStateToProps)(MemorizeComponent);
