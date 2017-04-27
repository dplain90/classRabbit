import { connect } from 'react-redux';
import newTask from './new_task';
import { getTask } from './session_util';
import { pencilIcon } from '../../helpers/icon_helper';
const mapStateToProps = (state, ownProps) => ({ task: getTask(), pencil: pencilIcon() });

export default connect(mapStateToProps)(newTask);
