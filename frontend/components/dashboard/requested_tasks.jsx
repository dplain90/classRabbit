import React from 'react';
import { Link, withRouter } from 'react-router';
import RequestedTask from './requested_task';
import { asArray } from '../../reducers/selectors';

class RequestedTasks extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTasks();
  }

  render(){
    let allTasks = asArray(this.props.tasks).map( (task) => {
      return (<RequestedTask key={task.id} task={task} />);
    });

    return (
      <section className="requested-tasks">
        { allTasks }
      </section>
    );

  }

}

export default withRouter(RequestedTasks);
