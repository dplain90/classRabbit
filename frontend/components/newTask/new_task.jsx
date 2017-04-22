import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors';
import Stage1 from './stage1.jsx';
import Stage2 from './stage2.jsx';
import Stage3 from './stage3.jsx';
import React from 'react';
import { fetchCategory } from '../../util/api_util';
import { getTask, setTask, clearTask } from '../../util/session_util';
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
      return ( <Stage1 task={task} /> );
    } else if( stage === 2) {
      return ( <Stage2 task={task} />);
    } else {
      return ( <Stage3 task={task} />);
    }
  }

  componentDidMount(){

  }

  handleCategoryChange(){
    clearTask();
  }

  render(){
    console.log(this.props.category);
    console.log(this.props.task);
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
          <strong> Trust & Safety Guarantee: </strong>
          <p> $1MM insurance guarantee on every task. </p>
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
  return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(newTask);
