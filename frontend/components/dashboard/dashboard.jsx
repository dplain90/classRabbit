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
    const favCats = this.props.categories.map((category) => {
      return (
        <li key={`fav-cat-${category.id}`} style={`background-image: ${category.img_url_fav_cat}`}>
          <div class="category title">{category.description}</div>
          <div class="category link">
            <a href="#" class="category link">{category.title}</a>
          </div>
        </li>
      );
    });
  }



  render(){
    return (
      <div className="main">
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

        <section className="manage-tasks">
          <div className="manage-task background outer-container">
            <div className="manage-task background inner-container">
              <h3>Easily book n manage tasks n our app</h3>
              <p>Please enter your mobile number to receive a download link.</p>
              <div className="manage-tasks send-text-form">
                <input type="text" name="" value="" className="send-text-form" />
                <button type="submit" name="button" className="send-text-form">Send Text</button>
              </div>
            </div>
          </div>
        </section>

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
    );
  }
}

export default Dashboard;
