import React from 'react';
import { Link, withRouter } from 'react-router';
import FilterContainer from './filter/filter_container';
import TaskerIdxContainer from './taskers/taskerIdx_container';

class Stage2 extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="stage2-container">
        <FilterContainer />
        <TaskerIdxContainer />
      </div>
    );
  }

}

export default withRouter(Stage2);
