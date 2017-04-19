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
    this.populateForm = this.populateForm.bind(this);
  }

  componentDidMount(){
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
  }

  logInForm(){
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.email} onChange={this.update("email")} />
        <input type="password" value={this.state.password} onChange={this.update("password")} />
        <button type="submit"> Submit </button>
      </form>
    );
  }

  populateForm() {
    if(this.props.formType === 'signup') {
      return this.signUpForm();
    }
    else {
      return this.logInForm();
    }
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
    this.props.processForm({user});
  }

  update(field){

    return (e) => {
      console.log(this.state);
      return this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  render(){
    return (
      <div className="loginForm">
          { this.populateForm() }
      </div>
    );
  }
}

export default withRouter(sessionForm);
