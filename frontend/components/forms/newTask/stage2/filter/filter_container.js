import { connect } from 'react-redux';
import Filter from './filter';
import { updateFilter, updateFilterResults } from '../../../../../actions/filter_actions';
const mapStateToProps = (state, ownProps) => ({
  taskers: state.taskers,
  availabilities: state.availabilities,
  filter: state.filter
 });

const mapDispatchToProps = (dispatch, ownProps) => ({
   updateFilterResults: (filters, taskers, availabilities) => dispatch(updateFilterResults(filters, taskers, availabilities)),
   updateFilter: (parameter) => dispatch(updateFilter(parameter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
