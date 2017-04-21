import React from 'react';
import { Link, withRouter } from 'react-router';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.filterResults = this.filterResults.bind(this);
    this.state = {
      value: " ",
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
  filterResults(val){

    let filteredResults = [];

    const lastChar = val.slice(-1);
    const lastCharIdx = val.length - 1;
    if(this.state.results === {}){
      return [];
    } else {

    const keys = Object.keys(this.state.results);

    keys.forEach( (key) => {
      if(this.state.results[key][lastCharIdx] === lastChar || lastChar === " ") {
        filteredResults.push(this.state.results[key]);
      }
    });
    return filteredResults;
  }
  }

  handleSearch(){
    return (e) => {
      console.log(e);
      const results = this.filterResults(e.currentTarget.value);
      this.setState({
        value: e.currentTarget.value,
        results: results,
        active: ""
      });
    };
  }


  render(){
    console.log(this.state);
    console.log(this.state.results);
    let resultDivs = this.filterResults(this.state.value).map((category, id) => {
      return (
        <div key={`search-result-${id}`} className={`search-result-${id} ${this.state.active}`}>
          <img src={category.img_url_search} className="search-cat" />
          {category.title}
        </div>
      );
    });

    console.log(resultDivs);

    return (
      <div id="search-bar">
          <i className="icon-search" />
          <input type="text" className="search-bar input" value={this.state.value} onChange={this.handleSearch}/>
          <i className="icon-cancel-circle" />
        { resultDivs }
      </div>
    );
  }

}


export default withRouter(Search);
