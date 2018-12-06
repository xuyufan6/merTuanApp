import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './reducers/main.js';

const store = createStore(
  mainReducer,
  applyMiddleware(thunk)
);

// 热更新
if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers/main.js', () => {
    const nextRootReducer = require('./reducers/main');
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
