import React from 'react';
import { Link, withRouter } from 'react-router';
class EditForm extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        fname: "",
        lname: "",
        email: "",
        password: "",
        zip_code: "",
        locality: ""
      };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.userInput = this.userInput.bind(this);

  }


  userInput(type, title, key, state, clname){
    // const err = this.props.errors[key] ? " err" : "";
    return (
      <label className="auth-label">{title}
        <input className={`auth-input`} type={type} value={state} onChange={this.update(key)} />
        <span className="error"> </span>
      </label>
    );
  }

  update(field){
    return (e) => {
      return this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.props.formType === 'login') {
      const user = this.state;
      this.props.login({user});
    } else {
    this.calculateLocality(this.state.zip_code);
    }
  }

  render() {
    const fnameInput = this.userInput("text", "First Name", "fname", this.state.fname, "name-label");

    const lnameInput = this.userInput("text", "Last Name", "lname", this.state.lname, "name-label");

    const zipCodeInput = this.userInput("text", "Zip Code", "zip_code", this.state.zip_code);

    const emailAddressInput = this.userInput("text", "Email Address", "email", this.state.email);

    const passwordInput = this.userInput("password", "Password", "password", this.state.password);

    return (
      <div className="editFormContainer" >
        <form onSubmit={this.handleSubmit} >
          { fnameInput }
          { lnameInput }
          { emailAddressInput }
          { passwordInput }
          { zipCodeInput }
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}

export default EditForm;
