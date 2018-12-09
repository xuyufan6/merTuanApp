import React, { Component } from 'react';

import './NavHeader.scss';

/**
 * @constructor <NavHeader title={string} />
 * @description 导航栏
 */
class NavHeader extends Component {
  back() {
    window.history.back();
  }

  render() {
    return (
      <div className="nav">
        <div onClick={() => this.back()} className="back-icon" />
        <h4 className="title">{this.props.title}</h4>
      </div>
    );
  }
}

export default NavHeader;
