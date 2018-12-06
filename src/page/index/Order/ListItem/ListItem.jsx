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
   * 渲染每个item的总计
   * @param {*} data
   */
  renderTotalPrice(item, data) {
    return (
      <div className="product-item" key={data.wm_order_id}>
        <span>...</span>
        <div className="p-total-count">
          总计{data.product_count}个菜，实付
          <span className="total-price">￥{data.total}</span>
        </div>
      </div>
    );
  }

  /**
   * 渲染具体菜品
   */
  renderProduct(data) {
    let list = data.product_list;

    // push一个用来计算总计的type: more
    list.push({ type: 'more' });

    //
    return list.map((item, index) => {
      if (item.type === 'more') {
        return this.renderTotalPrice(item, data);
      }

      return (
        <div className="product-item" key={index}>
          {item.product_name}
          <div className="p-count">x{item.product_count}</div>
        </div>
      );
    });
  }

  /**
   * 渲染评价按钮
   */
  renderComment(data) {
    let evaluation = !data.is_comment;
    if (evaluation) {
      return (
        <div className="evaluation clearfix">
          <div className="evaluation-btn">评价</div>
        </div>
      );
    }
  }

  render() {
    let data = this.props.itemData;

    return (
      <div className="order-item">
        <div className="order-item-inner">
          <img src={data.poi_pic} className="item-img" />
          <div className="item-right">
            <div className="item-top">
              <p className="order-name one-line">{data.poi_name}</p>
              <div className="arrow" />
              <div className="order-state">{data.status_description}</div>
            </div>
            <div className="item-bottom">{this.renderProduct(data)}</div>
          </div>
        </div>
        {this.renderComment(data)}
      </div>
    );
  }
}

export default ListItem;
