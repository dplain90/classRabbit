import React from 'react';
import SortedByFilter from './sorted_by';
import DateCarousel from './Date/date_carousel';
import TimeFilterContainer from './Time/time_container';

class Filter extends React.Component {
  constructor(props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    let filter = document.getElementsByClassName('filter-container')[0];
    let footer = document.getElementsByTagName('footer')[0];

    filter.setAttribute('data-filter-enter', filter.getBoundingClientRect().top);
    filter.setAttribute('data-filter-exit', footer.getBoundingClientRect().top);


   window.addEventListener('scroll', this.handleScroll);

  }
  componentWillUnmount(){

    window.removeEventListener('scroll', this.handleScroll);

  }

  handleScroll() {
    console.log(document.body.scrollTop);
    let top = document.body.scrollTop;
    let filter = document.getElementsByClassName('filter-container')[0];
    let filterInitial = filter.scrollHeight

    let filterEnter = parseInt(filter.getAttribute('data-filter-enter'), 10);
    let filterExit = parseInt(filter.getAttribute('data-filter-exit'), 10);

    if (filterEnter <= top && top <= filterExit) {
      filter.classList.add('sticky');
    } else {
      filter.classList.remove('sticky');
    }
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
            <i className="icon-clock" /> TASK DATE & TIME
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
