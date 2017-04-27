import React from 'react';
import ConfirmAndBook from './confirm_container';
import TaskRecap from './task_recap';

class Stage3 extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="stage3-container">
        <TaskRecap />
        <ConfirmAndBook />
      </div>
    );
  }

}

export default Stage3;
