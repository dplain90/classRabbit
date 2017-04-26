import * as AutoComplete from '../google_autocomplete';

import React from 'react';

class LocationForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showErrors: false,
      apt_num: "",
      address: "",
      locality: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateAptNum = this.updateAptNum.bind(this);
    this.raiseLocationError = this.raiseLocationError.bind(this);

    this.getLocalityAndAddress = this.getLocalityAndAddress.bind(this);
    this.geolocate = this.geolocate.bind(this);
    this.initAutocomplete = this.initAutocomplete.bind(this);

    this.autocomplete = "";

  }

  componentDidMount() {
    this.autocomplete = this.initAutocomplete();
    this.autocomplete.addListener('place_changed', this.getLocalityAndAddress);
    this.geolocate = this.geolocate(this.autocomplete);
  }


  initAutocomplete() {
    return new google.maps.places.Autocomplete(
      (document.getElementById('autocomplete')), {types: ['geocode']});
  };

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

  getLocalityAndAddress() {
     let place = this.autocomplete.getPlace();
     let locality = "";
     let componentForm = { locality: 'long_name' };

    for (var i = 0; i < place.address_components.length; i++) {
      let addressType = place.address_components[i].types[0];
      if (componentForm[addressType]) {
        locality = place.address_components[i][componentForm[addressType]];
      }
    }

    this.setState({ locality: locality, address: place.formatted_address });
  }


  componentWillReceiveProps(newProps) {
    let { locality: newLocality, address: newAddress } = newProps.task;
    let { locality: oldLocality, address: oldAddress } = this.props.task;
    let { showErrors: newShowErrors } = newProps.task.toggles
    let { showErrors: oldShowErrors } = this.props.task.toggles;

    if(newShowErrors !== oldShowErrors) {
      this.setState({ showErrors: newShowErrors });
    } else if (oldLocality !== newLocality || oldAddress !== newAddress) {
      this.setState({ address: newAddress, locality: newLocality });
    } else {}

  }

  raiseLocationError() {
    this.setState({
      errors: "Task location required to continue",
      locality: "",
      address: ""
    });
  }


  updateAptNum(e) {
    this.setState({ apt_num: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if(document.getElementById('autocomplete').value === "") {
      this.raiseLocationError();
    } else {
      let { apt_num, locality, address } = this.state;
      let toggles = {
        showErrors: false,
        showLocationForm: false,
        showDescription: true
      };

      this.props.updateNewTask({ apt_num, locality, address, toggles });
    }
  }

  render() {
    let err = this.state.showErrors ? "err" : "";
    let { errors } = this.props.task;

    return (
      <form className="locationForm" onSubmit={this.handleSubmit}>
        <input id="autocomplete" className={`locationForm address ${err}`} placeholder="Enter your address" onFocus={this.geolocate} type="text" />

        <input id="apt-num" className="locationForm apt-num" onChange={this.updateAptNum} placeholder="Unit or Apt #"/>

        <button className="locationForm submit">Continue</button>
        <label className="error location"> { errors } </label>
      </form>
    );
  }
}
export default LocationForm;
