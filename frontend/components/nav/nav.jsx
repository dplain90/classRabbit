import React from 'react';
import { Link, withRouter } from 'react-router';

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.sessionLinks = this.sessionLinks.bind(this);
  }

  handleLogOut(){
    this.props.logout().then(this.props.router.push('/'));
  }

  sessionLinks(){
    if(this.props.loggedIn){
      return (<div className="nav auth-links">
        <a onClick={this.handleLogOut}>Log Out</a>
        <Link to="/dashboard"> Dashboard </Link>
        <a> Account </a>
      </div>);
    } else {
      return(
        <div className="nav auth-links">
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/demo">Demo</Link>
        </div>
      );
    }
  }

  render(){
    return (
      <header>
        { this.sessionLinks() }
      </header>
    );

  }

}

export default withRouter(Nav);
