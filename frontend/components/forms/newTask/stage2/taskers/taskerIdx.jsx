import React from 'react';
import TaskerContainer from './tasker_container';
import { Link } from 'react-router';

class TaskerIdx extends React.Component {
  constructor(props){
    super(props);
    this.noResults = this.noResults.bind(this);
  }

  noResults(){
    return (
      <div className="noResults" >
        <label className="no-results-response">
          <h2> Sorry! We were unable to locate any taskers in your area. </h2>
          <Link to='/dashboard/newTask/stage1'> Go Back </Link>
        </label>
      </div>
    );
  }
  
  render() {
    let taskerResults = "Sorry no results!";

      taskerResults = this.props.results.map( (tasker) => {
      return (
        <TaskerContainer tasker={tasker} key={tasker.id} />
      );
    });


    return (
      <section className="taskers-index">
        { taskerResults }
      </section>
    );
  }
}

export default TaskerIdx;
