import React from 'react';
import { Link, withRouter } from 'react-router';
class EditForm extends React.Component {
  constructor(props){
    super(props);
      let { fname, lname, email, phone_number, zip_code } = this.props.user;
      this.state = {
        fname: fname,
        lname: lname,
        email: email,
        phone_number: phone_number,
        zip_code: zip_code
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
    let { id } = this.props.user;
    let { fname, lname, zip_code, email, phone_number } = this.state;
    this.props.editUser({id, fname, lname, zip_code, email, phone_number});
  }

  render() {
    const fnameInput = this.userInput("text", "First Name", "fname", this.state.fname, "name-label");

    const lnameInput = this.userInput("text", "Last Name", "lname", this.state.lname, "name-label");

    const zipCodeInput = this.userInput("text", "Zip Code", "zip_code", this.state.zip_code);

    const emailAddressInput = this.userInput("text", "Email Address", "email", this.state.email);

    const phoneInput = this.userInput("text", "Phone Number", "phone_number", this.state.phone_number);

    return (
      <div className="editFormContainer" >
        <div className="account-prof">
          <img src={this.props.user.img_url_med} className="account-prof-pic" />
        </div>
        <form className="editForm" onSubmit={this.handleSubmit} >
          <ul>
            <li className="edit-form-field">
              { fnameInput }
              { lnameInput }
            </li>
            <li className="edit-form-field">
              { emailAddressInput }
            </li>
            <li className="edit-form-field">
              { phoneInput }
            </li>
            <li>
              { zipCodeInput }
            </li>
          </ul>
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}

export default EditForm;
