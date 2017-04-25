import React from 'react';
import { connect } from 'react-redux';

class DateAvailability extends React.Component {
  constructor(props){
    super(props);
    this.date = new Date(this.props.date);

  }

  handleClick(){
    this.props.updateFilter({date: this.date});
  }

  render(){
    return (
      <div className='date-availability-container' >
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
