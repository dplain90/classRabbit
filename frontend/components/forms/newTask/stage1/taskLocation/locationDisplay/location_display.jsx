
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

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  componentDidMount(){
    let { getTaskers, updateTask} = this.props;
    let {category_id, locality} = this.props.task;

    getTaskers(category_id, locality).then((taskers) => {
      if(taskers === {}) {
        return updateTask({ toggles: [{taskersPresent: noTaskers}] });
      } else {
        return updateTask({ toggles: [{taskersPresent: yesTaskers}] });
      }
    });
  }

  handleClick(e){
    this.props.resetToggles();
  }

  handleMouseOver(e){
    if(!showPencil) {
      this.setState({showPencil: true});
    }
  }

  handleMouseOut(e){
    if(showPencil) {
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

      this.props.updateNewTask({ apt_num, locality, address, toggles });
    }
  }

  render() {
    let editIcon = this.state.showPencil ? pencilIcon : checkIcon;

    return (
      <div className="locationDisplay" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} onClick={this.handleClick}>
        <label className="taskLocation">
          <h3> TASK LOCATION: </h3>
          { locationIcon }{ this.address }
        </label>
        <label className="taskLocation taskersPresent">
          { editIcon }
          { this.state.taskersPresent }
        </label>
      </div>
    );
  }
}
export default LocationForm;
