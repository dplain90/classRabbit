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
  }

  componentDidMount(){
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

  render(){
    return (
      <div className="loginForm">
        <form onSubmit={this.handleSubmit}>
          { this.nameInputs() }
          <input type="text" value={this.state.email} onChange={this.update("email")} />
          <input type="password" value={this.state.password} onChange={this.update("password")} />
          { this.zipCodeInput() }
          <button type="submit"> {this.props.buttonText} </button>
        </form>
          { this.renderErrors() }
      </div>
    );
  }
}

export default withRouter(sessionForm);
