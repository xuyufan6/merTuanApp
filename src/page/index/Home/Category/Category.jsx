import React from 'react';
import { connect } from 'react-redux';

import './Category.scss';
import { getHeaderData } from '../../actions/categoryAction';

/**
 *
 *  首页外卖类别
 * @class Category
 * @extends {React.Component}
 */
class Category extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData();
  }

  fetchData() {
    this.props.dispatch(getHeaderData());
  }

  renderItems() {
    let items = this.props.items.splice(0, 8);

    return items.map(item => {
      return (
        <div key={item.code} className="category-item">
          <img src={item.url} className="item-icon" />
          <p className="item-name">{item.name}</p>
        </div>
      );
    });
  }

  render() {
    return <div className="category-content clearfix">{this.renderItems()}</div>;
  }
}

const mapStateToProps = state => ({
  items: state.categoryReducer.items
});

export default connect(mapStateToProps)(Category);
