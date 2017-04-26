import React from 'react';
import TaskerContainer from './tasker_container';
class TaskerIdx extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    let taskerResults = this.props.results.map( (tasker) => {
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
