  import React from 'react';
import { Link, withRouter } from 'react-router';

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.sessionLinks = this.sessionLinks.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }


  componentWillReceiveProps(newProps) {
    if(newProps.loggedIn !== this.props.loggedIn) {
      if(newProps.loggedIn === null) {
        this.props.router.push('/login');
      }
    }
  }

  handleLogOut(){
    this.props.logout();
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
        <Link to="/account" id="nav-links-last"> Account </Link>
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
          <Link to="/">
          <p className="logo-test dark">  Class
          </p>
            <img className="nav-logo" src="https://assets.taskrabbit.com/v3/assets/web/logos/logo-h-3f5a5ffaf590a5dcff9ae06f47e7e67f.svg" />
          </Link>
        </div>
        { this.sessionLinks() }
      </header>
    );

  }

}


export default withRouter(Nav);
