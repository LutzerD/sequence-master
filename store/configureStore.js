import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../memorize/reducers';

const configureStore = (initialState) => {
  return createStore(rootReducer,initialState );
};

export default configureStore;
