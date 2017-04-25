import * as GoogleAutoComplete from '../helpers/google_autocomplete';

class addressInputs extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <form className="stage1-form" onClick={this.handleReturnToLocation}>
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
      </form>);
  }
}

export default addressInputs;
