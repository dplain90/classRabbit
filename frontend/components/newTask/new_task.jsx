import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors';
import Stage1 from './stage1.jsx';
import Stage2Container from './stage2.jsx';
import Stage3 from './stage3.jsx';
import React from 'react';
import { fetchCategory } from '../../util/api_util';
import { getTask, setTask, clearTask } from '../../util/session_util';
import { updateNewTask } from '../../actions/task_actions';
import { Link } from 'react-router';

class newTask extends React.Component {
  constructor(props){
    super(props);
    this.renderStage = this.renderStage.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);

  }

  renderStage() {
    const task = this.props.task;
    const stage = this.props.task.stage ;
    if(stage === 1){
      return ( <Stage1 updateTask={this.props.updateTask} /> );
    } else if( stage === 2) {
      return ( <Stage2Container updateTask={this.props.updateTask} />);
    } else {
      return ( <Stage3 updateTask={this.props.updateTask} />);
    }
  }

  componentDidMount(){

  }

  handleCategoryChange(){
    clearTask();
  }

  render(){
    return (
      <div className="new-task-container">
      <section className="task-step-bar">
        <ol>
          <li>
            Fill Out Task Details
          </li>

          <li>
            View Tasksers & Prices
          </li>

          <li>
            Confirm & Book
          </li>
        </ol>
      </section>
      <section className="trust-and-safety-container">
        <div className="trust-and-safety">
          <img src="https://d31ebqhycylygn.cloudfront.net/v3/assets/web/build/icons/trust_badge-7aa9db43e1fd330df7a2bd3d4d9e120c.svg" />
          <p> <strong> Trust & Safety Guarantee: </strong>
           $1MM insurance guarantee on every task. </p>
        </div>
      </section>

      <section className="new-task-form">
        <div className="category-title">
          <h2> { this.props.task.title }</h2>
          <Link to='/dashboard' onClick={this.handleCategoryChange}> Change </Link>
        </div>

        <div className="stage-container">
          { this.renderStage() }
        </div>
      </section>
    </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let newTask = getTask();
  return {
    task: newTask
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateTask: (task) => dispatch(updateNewTask(task))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(newTask);
