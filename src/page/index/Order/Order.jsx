import React from 'react';
import { connect } from 'react-redux';

import './Order.scss';
import { getOrderData } from '../actions/orderAction';
import ListItem from './ListItem/ListItem';

/**
 *
 *  订单
 * @class Order
 * @extends {React.Component}
 */
class Order extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData();
  }

  fetchData() {
    this.props.dispatch(getOrderData());
  }

  renderList() {
    let list = this.props.list;

    return list.map((item, index) => <ListItem key={index} itemData={item} />);
  }

  render() {
    return (
      <div className="order">
        <div className="header">订单</div>
        <div className="order-list">{this.renderList()}</div>
      </div>
    );
  }
}

export default connect(state => ({
  list: state.orderReducer.list
}))(Order);
