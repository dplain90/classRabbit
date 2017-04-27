
import * as AutoComplete from '../google_autocomplete';
import React from 'react';
import { checkIcon, pencilIcon, locationIcon } from '../../../../../helpers/icon_helper';

const noTaskers = 'Sorry! No taskers available in your area!';
const yesTaskers = 'Yay! There are taskers in your area!';

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

  componentDidMount(){
    let { updateNewTask, getTaskers } = this.props;
    let {category_id, locality} = this.props.task;
    getTaskers(category_id, locality).then((taskers) => {
      if(taskers === {}) {
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

  handleClick(e){
    this.props.resetToggles();
  }

  resetToggles(){
    this.props.updateNewTask({
      showDescription: false,
      showErrors: false,
      showLocationForm: true
    });
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
          { this.state.taskersPresent }
      </div>
    );
  }
}
export default LocationForm;
