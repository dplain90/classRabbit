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
        locality: ""
      };
    this.ifSignUp = this.ifSignUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.userInput = this.userInput.bind(this);
    this.calculateLocality = this.calculateLocality.bind(this);
    this.geocoder = new google.maps.Geocoder;


  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if(this.props.loggedIn){
      if(this.props.redirect){
        this.props.updateNewTask({redirect: false});
        this.props.router.push('dashboard/newTask/stage1');
      } else {
        this.props.router.push('/dashboard');
      }
    }
  }

  calculateLocality(zip) {
    if(this.state.zip_code === ""){
      return this.props.receiveError({zip_code: 'Zip code required'});
    }
    const callback = (results, status) => {
       if (status == google.maps.GeocoderStatus.OK) {
         let { address_components } = results[0];
         for (var i = 0; i < address_components.length; i++) {
           let localityIdx = address_components[i].types.indexOf('sublocality');
           if(localityIdx !== -1)
            {
              this.setState({locality: address_components[i].long_name});
              const user = this.state;
              if(this.props.isSignUp){
                this.props.signup({user});
              } else {
                this.props.login({user});
              }
            }
         }
         } else {
           this.props.receiveError({zip_code: 'Invalid Zip Code'});
      }};
      let fixed = callback.bind(this);
      this.geocoder.geocode.call(this, { 'address': this.state.zip_code}, fixed);
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

  update(field){
    return (e) => {
      return this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  componentWillReceiveProps(newProps){
    if(newProps.formType !== this.props.formType){
      this.props.clearErrors();
      this.setState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        zip_code: ""
      });
    }
  }

  userInput(type, title, key, state, clname){
    const err = this.props.errors[key] ? " err" : "";
    return (
      <label className="auth-label">{title}
        <input className={`auth-input${err}`} type={type} value={state} onChange={this.update(key)} />
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
      <div className="auth-background">
        <div className="auth-container">
          <div className="auth-main">
            <div className="auth-logo" src="./imgs/classrabbit.png" />

            <form onSubmit={this.handleSubmit} className="auth-form">
              { this.ifSignUp(fnameInput, "") }
              { this.ifSignUp(lnameInput, "") }
              { emailAddressInput }
              { passwordInput }
              { this.ifSignUp(zipCodeInput, "") }
              <button type="submit">{this.ifSignUp("Sign Up", "Log In")}</button>
            </form>
            <div className="login-footer">
              <Link to={this.ifSignUp('/login', '/signup')}>
                {this.ifSignUp('Log In', 'Sign Up')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(sessionForm);
