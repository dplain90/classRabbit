import EditContainer from '../forms/sessions/edit_container';
import React from 'react';
class Account extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="account-container">
        <div className="account-header">
          Account
        </div>
        <div className="account-portal">
          <div className="account-panel">
            <ul>
              <li className="panel-link activated">
                <a className="account profile "> Profile </a>
              </li>
              <li className="panel-link">
                <a className="account password"> Password </a>
              </li>
            </ul>
          </div>

          <EditContainer />

        </div>
      </div>
    );
  }
}

export default Account;
