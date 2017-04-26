import React from 'react';
import { Link, withRouter } from 'react-router';

class TaskDescription extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearDescription = this.clearDescription.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

    this.state = {
      default_description: true,
      task_description: ""
    };
  }

  clearDescription(){
    if(this.state.default_description){
      this.setState({
        default_description: false,
        task_desc: ""
      });
    }
  }

  handleDescriptionChange(e){
    this.setState({
        task_description: e.target.value
      });
  }

  handleSubmit(){
    this.props.updateNewTask({task_description: this.state.task_description});
    this.props.updateFilterResults(this.props.filter, this.props.taskers, this.props.availabilities);
    this.props.router.push('/dashboard/newTask/stage2');
  }

  render(){
    return (
        <div className="description-form" >
          <h3 className="about-task-header">
            TELL US ABOUT YOUR TASK
          </h3>

          <p>
            If you need two or more Taskers, please post additional tasks for each Tasker needed.
          </p>

          <textarea onClick={this.clearDescription} onChange={this.handleDescriptionChange} value={this.state.task_description}  >
          </textarea>

          <span className="continue-container">
            <button onClick={this.handleSubmit}> See Taskers & Prices </button>
          </span>
        </div>
    );
  }
}

export default withRouter(TaskDescription);
