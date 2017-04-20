import { combineReducers } from 'redux';
import categoryReducer from './category_reducer';
import sessionReducer from './session_reducer';
const rootReducer = combineReducers({
  session: sessionReducer,
  categories: categoryReducer
});

export default rootReducer;
