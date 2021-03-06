import React from 'react';
import { Link, withRouter } from 'react-router';

class Tasker extends React.Component {
  constructor(props){
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(){
    let { tasker, filter, router, updateNewTask } = this.props;
    updateNewTask ({
      tasker_id: tasker.id,
      date: filter.date,
      time: filter.time,
      stage: 3
      });
    router.push('/dashboard/newTask/stage3');
  }

  render(){
    let { tasker, task }  = this.props;
    return (
      <div className="tasker-container">
        <div className="profile-aside">
          <img src={tasker.tasker_avatar_url} />
          <button className="select-tasker" onClick={this.handleSelect}> Select & Continue </button>

        </div>

        <div className="tasker-info">
          <div className="tasker-header">
            <div className="tasker-title">
              <h3> {tasker.fname} {tasker.lname_initial}</h3> <p>      ${tasker.price}/hr </p>
              <p> {tasker.task_count} {task.category_title} Jobs Completed </p>
              <p> {tasker.review_count} {task.category_title} Reviews ({tasker.rating}% Positive) </p>
            </div>

            <div className="tasker-body">
              <h6>How I can help:</h6>
              <p className="tasker-pitch"> {tasker.pitch} </p>
              <div className="tasker-quote-container">
                <img src={tasker.author_avatar_url} className="prof-pic" />
                <p className="tasker-quote"> {tasker.quote}</p>
              </div>
            </div>
          </div>
        </div>

      </div>

     );
  }
}

export default withRouter(Tasker);
