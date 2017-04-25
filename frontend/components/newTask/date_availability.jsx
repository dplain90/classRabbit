import React from 'react';


class DateAvailability extends React.Component {
  constructor(props){
    super(props);
    this.date = new Date(this.props.date);
  }

  render(){
    console.log(this.props.taskers);
    console.log(this.props.date);
    return (
      <div className='date-availability-container'>
        <label className='weekday'> {dayAbrev[this.date.getUTCDay()]} </label>
        <label className='avail-date'> {dateAbrev[this.date.getMonth()]} {this.date.getDate()} </label>
      </div>
    );

  }

}

export default DateAvailability;
