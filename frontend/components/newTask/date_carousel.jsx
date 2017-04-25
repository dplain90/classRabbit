import React from 'react';
import Slider from 'react-slick';
import  { uniqTaskers, asArray } from '../../reducers/selectors';
import DateAvailability from './date_availability';

class DateCarousel extends React.Component {
  constructor(props){
    super(props);
    this.dateAvailabilities = this.dateAvailabilities.bind(this);
    this.settings = {
      arrows: true,
      centerMode: true,
      infinite: true,
      slidesToShow: 3,
      speed: 500,
      variableWidth: false
    };
  }

  dateAvailabilities(){
    return Object.keys(this.props.availabilities).map( (date, idx) => {
      let taskers = [];
      this.props.availabilities[date].forEach( (time_slot) => {
        if(!taskers.includes(time_slot.tasker_id)){
          taskers.push(time_slot.tasker_id);
        }
      });
      return (<div key={idx}><DateAvailability date={date} taskers={taskers} /></div>);
    });
  }


  render(){

      const dates = this.dateAvailabilities();
      if(dates.length === 0){
        return (<div> </div>);
      } else {
        return (
          <Slider {...this.settings}>
          {dates}
        </Slider>);
      }

    }
}



export default DateCarousel;
