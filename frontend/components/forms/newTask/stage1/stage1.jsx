import { clearTask } from '../session_util';
import DescriptionContainer from './taskDescription/task_description_container';
import LocationContainer from './taskLocation/location_container';
import { Link } from 'react-router';
import SmoothCollapse from 'react-smooth-collapse';
import React from 'react';

class Stage1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showDescription: false
    }
  }

  componentWillReceiveProps(newProps) {
    let { showDescription: newShowDescription } = newProps.task.toggles;
    let { showDescription: oldShowDescription } = this.props.task.toggles;
    if(newShowDescription !== oldShowDescription) {
      this.setState({ showDescription: newShowDescription });
    }
  }

  render(){
    let { category_title } = this.props.task;
    return (
      <section className="stage1-container">
        <div className="category-title">
          <h2> { category_title }</h2>
          <Link to='/dashboard' onClick={clearTask}> Change </Link>
        </div>

        <div className="location-container" >
          <LocationContainer />
        </div>

          <div className="description-container" >
            <SmoothCollapse expanded={this.state.showDescription}>
              <DescriptionContainer />
            </SmoothCollapse>
          </div>
      </section>
    );
  }
}

export default Stage1;
