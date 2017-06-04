import React from 'react';
import { Link, withRouter } from 'react-router';
import Search from '../search/search';

class SplashPage extends React.Component {
  constructor(props){
    super(props);
    this.handleSplashSelect = this.handleSplashSelect.bind(this);
    this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  componentDidMount(){
    this.props.fetchCategories();
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if(this.props.user){
      if(!this.props.redirect){
        this.props.router.push('/dashboard');
      }
    }
  }

  handleButton(){
    this.props.updateNewTask({ category_id: 3, category_title: this.props.categories[3].title, stage: 1, redirect: true});

    this.props.router.push('/dashboard/newTask/stage1');
  }

  handleSplashSelect(category_id){
    return () => {
      this.props.updateNewTask({ category_id: category_id, category_title: this.props.categories[category_id].title, stage: 1, redirect: true});
    };
  }

  render(){

    return (
      <div className="splashContainer">
        <div className="splashBanner">
          <div className="splashBox">
            <div className="splashBox_title">
              Help With Your Classroom
            </div>
            <div className="splashBox_spacer">
            </div>
            <div className="splashBox_subtitle">
              Copies, ordering & more all without leaving your classroom. So you can focus on what matters.
            </div>
            <div className="splashBox_search">
              <Search data={this.props.categories} handleSelect={this.handleSplashSelect} />
            </div>
          </div>
        </div>
        <div className="splashLinks_container">
          <div className="splashLinks_title">
            Get Inspired.
          </div>
          <div className="splashLinks_row">
            <div className="splashLink_photo_med">

            </div>
            <div className="splashLink_content">

              Tackle those projects when you need them to be tackled.
              <button onClick={this.handleButton}>Book a Teaching Assistant</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SplashPage);
