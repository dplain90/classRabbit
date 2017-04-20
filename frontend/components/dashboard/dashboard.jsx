import React from 'react';
import { Link, withRouter } from 'react-router';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchCategories();
  }

  render(){
    const categoryImgs = this.props.categories.map((category) => {
      return (
        <label className="favCategory title">{category.title}
          <img src={category.img_url} />
        </label>
      );
    });

    return (
      <div>
        <b> Welcome, {this.props.user.fname}!
          <img src={this.props.user.img_url} className="prof-pic" />
        </b>

      </div>
    );
  }
}

export default Dashboard;
