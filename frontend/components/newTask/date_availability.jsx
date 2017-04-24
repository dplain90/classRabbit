import React from 'react';


class DateAvailability extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return (
      <div className='date-availability-container'>
        <label className='weekday'> </label>
        <label className='avail-date'> </label>
      </div>
    );

  }

}

export default DateAvailability;
