import React from 'react';
import { Link, withRouter } from 'react-router';

class sessionForm extends React.Component {
  constructor(props){
    super(props);
    this.setInitialState();
    // this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.populateForm();
  }

  componentDidMount(){

  }

  setInitialState(){
    if(this.props.formType === 'signup') {
      this.state = {
        email: "",
        password: ""
      };
    }
    else {
      this.state = {
        fname: "",
        lname: "",
        email: "",
        password: "",
        zip_code: ""
      };
    }
  }



  signUpForm(){
    return (
      <form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.fname} onChange={this.update("fname")} />
      <input type="text" value={this.state.lname} onChange={this.update("lname")} />
      <input type="text" value={this.state.email} onChange={this.update("email")} />
      <input type="password" value={this.state.password} onChange={this.update("password")} />
      <input type="text" value={this.state.zip_code} onChange={this.update("zip_code")} />
      <button type="submit"> Submit </button>
      </form>
    );
  };

  logInForm(){
    return (
      <form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.email} onChange={this.update("email")} />
      <input type="password" value={this.state.password} onChange={this.update("password")} />
      <button type="submit"> Submit </button>
      </form>
    );
  };

  populateForm() {
    if(this.props.formType === 'signup') {
      const signUpState = {
        fname: this.state.fname,
        lname: this.state.lname,
        email: this.state.email,
        password: this.state.password,
        zip_code: this.state.zip_code
      }
      this.state = signUpState;
      this.form = this.signUpForm();
    }
    else {
      const logInState = {
        email: this.state.email,
        password: this.state.password
      };
      this.state = logInState;
      this.form = this.logInForm();
    }
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
    this.populateForm();
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
    return (e) => {

      return this.setState({
        [field]: e.target.value
      });
    }
  }

  render(){
    return (
      <div className="loginForm">
          { this.form }
      </div>
    );


  }
};

export default withRouter(sessionForm);
