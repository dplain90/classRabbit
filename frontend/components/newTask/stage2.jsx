import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getTask, setTask, clearTask } from '../../util/session_util';
import { getTaskers } from '../../actions/user_actions';
import { asArray } from '../../reducers/selectors';
import Tasker from './tasker';
import DateCarousel from './date_carousel';
import { generateSort } from '../../util/sort_util';
import { updateFilter } from '../../actions/filter_actions';
import { calculateFilterResults } from '../../actions/filter_actions';



class Stage2 extends React.Component {
  constructor(props){
    super(props);
    this.handleTimeFilter = this.handleTimeFilter.bind(this);
    this.handleSortByFilter = this.handleSortByFilter.bind(this);

    this.state = {
      time_filter: "",
      sort_by: ""
    }
  }

  componentWillReceiveProps(newProps) {
    debugger
    const oldFilter = this.props.filter;
    const newFilter = newProps.filter;

    if (newFilter.sort_by !== oldFilter.sort_by || newFilter.date !== oldFilter.date || newFilter.time !== oldFilter.time) {
      this.props.calculateFilterResults(this.props.filter, this.props.taskers, this.props.availabilities);
    }
  }

  componentDidMount(){
    // this.props.getTaskers(this.props.task.category_id, this.props.task.locality);
  }

  handleTimeFilter(e){

    this.setState({time_filter: e.target.value});
    this.props.updateFilter({time: e.target.value});
  }

  handleSortByFilter(e){
    this.setState({sort_by: e.target.value});
    this.props.updateFilter({sort_by: e.target.value});
  }


  render(){

    let taskers = this.props.filter.results.map( (tasker) => {
      if(tasker !== true){
        return (
          <Tasker tasker={tasker} title='Sample' key={tasker.id} />
        );
      }
    });

    return (
      <div className="stage2-container">
        <section className="filter-container">
          <div className="sorted-by-container">
            <h4 className="sorted-by-title"> SORTED BY: </h4>
            <select className="sorted-by-filter" value={this.state.sort_by} onChange={this.handleSortByFilter}>
              <option value={generateSort('desc', 'price')}>Price (Lowest to Highest)</option>
              <option value={generateSort('asc', 'price')}>Price (Highest to Lowest)</option>
              // <option value="highest-rating">Highest Rating</option>
              <option value={generateSort('desc', 'review_count')}>Most Reviews</option>
            </select>
          </div>

          <div className='time-and-date-container'>
            <span className="time-and-date-title">
              TASK DATE & TIME
            </span>
            <div className="date-carousel-container">
                <DateCarousel availabilities={this.props.availabilities} />
            </div>

            <select className="time" value={this.state.time_filter} onChange={this.handleTimeFilter} >
              <option value="flexible">IM FLEXIBLE</option>
              <option value="morning">MORNING 8am - 12pm</option>
              <option value="afternoon">AFTERNOON 12pm - 4pm</option>
              <option value="evening">EVENING 4pm - 8pm</option>
             </select>
          </div>
        </section>

        <section className="taskers-index">
          { taskers }
        </section>

      </div>
    );
  }
}

const newTask = getTask();

const mapStateToProps = (state, ownProps) => {
  return {
    task: newTask,
    taskers: state.taskers,
    availabilities: state.availabilities,
    filter: state.filter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTaskers: (category_id, locality) => dispatch(getTaskers(category_id, locality)),
    updateFilter: (parameter) => dispatch(updateFilter(parameter)),
    calculateFilterResults: (filters, taskers, availabilities) => dispatch(calculateFilterResults(filters, taskers, availabilities))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stage2);
