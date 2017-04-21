import React from 'react';
import { Link, withRouter } from 'react-router';
import TaskDetails from './task_details';

class RequestedTask extends React.Component {
  constructor(props){
    super(props);
    this.toggleDetails = this.toggleDetails.bind(this);
    this.showDetails = this.showDetails.bind(this);
    this.state = {
      details: false
    };
  }

  toggleDetails(e){
    let newDetailState = this.state.details ? false : true;
    this.setState({
      details: newDetailState
    });
  }

  showDetails(){
    if(this.state.details){
      return ( <TaskDetails details={this.props.task.details} />);
    }
  }


  render(){
    const { task } = this.props;

    return (
      <div className="requested-task">
        <div className="task-header">
          <h3> { task.title }</h3>
          <div className="task-tasker">
            <img src={ task.tasker_img_url} />
          </div>
        </div>

        <div className="task-date-info">
          <div className="task-date month-day">
            { task.date }
          </div>

          <div className="task-date time">
            { task.time }
          </div>
        </div>
        <div className="task-details-container">
          <a onClick={this.toggleDetails}> Details </a>
        </div>
        { this.showDetails() }
      </div>
    );
  }
}

export default RequestedTask;
