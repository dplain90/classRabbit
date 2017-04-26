import React from 'react';


class Time extends React.Component {
  constructor(props){
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e){
    e.preventDefault();
    this.props.updateFilter({time: e.target.value});
  }

  render() {
    return (
      <select className="time" onChange={this.handleSelect}>
        <option value="Anytime">I'M FLEXIBLE</option>
        <option value="Morning">MORNING 8am - 12pm</option>
        <option value="Afternoon">AFTERNOON 12pm - 4pm</option>
        <option value="Evening">EVENING 4pm - 8pm</option>
      </select>
    );
  }
}

export default Time;
