import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getTask, setTask, clearTask } from '../../util/session_util';
import { getTaskers } from '../../actions/user_actions';
import { asArray } from '../../reducers/selectors';
import Tasker from './tasker';

class Stage2 extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    let currentTask = getTask();
    this.props.getTaskers(currentTask.category_id, currentTask.locality);
  }

  render(){
    let taskers = asArray(this.props.taskers).map( (tasker) => {
      return (
        <Tasker tasker={tasker} title='Sample' key={tasker.id} />
        );
    });



    return (
      <div className="stage2-container">
        <section className="filter-container">
          <div className="sorted-by-container">
            <h4 className="sorted-by-title"> SORTED BY: </h4>
            <select className="sorted-by-filter"> </select>
          </div>

          <div className='time-and-date-container'>
            <span className="time-and-date-title">
              TASK DATE & TIME
            </span>

            <div className="date-carousel">

            </div>

            <select className="time"> </select>
          </div>
        </section>

        <section className="taskers-index">
          { taskers }
        </section>

      </div>
    );
  }
}

const newTask = getTask();

const mapStateToProps = (state, ownProps) => {
  return {
    task: newTask,
    taskers: state.taskers,
    availabilities: state.availabilities
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTaskers: (category_id, locality) => dispatch(getTaskers(category_id, locality))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stage2);
