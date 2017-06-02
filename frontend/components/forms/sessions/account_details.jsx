import React from 'react';
import { Link, withRouter } from 'react-router';
class AccountDetails extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let { img_url_med, fname, lname, email, zip_code, phone_number } = this.props.user;
    return (
      <div className="account-details">
        <div className="account-prof">
          <img src={img_url_med} className="account-prof-pic" />
        </div>
        <div className="account-desc">
          <ul>
            <li className="account-desc item">
              <i className="icon-user" />
              <div className="desc-content">
                {fname} {lname}
              </div>
            </li>
            <li className="account-desc item">
              <i className="icon-envelop" />
              <div className="desc-content">
                {email}
              </div>
            </li>
            <li className="account-desc item">
              <i className="icon-phone" />
              <div className="desc-content">
                {phone_number}
              </div>
            </li>
            <li className="account-desc item">
              <i className="icon-location-account" />
              <div className="desc-content">
                {zip_code}
              </div>
            </li>
            <li className="account-desc item">
              <button> Log Out </button>
            </li>


          </ul>

        </div>
      </div>
    );
  }
}
export default AccountDetails;
