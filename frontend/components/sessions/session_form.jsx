import React from 'react';
import { Link, withRouter } from 'react-router';

const signUpState = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  zip_code: ""
}

const logInState = {
  email: "",
  password: ""
};

class sessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.populateState();
  }

  signUpForm(){
    return (
      <input type="text" value={this.state.fname} onChange={this.update("fname")} />
      <input type="text" value={this.state.lname} onChange={this.update("lname")} />
      <input type="text" value={this.state.email} onChange={this.update("email")} />
      <input type="password" value={this.state.password} onChange={this.update("password")} />
      <input type="text" value={this.state.zip_code} onChange={this.update("zip_code")} />
    );
  };

  logInForm(){
    return (
      <input type="text" value={this.state.email} onChange={this.update("email")} />
      <input type="password" value={this.state.password} onChange={this.update("password")} />
    );
  };

  populateForm() {
    if(this.props.formType === 'signup')
      this.state = signUpState;
      this.form = signUpForm();
    else {
      this.state = logInState;
      this.form = signInForm();
    }
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if(this.props.loggedIn){
      this.router.push('/dashboard');
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});

  }

  update(field){
    this.setState({
      [field]: e.target.value
    });
  }

  render(){
    return (
      <div className="loginForm">
        <form onSubmit={handleSubmit}>
          { this.form }
          <button type="submit"> Submit </button>
        </form>
      </div>
    );


  }
};

export default withRouter(sessionForm);
