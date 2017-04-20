import React from 'react';
import { Link, withRouter } from 'react-router';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.favoriteCategories = this.favoriteCategories.bind(this);

  }

  componentDidMount(){
    this.props.fetchCategories();
  }

  favoriteCategories(){
    let style;
    return this.props.categories.map((category, idx) => {
     style = {
        backgroundImage: `url(${category.img_url_fav_cat})`
      };

      return (
        <li key={`favcat-${idx}`} style={style}>
          <div className="category title">{category.description}</div>
          <div className="category link">
            <a href="#" className="category link">{category.title}</a>
          </div>
        </li>
      );
    });
  }



  render(){

    return (
      <div className="main">
        <div className="main-top">
          <section className="search">

            <div className="welcome">
              Welcome, {this.props.user.fname}!
                <img src={this.props.user.img_url} className="prof-pic" />
            </div>

            <div className="search-bar">
              <i className="mag-glass"></i>
              <input type="text" className="search-bar input" />
              <i className="cancel"></i>
            </div>
          </section>
          <section className="get-started">

          </section>

          <section id="manage-tasks">
            <div className="manage-task-container">
              <div className="manage-task-background">
                <h3>Easily book n manage tasks n our app</h3>
                <p>Please enter your mobile number to receive a download link.</p>
                <div className="manage-tasks send-text-form">
                  <input type="text" name="" value="" className="send-text-form" />
                  <button type="submit" name="button" className="send-text-form">Send Text</button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="main-bottom">
          <section className="can-we-help">
            <div className="can-we-help heading">
              How We Can Help:
            </div>
            <div className="can-we-help">
              <ul className="can-we-help list">
                { this.favoriteCategories() }
              </ul>
            </div>
          </section>
          <section className="support-center">
          </section>
        </div>
      </div>
    );
  }
}

export default Dashboard;
