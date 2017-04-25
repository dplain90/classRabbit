class Location extends React.Component {
  constructor(props){


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

  render(){
    return (
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
    );




  }













}
