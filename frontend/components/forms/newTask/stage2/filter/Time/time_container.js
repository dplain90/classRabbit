import { connect } from 'react-redux';
import Time from './time';
import { updateFilter } from '../../../../../../actions/filter_actions';

const mapStateToProps = (state, ownProps) => ({
  time: state.filter.time
 });

const mapDispatchToProps = (dispatch, ownProps) => ({
   updateFilter: (parameter) => dispatch(updateFilter(parameter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Time);
