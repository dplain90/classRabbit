import React from 'react';
import { Link, withRouter } from 'react-router';
import EditFormContainer from './edit_form_container';
import AccountDetails from './account_details';
class Edit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active: false
    }
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(e){
    e.preventDefault();
    if(this.state.active){
      this.setState({active: false});
    } else {
      this.setState({active: true});
    }
  }

  render() {
    let { user, logout } = this.props;

    let { active } = this.state;
    const edit = () => (<EditFormContainer />);
    const details = () => {
      return (<AccountDetails user={user} logout={logout} />);
    };
    const btn = (desc) => (
      <button onClick={this.handleEdit}>
         {desc}
       </button>
     );

    let editBtn = active ? btn("Cancel") : btn("Edit");
    let main = active ? edit() : details();
    return (
      <div className="account-main">
        <div className="account-main-title">
          Account
          { editBtn }
        </div>
        { main }
      </div>
    );
  }
}
export default Edit;
