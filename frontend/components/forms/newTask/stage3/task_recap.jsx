import React from 'react';
import { connect } from 'react-redux';
import { updateNewTask } from '../../../../actions/task_actions';

class TaskRecap extends React.Component {
  constructor(props){
    super(props)
    this.handleDescription = this.handleDescription.bind(this);
  }

  handleDescription(e){
    this.props.updateNewTask({description: e.target.value});
  }

  render(){
    let { date, time, address, description, category_title } = this.props.task;
    let { tiny_avatar_url, fname, lname_initial, price } = this.props.tasker;

    return (
      <div className="stage3-taskDetails">
        <div className="stage3-title" >
          <h2> { category_title } </h2>
          <h3> ${ price }/hr </h3>
        </div>

        <div className="time-and-tasker">
          <div className="stage3-time">
            <label className="date-time">
              Date & Time
            </label>
            { date } { time }
          </div>


          <div className="stage3-tasker">
            <label className="tasker">
              Tasker
            </label>
            <p className="stage3-content">
              { fname } {lname_initial}
            </p>
          </div>
        </div>

        <div className="stage3-location">
          <label className="location">
            Task Location
          </label>
          <p className="stage3-content">
            { address }
          </p>
        </div>

        <div className="stage3-description">
          <textarea onChange={this.handleDescription} >
            {description}
          </textarea>
        </div>
    </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
     task: state.task,
     tasker: state.taskers[state.task.tasker_id]
   };

};

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateNewTask: (task) => dispatch(updateNewTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskRecap);
