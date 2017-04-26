import React from 'react';
import { withRouter, Link } from 'react-router';
import { pencilIcon } from '../../helpers/icon_helper';

class newTask extends React.Component {
  constructor(props){
    super(props);
    this.renderIcon = this.renderIcon.bind(this);
  }

  renderIcon(renderStage) {
    let {currentStage: stage} = this.props.task;
    return stage === renderStage ? pencilIcon : "";
  }

  render(){
    return (
      <div className="new-task-container">
        <section className="task-step-bar">
          <ol>
            <li>
              {this.renderIcon(1)} Fill Out Task Details
            </li>
            <li>
              {this.renderIcon(2)} View Taskers & Prices
            </li>
            <li>
              {this.renderIcon(3)} Confirm & Book
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
        <section className="phase-container">
          { this.props.children }
        </section>

    </div>
    );
  }
}

export default withRouter(newTask);
