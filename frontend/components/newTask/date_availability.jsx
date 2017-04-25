import React from 'react';


class DateAvailability extends React.Component {
  constructor(props){
    super(props);
    this.date = new Date(this.props.date);
  }

  render(){

    // background-color: #51af33;
    // border-color: #51af33;
    // color: white;
    // font-weight: bold;
    console.log(this.props.taskers);
    console.log(this.props.date);
    const divStyle = {
      height: '80px',
      width: '80px',
      borderRadius: '4px'
    };
// style={{height:'80px', width:'80px', borderRadius:'4px', backgroundColor:'#51af33', color:"white"}}
    return (
      <div className='date-availability-container' >
        <label className='weekday'> {dayAbrev[this.date.getUTCDay()]} </label>
        <label className='avail-date'> {dateAbrev[this.date.getMonth()]} {this.date.getDate()} </label>
      </div>
    );

  }

}

export default DateAvailability;
