import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import mainReducer from './reducers/main';

const store = createStore(
  mainReducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;
