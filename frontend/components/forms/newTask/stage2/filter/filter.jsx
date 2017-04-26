import React from 'react';
import SortedByFilter from './sorted_by';
import DateCarousel from './Date/date_carousel';
import TimeFilterContainer from './Time/time_container';

class Filter extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(newProps){

    let { time: newTime, date: newDate, sorted_by: newSort } = newProps.filter;
    let { time: oldTime, date: oldDate, sorted_by: oldSort } = this.props.filter;

    if(newTime !== oldTime || newDate !== oldDate || newSort !== oldSort) {
      let filters = {
        time: newTime,
        date: newDate,
        sorted_by: newSort
      };


      this.props.updateFilterResults(filters, newProps.taskers, newProps.availabilities);
    }
  }

  render(){
    let { updateFilter, availabilities } = this.props;
    return (
        <section className="filter-container">
          <SortedByFilter updateFilter={updateFilter} />
          <span className="time-and-date-title">
            TASK DATE & TIME
            <div className="date-carousel-container">
                <DateCarousel availabilities={availabilities} />
            </div>
          </span>
          <TimeFilterContainer />
        </section>
      );
  }
}

export default Filter;
