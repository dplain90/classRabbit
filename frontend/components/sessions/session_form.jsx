import React from 'react';
import { Link, withRouter } from 'react-router';

class sessionForm extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        fname: "",
        lname: "",
        email: "",
        password: "",
        zip_code: "",
        errors: {}
      };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.displayError = this.displayError.bind(this);
    this.zipCodeInput = this.zipCodeInput.bind(this);
    this.nameInputs = this.nameInputs.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  displayError(key){
    return (
      <span className="error"> { this.props.errors[[key]]}</span>
    );
  }

  redirectIfLoggedIn(){
    if(this.props.loggedIn){
      this.props.router.push('/dashboard');
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    if(this.props.isSignUp){
      this.props.signup({user});
    } else {
      this.props.login({user});
    }
  }

  update(field){
    return (e) => {
      return this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  nameInputs() {
    if(this.props.isSignUp){
      return (
        <div className="name-fields auth-label" >
          <label className="name-label">First Name</label>
          <input type="text" value={this.state.fname} onChange={this.update("fname")} />
          { this.displayError("fname")}
        <label className="name-label">Last Name</label>
          <input type="text" value={this.state.lname} onChange={this.update("lname")} />
          { this.displayError("lname")}
        </div>
      );
    }
  }

  zipCodeInput() {
    if(this.props.isSignUp){
      return (
        <div className="auth-label">
          <label >Zip Code</label>
          <input type="text" value={this.state.zip_code} onChange={this.update("zip_code")} />
          { this.displayError("zip_code")}
        </div>

      );
    }
  }

  handleRedirect(e){
    this.props.clearErrors();
    this.props.router.push(e.currentTarget.attributes.name.value);
  }

  render(){
    const buttonText = this.props.isSignUp ? "Sign Up" : "Log In";
    const navLoc = () => {
      if(this.props.isSignUp){
        return (
          <a onClick={this.handleRedirect} name='/login' > Log In </a>
        ); } else {
          return (
          <a onClick={this.handleRedirect} name='/signup' > Sign Up </a>
          );
        }
      };

    return (
      <div className="auth-container">
        <div className="auth-main">
          <form onSubmit={this.handleSubmit} className="auth-form">
            { this.nameInputs() }
            <label className="auth-label">Email Address</label>
            <input type="text" value={this.state.email} onChange={this.update("email")} />
            { this.displayError("email")}
            <label className="auth-label">Password</label>
            <input type="password" value={this.state.password} onChange={this.update("password")} />
            { this.zipCodeInput() }
            <button type="submit"> { buttonText } </button>
          </form>
          <div className="login-footer">
            { navLoc() }
          </div>

        </div>
    </div>
    );
  }
}

export default withRouter(sessionForm);
