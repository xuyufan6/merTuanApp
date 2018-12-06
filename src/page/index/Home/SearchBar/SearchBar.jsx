import React from 'react';

import './SearchBar.scss';

/**
 *
 *  首页头部搜索条
 * @class SearchBar
 * @extends {React.Component}
 */
class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <div className="bar-location">
          <div className="location-icon" />
          <div className="location-text">深圳市</div>
        </div>
        <div className="search-btn">
          <p className="place-holder">鸡翅</p>
        </div>
      </div>
    );
  }
}

export default SearchBar;
