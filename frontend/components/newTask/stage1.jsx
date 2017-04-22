import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchContainer from '../search/search_container';

class Stage1 extends React.Component {
  constructor(props){
    super(props);
    this.handleLocation = this.handleLocation.bind(this);
    this.initAutocomplete = this.initAutocomplete.bind(this);
    this.fillInAddress = this.fillInAddress.bind(this);
    this.geolocate = this.geolocate.bind(this);
  }


  componentDidMount(){
    this.initAutocomplete();
  }



  handleLocation(){ }


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
          <form onSubmit={this.handleLocation} >
            <span>

            <input id="autocomplete" placeholder="Enter your address" onFocus={this.geolocate} type="text"></input>

              <input className="apt-num" />
            </span>
            <button className="location-button">Continue</button>
          </form>
        </div>

        <div className="description-container">

        </div>
      </div>
    );
  }

}

export default withRouter(Stage1);
