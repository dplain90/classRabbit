class TaskDescription extends React.Component {
  constructor(props){
    super(props);

  }



  render(){
    return (
      <div className="location-container">
        <div className="description-form" >

          <h3 className="about-task-header"> TELL US ABOUT YOUR TASK </h3>
          <p> If you need two or more Taskers, please post additional tasks for each Tasker needed. </p>

          <SmoothCollapse expanded={this.state.description}>
            <textarea onClick={this.clearDescription} onChange={this.update("task_desc")} value={this.state.task_desc}  >
            </textarea>
            <span className="continue-container">
              <button onClick={this.handleSubmit}> See Taskers & Prices </button>
            </span>
          </SmoothCollapse>

        </div>
      </div>
    );
  }
}
