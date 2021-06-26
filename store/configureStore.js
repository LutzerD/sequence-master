import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { rootReducer } from '../memorize/reducers/reducer';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export default (initialState) => {
  let store = createStore(persistedReducer, initialState)
  let persistor = persistStore(store)
  return { store, persistor }
}
