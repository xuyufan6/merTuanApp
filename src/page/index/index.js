import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Container from './Main/Container';

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  );
};

render(Container);

// webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Main/Container.jsx', () => {
    // if you are using harmony modules ({modules:false})
    render(Container);
    // in all other cases - re-require App manually
    render(require('./Main/Container'));
  });
}
