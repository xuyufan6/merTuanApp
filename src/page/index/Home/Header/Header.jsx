import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import './Header.scss';

/**
 *
 *  首页顶部
 * @class Header
 * @extends {React.Component}
 */
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <SearchBar />
        <img
          className="banner-img"
          src="//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg"
        />
      </div>
    );
  }
}

export default Header;
