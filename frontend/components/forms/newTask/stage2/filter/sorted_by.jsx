import React from 'react';
import { generateSort } from '../../../../../util/sort_util';

class sortedBy extends React.Component {
  constructor(props){
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e){
    e.preventDefault();

    const sortFilters = {
      price_asc: { direction: 'asc', val: 'price' },
      price_desc: { direction: 'desc', val: 'price' },
      rating: { direction: 'desc', 'val': 'rating' },
      review_count: { direction: 'desc', val: 'review_count' }
     }
    this.props.updateFilter({sorted_by: sortFilters[e.target.value]});
  }

  render() {
    return (
      <div className="sorted-by-container">
        <h4 className="sorted-by-title"> SORTED BY: </h4>
        <select className="sorted-by-filter" onChange={this.handleSelect}>
          <option value='price_asc'>Price (Lowest to Highest)</option>
          <option value='price_desc'>Price (Highest to Lowest)</option>
          <option value="rating">Highest Rating</option>
          <option value='review_count'>Most Reviews</option>
        </select>
      </div>
    );
  }
}

export default sortedBy;
