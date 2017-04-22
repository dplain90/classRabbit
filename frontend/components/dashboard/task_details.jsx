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
            <p>
              <i className="icon-location2" />
              { details.location }
            </p>
          </label>

          <label> Tasker
            <a> {details.tasker_fname} {details.tasker_linitial}. </a>
          </label>

          <label> Price
            <p> $40/hr </p>
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
