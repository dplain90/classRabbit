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

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.zipCodeInput = this.zipCodeInput.bind(this);
    this.nameInputs = this.nameInputs.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  renderErrors() {
    return (
      <ul>
        {
          this.props.errors.map((error, idx) => {
            return (
              <li key={idx + "error"}>
                {error}
              </li>
            );
          })
        }
      </ul>
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
        <label className="name-fields">
          <input type="text" value={this.state.fname} onChange={this.update("fname")} />
          <input type="text" value={this.state.lname} onChange={this.update("lname")} />
        </label>
      );
    }
  }

  zipCodeInput() {
    if(this.props.isSignUp){
      return (
          <input type="text" value={this.state.zip_code} onChange={this.update("zip_code")} />
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
      <div className="loginForm">
        <form onSubmit={this.handleSubmit}>
          { this.nameInputs() }
          <input type="text" value={this.state.email} onChange={this.update("email")} />
          <input type="password" value={this.state.password} onChange={this.update("password")} />
          { this.zipCodeInput() }
          <button type="submit"> { buttonText } </button>
        </form>
          { navLoc() }
          { this.renderErrors() }
      </div>
    );
  }
}

export default withRouter(sessionForm);
