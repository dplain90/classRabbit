import React from 'react';
import { Link } from 'react-router';
import { setTask } from '../forms/newTask/session_util';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.handleSelect = this.props.handleSelect.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.filterResults = this.filterResults.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

    this.state = {
      value: "",
      results: {},
      active: "hidden",
      style: "none"
    };
  }

  componentWillReceiveProps(newProps){
    if(this.props.data !== newProps.data){
      this.setState({ results: newProps.data });
    }
  }

  filterResults(val){
    let filteredResults = [];
    const keys = Object.keys(this.state.results);
    const results = this.state.results;

    if(this.state.results === {} && val !== ""){
      return [];
    } else if( val === "") {
      keys.forEach( (key) => {
        filteredResults.push(results[key]);
      });
      return filteredResults;
    }
    else {
      keys.forEach( (key) => {
        let resultStr = results[key].title.substring(0, val.length).toLowerCase();
        if( resultStr === val.toLowerCase()) {
          filteredResults.push(results[key]);
        }
      });
      return filteredResults;
    }
  }

  handleSearch(){
    return (e) => {
      const results = this.filterResults(e.currentTarget.value);
      this.setState({
        value: e.currentTarget.value,
        active: "",
        style: "0.25px solid #dce0e6"
      });
    };
  }

  handleCancel(e){
    this.setState({
      value: "",
      results: this.props.data,
      active: "hidden",
      style: "none"
    });
  }

  handleSelect(category_id) {
    setTask( { category_id: category_id, category_title: this.props.categories[category_id].title, stage: 1 });
  }

  render(){
    let resultDivs = this.filterResults(this.state.value).map((category, id) => {
      return (
        <Link to="/dashboard/newTask/stage1" key={`search-result-${id}`} onClick={this.handleSelect(category.id)}>
          <div className={`search-result category ${this.state.active}`}>
            <img src={category.img_url_search} className="search-cat" />
            {category.title}
          </div>
        </Link>
      );
    });

    return (
      <div className="search-container">
        <div id="search-bar">
            <i className="icon-search" />
            <input type="text" className="search-bar input" value={this.state.value} placeholder="What do you need help with?" onClick={this.handleSearch()} onChange={this.handleSearch()}/>
            <i className="icon-x-altx-alt" onClick={this.handleCancel} />
        </div>
        <div className="search-results-container" style={{border: this.state.style}}>
          { resultDivs }
        </div>
      </div>
    );
  }
}

export default Search;
