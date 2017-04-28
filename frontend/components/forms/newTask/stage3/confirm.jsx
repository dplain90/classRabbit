import React from 'react';
import { Link, withRouter } from 'react-router';
import { parseTask } from '../../../../reducers/selectors';
class Confirm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { errors: "" };
    this.parseTask = parseTask;
  }

  handleSubmit(e){
    this.props.createTask(this.parseTask(this.props.task));
    this.props.router.push('/dashboard');
  }

  render(){
    return (
      <div id="confirm-container">
        <button className="confirmButton" onClick={this.handleSubmit}> Confirm & Book
        </button>
        <p className="button-subtext">You are only charged after your task is complete.</p>
        { this.state.errors }
      </div>
    );
  }
}

export default withRouter(Confirm);
