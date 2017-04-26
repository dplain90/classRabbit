import { connect } from 'react-redux';
import Stage1 from './stage1';

const mapStateToProps = (state, ownProps) => ({ task: state.task });

export default connect(mapStateToProps)(Stage1);
