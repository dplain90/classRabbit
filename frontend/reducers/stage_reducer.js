import { UPDATE_STAGE } from '../actions/stage_actions';

const initialState = {
  taskers_present: "",
  
};




const stageReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_STAGE:
      const newStage = Object.merge({}, state, action.stage);
      return newStage;
    default:
      return state;
  }
};

export default stageReducer;
