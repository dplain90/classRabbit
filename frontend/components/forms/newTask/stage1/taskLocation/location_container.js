import { connect } from 'react-redux';
import Location from './location';

const mapStateToProps = (state, ownProps) => ({ task: state.task });

export default connect(mapStateToProps)(Location);
