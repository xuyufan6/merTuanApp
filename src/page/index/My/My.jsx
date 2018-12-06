import React from 'react';
import { connect } from 'react-redux';
// import { addTodo } from '../actions/tabAction';

import './My.scss';

class My extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="my">
        <div className="header">
          <img
            src="http://i.waimai.meituan.com/static/img/default-avatar.png"
            className="avatar"
            alt=""
          />
          <p className="nickname">xiaoming &gt;</p>
        </div>

        <div className="content">
          <ul className="items">
            <li className="address">收货地址管理</li>
            <li className="money">商家代金券</li>
          </ul>
          <ul className="items">
            <li className="email">意见反馈</li>
            <li className="question">常见问题</li>
          </ul>
          <p className="tel">客服电话：&nbsp;101-097-77</p>
          <p className="time">服务时间：&nbsp;9:00-23:00</p>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch => ({});

export default connect()(My);
