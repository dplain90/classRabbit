import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors';
import Stage1 from './stage1.jsx';
import Stage2 from './stage2.jsx';
import Stage3 from './stage3.jsx';



import React from 'react';

class newTask extends React.Component {
  constructor(props){
    super(props);
    this.renderStage = this.renderStage.bind(this);
  }

  renderStage() {
    const task = this.props.task;
    const stage = this.props.task.stage ;
    if(stage === 1){
      return ( <Stage1 task={task} /> );
    } else if( stage === 2) {
      return ( <Stage2 task={task} />);
    } else {
      return ( <Stage3 task={task} />);
    }
  }

  render(){
    return (
      <div className="new-task-container">
        <section className="task-step-bar">

        </section>

        <section className="trust-and-safety">

        </section>

        <section className="stage-container">
          { this.renderStage() }
        </section>

      </div>
    );
  }
}



const mapStateToProps = (state, ownProps) => {
  return {
    task: state.newTask,
    category: state.categories[this.props.params.catId]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(newTask);
