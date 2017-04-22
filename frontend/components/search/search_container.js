import { connect } from 'react-redux';
import Search from './search';
import { updateSearch } from '../../actions/search_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    searchResults: state.search.results,
    data: ownProps.data,
    handleSelect: ownProps.handleSelect
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateSearch: () => dispatch(updateSearch())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
