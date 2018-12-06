import React from 'react';
import { connect } from 'react-redux';

import './ListItem.scss';

/**
 *
 *  列表单个组件
 * @class ListItem
 * @extends {React.Component}
 */
class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  // 渲染是否是品牌跟新到标签
  renderBrand(data) {
    if (data.brand_type) {
      return <div className="brand brand-pin">品牌</div>;
    }
    return <div className="brand brand-xin">新到</div>;
  }

  /**
   *
   *  渲染5颗星的方法
   * @param {*} data
   */
  renderScore(data) {
    // 商家具体得分 4.2
    let wm_poi_score = data.wm_poi_score || '';
    // 把得分转为字符串，并且以小数点分割成数组，拿到具体星星数 [4,2]
    let score = wm_poi_score.toString();
    let scoreArray = score.split('.');

    // 拿到全星数
    let fullstar = parseInt(scoreArray[0]);
    // 小数部分， 如果大于5，则表示有一个，否则0个
    // 半颗个数
    let halfstar = parseInt(scoreArray[1]) >= 5 ? 1 : 0;
    // 灰色星星个数
    let nullfstar = 5 - fullstar - halfstar;

    let starjsx = [];

    // 渲染满星jsx
    for (let i = 0; i < fullstar; i++) {
      starjsx.push(<div key={i + 'full'} className="star fullstar" />);
    }

    if (halfstar) {
      // 渲染半颗星jsx
      for (let i = 0; i < halfstar; i++) {
        starjsx.push(<div key={i + 'half'} className="star halfstar" />);
      }
    }

    if (nullfstar) {
      // 渲染0星jsx(灰色星星)
      for (let i = 0; i < nullfstar; i++) {
        starjsx.push(<div key={i + 'null'} className="star nullstar" />);
      }
    }
    return starjsx;
  }

  /**
   * 渲染月售数量
   * @param {*} data
   */
  renderMonthNum(data) {
    let num = data.month_sale_num;
    // 大于999采用999+
    return num > 999 ? '999+' : num;
  }

  /**
   * 是否需要渲染美团专送tag
   * @param {*} data
   */
  renderMeituanFlag(data) {
    return data.delivery_type ? (
      <div className="item-meituan-flag">美团专送</div>
    ) : null;
  }

  /**
   * 渲染商家活动列表
   * @param {*} data
   */
  renderOthers(data) {
    let arr = data.discounts2;
    return arr.map(item => {
      return (
        <div className="other-info" key={item.id}>
          <img src={item.icon_url} className="other-tag" />
          <div className="other-content">{item.info}</div>
        </div>
      );
    });
  }

  render() {
    let data = this.props.itemData;
    return (
      <div className="item-content scale-1px">
        <img src={data.pic_url} className="item-img" />
        {this.renderBrand(data)}
        <div className="item-info-content">
          <p className="item-title">{data.name}</p>
          <div className="item-desc clearfix">
            <div className="item-score">{this.renderScore(data)}</div>
            <div className="item-count">月售{this.renderMonthNum(data)}</div>
            <div className="item-distance">&nbsp;{data.distance}</div>
            <div className="item-time">
              &nbsp;{data.mt_delivery_time}&nbsp;|
            </div>
          </div>
          <div className="item-price">
            <div className="item-pre-price">{data.min_price_tip}</div>
            {this.renderMeituanFlag(data)}
          </div>
          <div className="item-others">{this.renderOthers(data)}</div>
        </div>
      </div>
    );
  }
}

export default connect()(ListItem);
