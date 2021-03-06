import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchContainer from '../search/search_container';
import { asArray } from '../../reducers/selectors';
import RequestedTasksContainer from './requested_tasks_container';
import { getTask, setTask } from '../forms/newTask/session_util';

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
      this.props.updateNewTask({ category_id: category_id, category_title: this.props.categories[category_id].title, stage: 1});
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
            <Link to={'/dashboard/newTask/stage1'} onClick={this.handleNewTask(category.id)} className="category link">{category.title}</Link>
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
              <img src={this.props.user.img_url_small} className="prof-pic" />
              <h2> Welcome, {this.props.user.fname}! </h2>

            </div>
            <SearchContainer data={this.props.categories} handleSelect={this.handleNewTask} />
          </section>
          <section className="current-task-header">
            <p className="current-tasks-link">
              Current Tasks
            </p>

          </section>
          <RequestedTasksContainer />


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
