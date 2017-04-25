import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getTask, setTask, clearTask } from '../../util/session_util';
import { getTaskers } from '../../actions/user_actions';
import { asArray } from '../../reducers/selectors';
import Tasker from './tasker';
import DateCarousel from './date_carousel';

class Stage2 extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  


  render(){

    let taskers = asArray(this.props.taskers).map( (tasker) => {
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
            <select className="sorted-by-filter">
              <option value="recomended">Recomended</option>
              <option value="price-high-low">Price (Lowest to Highest)</option>
              <option value="price-low-high">Price (Highest to Lowest)</option>
              <option value="highest-rating">Highest Rating</option>
              <option value="most-reviews">Most Reviews</option>
            </select>
          </div>

          <div className='time-and-date-container'>
            <span className="time-and-date-title">
              TASK DATE & TIME
            </span>
            <div className="date-carousel-container">
                <DateCarousel availabilities={this.props.availabilities} />
            </div>

            <select className="time">
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
    availabilities: state.availabilities
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTaskers: (category_id, locality) => dispatch(getTaskers(category_id, locality))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stage2);
