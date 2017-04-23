import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchContainer from '../search/search_container';
import SmoothCollapse from 'react-smooth-collapse';
class Stage1 extends React.Component {
  constructor(props){
    super(props);
    this.handleLocation = this.handleLocation.bind(this);
    this.initAutocomplete = this.initAutocomplete.bind(this);
    this.fillInAddress = this.fillInAddress.bind(this);
    this.geolocate = this.geolocate.bind(this);
    this.state =  {
      description: false,
      location: true
    };
  }


  componentDidMount(){
    this.initAutocomplete();
  }



  handleLocation(){
    const newDescriptionState = this.state.description ? false : true;
    const newLocationState = this.state.location ? false : true;
    this.setState({
      description: newDescriptionState,
      location: newLocationState
    });
  }


  initAutocomplete() {
    this.autocomplete = new google.maps.places.Autocomplete(
      (document.getElementById('autocomplete')), {types: ['geocode']});
    this.autocomplete.addListener('place_changed', this.fillInAddress);
  }

  fillInAddress() {

  }

  geolocate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        const circle = new google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy
        });
        this.autocomplete.setBounds(circle.getBounds());
      });
    }
  }


  render(){
    return (
      <div className="stage1-container">
        <div className="location-container">
          <form className="stage1-form"  >
            <h3> YOUR TASK LOCATION </h3>

            <span className="addressInputs">
            <input id="autocomplete" placeholder="Enter your address" onFocus={this.geolocate} type="text"></input>
              <input id="apt-num" placeholder="Unit or Apt #"/>
            </span>
            <SmoothCollapse expanded={this.state.location}>
              <span className="continue-container">
                <button className="location-button" onClick={this.handleLocation}>Continue</button>
              </span>
            </SmoothCollapse>
          </form>
        </div>

        <div className="location-container">
          <div className="description-form">
          <h3 className="about-task-header"> TELL US ABOUT YOUR TASK </h3>
          <p> If you need two or more Taskers, please post additional tasks for each Tasker needed. </p>
          <SmoothCollapse expanded={this.state.description}>
          <textarea>
            EXAMPLE: We have a few lightbulbs that need replacing. We've got the lightbulbs, but we'd need you to provide the ladder.
          </textarea>
          <span className="continue-container">
            <button>
              See Taskers & Prices
            </button>
          </span>
          </SmoothCollapse>
          </div>
        </div>

    </div>
    );
  }

}

export default withRouter(Stage1);
