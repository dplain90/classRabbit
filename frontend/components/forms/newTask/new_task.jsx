import React from 'react';
import { withRouter, Link } from 'react-router';
import { getTask, getStorageTaskers} from './session_util';

class newTask extends React.Component {
  constructor(props){
    super(props);
    this.state = { icon_phase: [this.props.pencil, "", ""] }
    this.getStorageTaskers = getStorageTaskers()
    this.getTask = getTask()
    this.handlePopOut = this.handlePopOut.bind(this);
  }

  componentDidMount() {

    let { taskers, task, getTaskers, updateNewTask, storage } = this.props;
    const storageTask = this.getTask.task;
    if(task !== storageTask){
      updateNewTask( storageTask );
    }

    if (this.getStorageTaskers !== null && taskers !== this.getStorageTaskers) {
      getTaskers(storageTask.category_id, storageTask.locality);
    }
  }

  componentWillReceiveProps(newProps) {
    let { stage } = newProps.task;
    if(stage !== this.props.task.stage && stage !== undefined){
      let newIconPhase = ["", "", ""];
      newIconPhase[stage - 1] = this.props.pencil;
      this.setState({icon_phase: newIconPhase});
    }
    // if(newProps.taskers !== this.props.taskers){


  }

  handlePopOut(e){
    let popout = document.getElementById("popout");
    let display = popout.style.display;
    popout.style.display = "block";
  }

  render(){
    let categoryTitle = () => {
      return (
        <div className="category-title">
          <h2>
            { this.props.task.category_title}
          </h2>
          <Link to='/dashboard'> Change </Link>
        </div>);
  };


    const { stage } = this.props.task;

    if(stage === 3){
      categoryTitle = () => "";
    }

    return (
      <div className="new-task-container">
        <section className="task-step-bar">
          <ol>
            <li>
              { this.state.icon_phase[0] } Fill Out Task Details
            </li>
            <li>
              { this.state.icon_phase[1] } View Taskers & Prices
            </li>
            <li>
              { this.state.icon_phase[2] } Confirm & Book
            </li>
          </ol>
        </section>

        <section className="trust-and-safety-container">
          <div className="trust-and-safety">
            <img src="https://d31ebqhycylygn.cloudfront.net/v3/assets/web/build/icons/trust_badge-7aa9db43e1fd330df7a2bd3d4d9e120c.svg" />
            <p> <strong> Trust & Safety Guarantee: </strong>
             All taskers have completed DOE background checks</p>
           <i className="icon-info trust-safety-info-icon" onClick={this.handlePopOut} >
             <div className="popout trust-safety" id="popout"> Hi </div>
           </i>
          </div>
        </section>

        <section className="main">
          {categoryTitle()}

          <section id="stage-container" className="stage-container"  >
            { this.props.children }
          </section>
        </section>
    </div>
    );
  }
}

export default withRouter(newTask);
