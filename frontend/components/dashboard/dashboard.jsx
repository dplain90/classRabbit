import React from 'react';
import { Link, withRouter } from 'react-router';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <b> Welcome, {this.props.user.fname}! </b>

      </div>
    );
  }
}

export default Dashboard;
