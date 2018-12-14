import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';

import NavHeader from 'component/NavHeader/NavHeader';
import './Main.scss';

class Main extends Component {
  renderTabs() {
    let tabs = this.props.tabs;

    return tabs.map(item => (
      <NavLink
        activeClassName="active"
        replace={true}
        to={`/${item.key}`}
        key={item.key}
        className="tab-item"
      >
        {item.name}
      </NavLink>
    ));
  }

  render() {
    return (
      <div className="detail">
        <NavHeader title="x" />
        <div className="tab-bar">{this.renderTabs()}</div>

        <Route exact path="/menu" render={() => <div>1</div>} />
      </div>
    );
  }
}

export default connect(state => ({
  tabs: state.tabReducer.tabs
}))(Main);
