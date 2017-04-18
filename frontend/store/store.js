import rootReducer from '../reducers/root_reducer'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
);

export default configureStore;
