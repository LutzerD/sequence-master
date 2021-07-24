import { connect } from "react-redux";
import { FinishComponent } from "./components/finish";

const mapStateToProps = (state) => {
  return (state) => {
    return {
      ...state,
    };
  };
};

export default connect(mapStateToProps)(FinishComponent);
