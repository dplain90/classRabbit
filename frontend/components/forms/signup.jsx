import React from 'react';

class signUpForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.props.handleSubmit;
    this.update = this.props.update;
    this.user = this.props.user;
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.user.fname} onChange={this.update("fname")} />
        <input type="text" value={this.user.lname} onChange={this.update("lname")} />
        <input type="text" value={this.user.email} onChange={this.update("email")} />
        <input type="password" value={this.user.password} onChange={this.update("password")} />
        <input type="text" value={this.user.zip_code} onChange={this.update("zip_code")} />
        <button type="submit"> Submit </button>
      </form>
    );

  }

}
