import React from 'react';
import { connect } from 'react-redux';
import { updateFilter } from '../../../../../../actions/filter_actions';
class DateAvailability extends React.Component {
  constructor(props){
    super(props);
    this.date = new Date(this.props.date);
    this.generateDateString = this.generateDateString.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  generateDateString(){
    let year = this.date.getFullYear();
    let month = (parseInt(this.date.getMonth()) + 1).toString();
    let day = this.date.getDate();

    return `${year}-${month}-${day}`;
  }

  handleClick(e){
    this.props.updateFilter({date: this.generateDateString()});
  }

  render(){
    return (
      <div className='date-availability-container' onClick={this.handleClick} >
        <label className='weekday'> {dayAbrev[this.date.getUTCDay()]} </label>
        <label className='avail-date'> {dateAbrev[this.date.getMonth()]} {this.date.getDate()} </label>
      </div>
    );

  }

}



const mapStateToProps = (state, ownProps) => {
  return {
    filter: state.filter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateFilter: (parameters) => dispatch(updateFilter(parameters))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(DateAvailability);
