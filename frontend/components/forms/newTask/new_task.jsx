import React from 'react';
import { withRouter, Link } from 'react-router';


class newTask extends React.Component {
  constructor(props){
    super(props);
    this.state = { icon_phase: [this.props.pencil, "", ""] }
  }

  componentWillReceiveProps(newProps) {
    let { stage } = newProps.task;
    if(stage !== this.props.task.stage && stage !== undefined){
      let newIconPhase = ["", "", ""];
      newIconPhase[stage - 1] = this.props.pencil;
      this.setState({icon_phase: newIconPhase});
    }
  }

  render(){
    return (
      <div className="new-task-container">
        <section className="task-step-bar">
          <ol>
            <li>
              { this.state.icon_phase[0] } Fill Out Task Details
            </li>
            <li>
              { this.state.icon_phase[1] } View Taskers & Prices
            </li>
            <li>
              { this.state.icon_phase[2] } Confirm & Book
            </li>
          </ol>
        </section>

        <section className="trust-and-safety-container">
          <div className="trust-and-safety">
            <img src="https://d31ebqhycylygn.cloudfront.net/v3/assets/web/build/icons/trust_badge-7aa9db43e1fd330df7a2bd3d4d9e120c.svg" />
            <p> <strong> Trust & Safety Guarantee: </strong>
             $1MM insurance guarantee on every task. </p>
           <i className="icon-info trust-safety-info-icon" />
          </div>
        </section>

        <section className="main">
          <div className="category-title">
            <h2>
              { this.props.task.category_title}
            </h2>
            <Link to='/dashboard'> Change </Link>
          </div>

          <section id="stage-container" className="stage-container">
            { this.props.children }
          </section>
        </section>
    </div>
    );
  }
}

export default withRouter(newTask);
