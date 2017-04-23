import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchContainer from '../search/search_container';
import SmoothCollapse from 'react-smooth-collapse';
import { getTask, setTask, clearTask } from '../../util/session_util';

class Stage1 extends React.Component {
  constructor(props){
    super(props);
    this.handleLocation = this.handleLocation.bind(this);
    this.initAutocomplete = this.initAutocomplete.bind(this);
    this.fillInAddress = this.fillInAddress.bind(this);
    this.geolocate = this.geolocate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);

    this.state =  {
      description: false,
      location: true,
      locality: "",
      address: "",
      apt_num: "",
      task_desc: ""
    };
  }


  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  componentDidMount(){
    this.initAutocomplete();
  }

  handleSubmit(e){
    e.preventDefault();

    const newTaskInfo = {
      locality: this.fillInAddress(),
      address: this.state.address,
      apt_num: this.state.apt_num,
      task_desc: this.state.task_desc
    };

    const newTaskState = getTask();
    newTaskState.stage = 2;

    const updatedTask = Object.assign({}, newTaskState, newTaskInfo);
    this.props.updateTask(updatedTask);
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
    // Get the place details from the autocomplete object.
     let place = this.autocomplete.getPlace();
     let locality = "";
  //    street_number: 'short_name',
  //    route: 'long_name',
  //    administrative_area_level_1: 'short_name',
  //    country: 'long_name',
  //    postal_code: 'short_name'
     let componentForm = {
      locality: 'long_name'
    };

  //   // Get each component of the address from the place details
  //   // and fill the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {
      let addressType = place.address_components[i].types[0];
      if (componentForm[addressType]) {
        locality = place.address_components[i][componentForm[addressType]];
      }
    }
    return locality;
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
          <form className="stage1-form" >
            <h3> YOUR TASK LOCATION </h3>

            <span className="addressInputs">
            <input id="autocomplete" placeholder="Enter your address" onFocus={this.geolocate} type="text"></input>
              <input id="apt-num" onChange={this.update("apt_num")} placeholder="Unit or Apt #"/>
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
          <textarea onChange={this.update("task_desc")}>
            EXAMPLE: We have a few lightbulbs that need replacing. We've got the lightbulbs, but we'd need you to provide the ladder.
          </textarea>
          <span className="continue-container">
            <button onClick={this.handleSubmit}>
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
