import React from 'react';
import LocationFormContainer from './locationForm/location_form_container';
import LocationDisplayContainer from './locationDisplay/location_display_container';
import SmoothCollapse from 'react-smooth-collapse';
class Location extends React.Component {
  constructor(props){
    super(props);
    this.state = { showLocationForm: true };
  }

  componentWillReceiveProps(newProps) {
    let { showLocationForm: newShowLocationForm } = newProps.task.toggles;
    let { showLocationForm: oldShowLocationForm } = this.props.task.toggles;
    if(newShowLocationForm !== oldShowLocationForm) {
      this.setState({ showLocationForm: newShowLocationForm });
    }
  }

  render() {
    console.log('printed');
    return (
      <div className="location">
        <SmoothCollapse expanded={this.props.task.toggles.showLocationForm}>
          <LocationFormContainer />
        </SmoothCollapse>

        <SmoothCollapse expanded={!this.props.task.toggles.showLocationForm}>
          <LocationDisplayContainer />
        </SmoothCollapse>
      </div>
    );
  }
}

export default Location;
