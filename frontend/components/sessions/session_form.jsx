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
        zip_code: ""
      };
    this.ifSignUp = this.ifSignUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.userInput = this.userInput.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
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

  handleRedirect(e){
    this.props.clearErrors();
    this.props.router.push(e.currentTarget.attributes.name.value);
  }

  userInput(type, title, key, state, clname){
    return (
      <label className={`auth-label${ clname}`}>{title}
        <input type={type} value={state} onChange={this.update(key)} />
        <span className="error"> {this.props.errors[key]}</span>
      </label>
    );
  }

  ifSignUp(signUpInput, logInInput){
    if(this.props.isSignUp){
      return signUpInput;
    } else {
      return logInInput;
    }
  }

  render(){
    const fnameInput = this.userInput("text", "First Name", "fname", this.state.fname, "name-label");

    const lnameInput = this.userInput("text", "Last Name", "lname", this.state.lname, "name-label");

    const zipCodeInput = this.userInput("text", "Zip Code", "zip_code", this.state.zip_code);

    const emailAddressInput = this.userInput("text", "Email Address", "email", this.state.email);

    const passwordInput = this.userInput("password", "Password", "password", this.state.password);
    return (
      <div className="auth-container">
        <div className="auth-main">
          <form onSubmit={this.handleSubmit} className="auth-form">
            { this.ifSignUp(fnameInput, "") }
            { this.ifSignUp(lnameInput, "") }
            { emailAddressInput }
            { passwordInput }
            { this.ifSignUp(zipCodeInput, "") }
            <button type="submit">{this.ifSignUp("Sign Up", "Log In")}</button>
          </form>
          <div className="login-footer">
            <a onClick={this.handleRedirect} name={this.ifSignUp('/login', '/signup')}>
              {this.ifSignUp('Log In', 'Sign Up')}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(sessionForm);
