import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchContainer from '../search/search_container';
import SmoothCollapse from 'react-smooth-collapse';
import { getTask, setTask, clearTask } from '../../util/session_util';
import { connect } from 'react-redux';
import { getTaskers } from '../../actions/user_actions';
import { updateNewTask } from '../../actions/task_actions';
class Stage1 extends React.Component {
  constructor(props){
    super(props);
    this.handleLocation = this.handleLocation.bind(this);
    this.initAutocomplete = this.initAutocomplete.bind(this);
    this.fillInAddress = this.fillInAddress.bind(this);
    this.handleToDescription = this.handleToDescription.bind(this);
    this.clearDescription = this.clearDescription.bind(this);
    this.geolocate = this.geolocate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handlePencilIcon = this.handlePencilIcon.bind(this);
    this.handleCheckIcon = this.handleCheckIcon.bind(this);
    this.handleReturnToLocation = this.handleReturnToLocation.bind(this);
    this.generateFinalAddress = this.generateFinalAddress.bind(this);
    this.state =  {
      location_icon: "",
      tasker_presence: "",
      default_desc: true,
      errors: "",
      description: false,
      cursor: 'default',
      location: true,
      locality: "",
      address: "",
      apt_num: "",
      task_desc: "EXAMPLE: We have a few lightbulbs that need replacing. We've got the lightbulbs, but we'd need you to provide the ladder."
    };
  }

  componentWillReceiveProps(nextProps){

    this.setState({
      tasker_presence: nextProps.present
    });
    console.log(nextProps);
  }

  handleReturnToLocation(){
    if(this.state.location === false){
      this.handleLocation();
    }
  }

  clearDescription(){
    if(this.state.default_desc){
      this.setState({
        default_desc: false,
        task_desc: ""
      }); }
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
      task_desc: this.state.task_desc,
      location_icon: "icon-checkmark"
    };
    const newTaskState = getTask();
    newTaskState.stage = 2;

    const updatedTask = Object.assign({}, newTaskState, newTaskInfo);
    this.props.updateTask(updatedTask);
  }


  handleLocation(){
    const finalAddress = this.generateFinalAddress(this.state.address);
    const newDescriptionState = this.state.description ? false : true;
    const newLocationState = this.state.location ? false : true;
    const newCursorState = this.state.cursor === "default" ? "pointer" : "default";
    this.setState({
      description: newDescriptionState,
      location: newLocationState,
      cursor: newCursorState,
      address: finalAddress,
      errors: ""
    });

  }

  handleToDescription(){
      let place =  this.autocomplete.getPlace();
      if(document.getElementById('autocomplete').value === ""){
        this.setState({
          errors: "Task location required to continue",
          locality: "",
          address: ""
        });
      } else if(this.state.location === true) {
        this.handleLocation();
      } else { }
    }

  locationInput(){
    if(this.state.address !== "" && !this.state.location){
      return (
        <span className="addressInputs">
          <p className="selectedAddress"> <i className="icon-location2" />{ this.state.address }</p>
          <p className="tasker-presence"> { this.state.tasker_presence } </p>
        </span>
      );
    }
  }
  // new google.maps.places.AutocompleteService();
  initAutocomplete() {
    this.autocomplete = new google.maps.places.Autocomplete(
      (document.getElementById('autocomplete')), {types: ['geocode']});
    this.autocomplete.addListener('place_changed', this.fillInAddress);
  }

  generateFinalAddress(address){
    let finalAddress = address.split(",");
    if(this.state.apt_num !== ""){
     finalAddress = finalAddress.slice(0, 1)
     .concat(this.state.apt_num, finalAddress.slice(-3));
   } else {
     return this.autocomplete.getPlace().formatted_address;
   }

    return finalAddress.join(",");
  }

  handlePencilIcon(){
    if(!this.state.location) {
      this.setState({
        location_icon: "icon-pencil"
      });
    }
  }

  handleCheckIcon(){
    if(!this.state.location) {
      this.setState({
        location_icon: "icon-checkmark"
      });
    }
  }


  fillInAddress() {
     let place = this.autocomplete.getPlace();
     let locality = "";
     let componentForm = {
      locality: 'long_name'
    };

    for (var i = 0; i < place.address_components.length; i++) {
      let addressType = place.address_components[i].types[0];
      if (componentForm[addressType]) {
        locality = place.address_components[i][componentForm[addressType]];
      }
    }

    this.setState({
      locality: locality,
      address: place.formatted_address
    });

    console.log(this.generateFinalAddress(place.formatted_address));
    this.props.getTaskers(this.props.task.category_id, locality);
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
    console.log(this.state.location_icon);
    const err = this.state.errors !== "" ? "err" : "";
    let hide = "hidden";
    if(this.state.address === "" || this.state.location ) {
     hide = "";
    }
    console.log(this.state.address);
    return (
      <div className="stage1-container">
        <div className="location-container" onMouseOut={this.handleCheckIcon} onMouseOver={this.handlePencilIcon} style={{cursor: this.state.cursor}}>
          <form className="stage1-form" onClick={this.handleReturnToLocation}>
            <div className="stage1-form-header">
              <h3> YOUR TASK LOCATION </h3>
              <i className={`${this.state.location_icon} task-location-icon`} />
            </div>
            {this.locationInput()}
            <span className="addressInputs">
              <input id="autocomplete" className={`location-input ${err} ${hide}`} placeholder="Enter your address" onFocus={this.geolocate} type="text" ></input>
              <input id="apt-num" className={`location-input ${hide}`} onChange={this.update("apt_num")} placeholder="Unit or Apt #"/>
            </span>
            <SmoothCollapse expanded={this.state.location}>
              <span className="continue-container">
                <button className="location-button" onClick={this.handleToDescription}>Continue</button>
                <label className="error location">{ this.state.errors }</label>
            </span>
            </SmoothCollapse>
          </form>
        </div>

        <div className="location-container">
          <div className="description-form" >
          <h3 className="about-task-header"> TELL US ABOUT YOUR TASK </h3>
          <p> If you need two or more Taskers, please post additional tasks for each Tasker needed. </p>
          <SmoothCollapse expanded={this.state.description}>
          <textarea onClick={this.clearDescription} onChange={this.update("task_desc")} value={this.state.task_desc}  >

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

const mapStateToProps = (state, ownProps) => {
  let taskerPresence;
  let newTask = getTask();
  if(state.taskers.present === true){
    taskerPresence = "Good news! ClassRabbit is available in your area";
  } else if (state.taskers.present === false) {
    taskerPresence = "Sorry! ClassRabbit is not yet available in your area!";
  } else {
    taskerPresence = "";
  }

  return {
    task: newTask,
    taskers: state.taskers.present,
    present: taskerPresence
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateTask: (task) => dispatch(updateNewTask(task)),
    getTaskers: (category_id, locality) => dispatch(getTaskers(category_id, locality))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stage1);
