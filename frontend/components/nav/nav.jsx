import React from 'react';
import { Link, withRouter } from 'react-router';

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.sessionLinks = this.sessionLinks.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleLogOut(){
    this.props.logout().then(this.props.router.push('/'));
  }

  handleDemo(){
    const guestUser = {
      user: {
        email: 'guest@classrabbit.com',
        password: 'starwars'
      }
    };

    this.props.login(guestUser);
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
          <a onClick={this.handleDemo} className="nav-links last">Demo</a>
        </div>
      );
    }
  }

  render(){
    return (
      <header className="top-nav">
        <div className="top-nav logo">
          <Link to="/dashboard">
          <p className="logo-test">  <div className="dark"> Class</div>
          </p>
            <img className="nav-logo" src="https://d31ebqhycylygn.cloudfront.net/v3/assets/web/logos/logo-h-3f5a5ffaf590a5dcff9ae06f47e7e67f.svg" />
          </Link>
        </div>
        { this.sessionLinks() }
      </header>
    );

  }

}


export default withRouter(Nav);
