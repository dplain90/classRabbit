import React from 'react';
import { Link, withRouter } from 'react-router';

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(){
    this.props.logout().then(this.props.router.push('/'));
  }

  render(){
    return (
      <header>
        <a onClick={this.handleLogOut}>Log Out</a>
        <Link to="/dashboard"> Dashboard </Link>
        <a> Account </a>
      </header>
    );

  }

}

export default withRouter(Nav);
