import React from 'react';

import NavHeader from 'component/NavHeader/NavHeader';
import Header from '../Header/Header';

class Main extends React.Component {
  render() {
    return (
      <div className="category">
        <NavHeader title={'分类'} />
        <Header />
      </div>
    );
  }
}

export default Main;
