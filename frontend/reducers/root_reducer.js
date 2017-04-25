import { combineReducers } from 'redux';
import categoryReducer from './category_reducer';
import taskReducer from './task_reducer';
import sessionReducer from './session_reducer';
import searchReducer from './search_reducer';
import newTaskReducer from './new_task_reducer';
import availabilitiesReducer from './availability_reducer';
import taskerReducer from './tasker_reducer';
import filterReducer from './filter_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  categories: categoryReducer,
  search: searchReducer,
  tasks: taskReducer,
  task: newTaskReducer,
  availabilities: availabilitiesReducer,
  taskers: taskerReducer,
  filter: filterReducer
});

export default rootReducer;
