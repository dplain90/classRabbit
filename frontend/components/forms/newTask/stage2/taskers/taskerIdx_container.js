import { connect } from 'react-redux';
import TaskerIdx from './taskerIdx';
import { updateFilterResults } from '../../../../../actions/filter_actions';
const mapStateToProps = (state, ownProps) => ({
  results: state.filter.results
 });

export default connect(mapStateToProps)(TaskerIdx);
