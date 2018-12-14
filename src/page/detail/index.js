import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import Container from './Main/Container';
import store from './store';

render(
  <Provider store={store}>
    <Router>
      <Container />
    </Router>
  </Provider>,

  document.getElementById('root')
);
