import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Header.scss';

/**
 * 头部得筛选组件
 * @class Header
 * @extends {Component}
 */
class Header extends Component {
  constructor() {
    super(...arguments);
  }

  renderTabs() {
    let { tabs, activeKey } = this.props;
    let arr = [];
    for (let key in tabs) {
      let item = tabs[key];
      let cls = item.key + ' item';
      if (item.key === activeKey) {
        cls += ' currnet';
      }
      arr.push(
        <div className={cls} key={item.key}>
          {item.text}
        </div>
      );
    }
    return arr;
  }

  render() {
    return (
      <div className="header">
        <div className="header-top">{this.renderTabs()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tabs: state.headerReducer.tabs
});

export default connect(mapStateToProps)(Header);
