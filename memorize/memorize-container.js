import { connect } from 'react-redux';
import MemorizeComponent from './components/memorize/memorize';

const mapStateToProps = (state) =>{ return (state) => ({ ...state.number })};
export default connect(
  mapStateToProps,
)(MemorizeComponent);