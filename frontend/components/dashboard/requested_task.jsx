import React from 'react';
import { Link, withRouter } from 'react-router';
import TaskDetails from './task_details';
import SmoothCollapse from 'react-smooth-collapse';
class RequestedTask extends React.Component {
  constructor(props){
    super(props);
    this.toggleDetails = this.toggleDetails.bind(this);
    this.showDetails = this.showDetails.bind(this);
    this.state = {
      details: false,
      chevron: "icon-chevron-down"
    };
  }

  toggleDetails(e){
    let newDetailState;

    if(this.state.details) {
      newDetailState = {
        details: false,
        chevron: "icon-chevron-down" };
      } else {
        newDetailState = {
          details: true,
          chevron: "icon-chevron-up"
        };
      }

    this.setState(newDetailState);
  }

  showDetails(){
    if(this.state.details){
      return ( <TaskDetails details={this.props.task.details} />);
    }
  }


  render(){
    const { task } = this.props;
    const taskDate = new Date(task.date);
    return (
      <div className="requested-task">
        <div className="task-header">
          <h3> { task.title }</h3>
          <div className="task-tasker">
            <img src={ task.tasker_img_url} className="prof-pic"/>
          </div>
        </div>

        <div className="task-date-info">
          <div className="task-date month-day">
            <h4> { taskDate.getDate() } </h4>
            <p> { dateAbrev[taskDate.getMonth()] } </p>
          </div>

          <div className="task-date time">
            { task.time }
          </div>
        </div>
        <SmoothCollapse expanded={this.state.details}>
          { this.showDetails() }
        </SmoothCollapse>
        <div className="task-details-container">
          <a onClick={this.toggleDetails}> Details <i className={this.state.chevron} /> </a>
        </div>

      </div>
    );
  }
}

export default RequestedTask;
