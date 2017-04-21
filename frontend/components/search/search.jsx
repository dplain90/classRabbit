import React from 'react';
import { Link, withRouter } from 'react-router';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.filterResults = this.filterResults.bind(this);
    this.state = {
      value: "",
      results: {},
      active: "hidden"
    };

  }
  componentWillReceiveProps(newProps){
    console.log(newProps);
    if(this.props.categories !== newProps.categories){
      this.setState({ results: newProps.categories});
    }
  }

  componentDidMount(){
  }
  // eventually build with a callback...
  // need to fix to iterate through full word 
  filterResults(val){
    let filteredResults = [];
    const keys = Object.keys(this.state.results);
    const results = this.state.results;

    if(this.state.results === {}){
      return [];
    } else if( val === "") {
      keys.forEach( (key) => {
        filteredResults.push(results[key]);
      });
      return filteredResults;
    }
    else {
      let lastChar = val.slice(-1).toLowerCase();
      const lastCharIdx = val.length - 1;
      keys.forEach( (key) => {
        let resultChar = results[key].title[lastCharIdx].toLowerCase();
        if(resultChar === lastChar || lastChar === "") {
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
        active: ""
      });
    };
  }


  render(){
    console.log(this.state);
    console.log(this.state.results);
    let resultDivs = this.filterResults(this.state.value).map((category, id) => {
      console.log(category.title);
      return (
        <div key={`search-result-${id}`} className={`search-result category ${this.state.active}`}>
          <img src={category.img_url_search} className="search-cat" />
          {category.title}
        </div>
      );
    });

    return (
      <div className="search-container">
        <div id="search-bar">
            <i className="icon-search" />
            <input type="text" className="search-bar input" value={this.state.value} onChange={this.handleSearch()}/>
            <i className="icon-cancel-circle" />
        </div>
        <div className="search-results-container">
          { resultDivs }
        </div>
      </div>
    );
  }

}


export default withRouter(Search);
