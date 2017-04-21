import React from 'react';
import { Link, withRouter } from 'react-router';

class taskDetails extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    const { details } = this.props;
    return (
      <div className="task-details">
        <div className="rowOne">
          <label> Location
            <i className="locationIcon"> </i>
            { details.location }
          </label>

          <label> Tasker
            <b> {details.tasker_fname} {details.tasker_linitial} </b>
          </label>
        </div>

        <div className="rowTwo">
          <label> Description
            <p> { details.description } </p>
          </label>
        </div>
      </div>
     );
  }
}

export default taskDetails;
