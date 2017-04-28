
import * as AutoComplete from '../google_autocomplete';
import React from 'react';
import { checkIcon, pencilIcon, locationIcon } from '../../../../../helpers/icon_helper';



class LocationForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { showPencil: false, taskersPresent: "" };
    let { address, apt_num } = this.props.task
    this.addAptNumToAddress = this.addAptNumToAddress.bind(this);
    this.address = this.addAptNumToAddress(address, apt_num);


    this.resetToggles = this.resetToggles.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  componentWillReceiveProps(newProps){

    if(this.props.task.address !== newProps.task.address){

      this.address = this.addAptNumToAddress(newProps.task.address, newProps.task.apt_num);
    }

  }
  // componentDidMount(){
  //   this.updateTaskersAndTask(this.props);
  // }



  handleClick(e){
    this.resetToggles();
  }

  resetToggles(){
    this.props.updateNewTask(
      {toggles: {
      showDescription: false,
      showErrors: false,
      showLocationForm: true
    }});
  }

  handleMouseOver(e){
    if(!this.state.showPencil) {
      this.setState({showPencil: true});
    }
  }

  handleMouseOut(e){
    if(this.state.showPencil) {
      this.setState({showPencil: false});
    }
  }

  addAptNumToAddress(address, apt_num) {
    let address_components = address.split(",");

    if(apt_num !== "") {
     address_components = address_components
      .slice(0, 1)
      .concat(apt_num, address_components.slice(-3));
    }
    return address_components.join(",");
  }

  handleSubmit(e) {
    if(document.getElementById('autocomplete').value === "") {
      this.raiseLocationError();
    } else {
      let { apt_num, locality, address } = this.state;
      let toggles = {
        showErrors: false,
        showLocationForm: false,
        showDescription: true
      };

      this.props.updateNewTask({ apt_num, locality, address: this.addAptNumToAddress(address, apt_num), toggles });
    }
  }

  render() {
    let editIcon = this.state.showPencil ? pencilIcon() : checkIcon;
    let taskerStatus;
    if(this.props.task.present === "false")
    {
      taskerStatus = "Sorry! No taskers available in your area!";
    } else if (this.props.task.present === "true") {
      taskerStatus = "Yay! There are taskers in your area!";
    } else {
      taskerStatus = "";
    }

    return (
      <div className="locationDisplay" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} onClick={this.handleClick}>
        <label className="taskLocation">
          <h3> TASK LOCATION: </h3>
        </label>
        <span className="locationDisplayRow">
          { locationIcon }
          <label className="taskLocation taskersPresent">
            { this.address }
            { editIcon }
          </label>
        </span>
          { taskerStatus }
      </div>
    );
  }
}
export default LocationForm;
