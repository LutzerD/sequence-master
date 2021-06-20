import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';

const configureStore = (initialState) => {
  return createStore(rootReducer, initialState);
};

export default configureStore;
