import * as AutoComplete from '../google_autocomplete';

import React from 'react';
const noTaskers = 'Sorry! No taskers available in your area!';
const yesTaskers = 'Yay! There are taskers in your area!';

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
    this.updateTaskersAndTask = this.updateTaskersAndTask.bind(this);
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

        // if(this.props.task.address !== newProps.task.address || this.props.task.apt_num !== newProps.task.apt_num) {
        //   this.updateTaskersAndTask(newProps);
        // }


    if(this.props.task.address !== newProps.task.address || this.props.task.apt_num !== newProps.task.apt_num) {
      this.updateTaskersAndTask(newProps);
    }
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

      this.props.updateNewTask({ apt_num, locality, address, toggles, phase: 1});
    }
  }

  updateTaskersAndTask(props) {
    let { updateNewTask, getTaskers } = props;
    let {category_id, locality} = props.task;
    getTaskers(category_id, locality).then((taskers) => {
      if(taskers.present === "false") {
        let newToggleState = {
          taskersPresent: noTaskers,
          showDescription: true,
          showErrors: false,
          showLocationForm: false
        };
        return updateNewTask({ toggles: newToggleState, stage: 1 });
      } else {
        let newToggleState = {
          taskersPresent: yesTaskers,
          showDescription: true,
          showErrors: false,
          showLocationForm: false
        };
        return updateNewTask({ toggles: newToggleState, stage: 1 });
      }
    });
  }


  render() {
    let err = this.state.showErrors ? "err" : "";
    let { errors } = this.props.task;

    return (
      <form className="stage1-container" onSubmit={this.handleSubmit}>
        <div className="stage1-form-header">
          <h3> YOUR TASK LOCATION </h3>
        </div>
         <span className="addressInputs" id="addressInputs">
          <input id="autocomplete" className={`location-input address ${err}`} placeholder="Enter your address" onFocus={this.geolocate} type="text" />

          <input id="apt-num" className="location-input apt-num" onChange={this.updateAptNum} placeholder="Unit or Apt #"/>
        </span>
        <span className="continue-container">
          <button className="location-button">Continue</button>
          <label className="error location"> { errors } </label>
        </span>
      </form>
    );
  }
}
export default LocationForm;
