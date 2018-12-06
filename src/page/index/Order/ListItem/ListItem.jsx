import React from 'react';

import './ListItem.scss';

/**
 * 订单列表组件
 */
class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  /**
   * 渲染具体菜品
   */
  renderProduct() {}

  /**
   * 渲染评价按钮
   */
  renderComment() {}

  render() {
    return (
      <div className="order-item">
        <div className="order-item-inner">
          <img src="" className="item-img" />
          <div className="item-right">
            <div className="item-top">
              <p className="order-name">xxx</p>
              <div className="arrow" />
              <div className="order-state">xxx</div>
            </div>
            <div className="item-bottom">{this.renderProduct()}</div>
          </div>
        </div>
        {this.renderComment()}
      </div>
    );
  }
}

export default ListItem;
