import React from 'react';
import { Link, withRouter } from 'react-router';

class userInput extends React.Component {
  constructor(props){
    super(props);
    this.props.title
  }

  render(){
    return (
      <label className="auth-label"> {this.props.title}
      <input type="text" value={this.state.email} onChange={this.update("email")} />
      { this.displayError("email")}
      <span className="error"> { this.props.errors[[key]]}</span>
      </label>
    );
  }
}
