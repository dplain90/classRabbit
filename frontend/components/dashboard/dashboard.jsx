import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchContainer from '../search/search_container';
import { asArray } from '../../reducers/selectors';
import RequestedTasksContainer from './requested_tasks_container';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.favoriteCategories = this.favoriteCategories.bind(this);
    this.handleNewTask = this.handleNewTask.bind(this);
  }

  componentDidMount(){
    this.props.fetchCategories();
  }

  handleNewTask(category_id) {
    return () => {
      this.props.receiveNewTask({
        category_id: category_id,
        stage: 1
      });
    };
  }


  favoriteCategories(){
    let style;
    return asArray(this.props.categories).map((category, idx) => {
     style = {
        backgroundImage: `url(${category.img_url_fav_cat})`
      };

      return (
        <li key={`favcat-${idx}`} style={style}>
          <div className="category title">{category.description}</div>
          <div className="category link">
            <Link to={`/dashboard/newTask/${category.id}`} onClick={this.handleNewTask(category.id)} className="category link">{category.title}</Link>
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
              <img src={this.props.user.img_url} className="prof-pic" />
              <h2> Welcome, {this.props.user.fname}! </h2>
            </div>
            <SearchContainer categories={this.props.categories} />
          </section>
          <section className="current-task-header">
            <p className="current-tasks-link">
              Current Tasks
            </p>

          </section>
          <RequestedTasksContainer />

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
              <h2>How We Can Help:</h2>
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
