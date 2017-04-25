import { connect } from 'react-redux';


class Continue extends React.Component {
  constructor(props){
    super(props);
    this.handleContinue = this.handleContinue.bind(this);
  }

  handleContinue(){
    // this will

    // this.props.updateStage()
  }

  render(
    <span className="continue-container">
      <button className="location-button" onClick={this.handleToDescription}>Continue</button>
      <label className="error location">{ this.state.errors }</label>
    </span>
    );
}

const mapStateToProps = (state, ownProps) => {
  errors: state.stage1.errors
 }

const mapDispatchToProps = (dispatch, ownProps) => {
  updateStage: () => dispatch(updateStage())
 }

export default connect(mapStateToProps, mapDispatchToProps)(Continue);
