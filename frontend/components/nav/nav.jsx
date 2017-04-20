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
      return (<div className="top-nav links-container">
        <a onClick={this.handleLogOut} className="nav-links">Log Out</a>
        <Link to="/dashboard" className="nav-links"> Dashboard </Link>
        <a className="nav-links last"> Account </a>
      </div>);
    } else {
      return(
        <div className="top-nav links-container">
          <Link to="/login" className="nav-links">Log In</Link>
          <Link to="/signup" className="nav-links">Sign Up</Link>
          <Link to="/demo" className="nav-links last">Demo</Link>
        </div>
      );
    }
  }

  render(){
    return (
      <header className="top-nav">
        <div className="top-nav logo">
          <img className="nav-logo" src="https://d31ebqhycylygn.cloudfront.net/v3/assets/web/logos/logo-h-3f5a5ffaf590a5dcff9ae06f47e7e67f.svg" />
        </div>
        { this.sessionLinks() }
      </header>
    );

  }

}


export default withRouter(Nav);
