import { combineReducers } from 'redux';
import categoryReducer from './category_reducer';
import taskReducer from './task_reducer';
import sessionReducer from './session_reducer';
import searchReducer from './search_reducer';
const rootReducer = combineReducers({
  session: sessionReducer,
  categories: categoryReducer,
  search: searchReducer,
  tasks: taskReducer
});

export default rootReducer;
