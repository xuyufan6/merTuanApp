import React from 'react';

import './Loading.scss';

/**
 * Loading组件
 */
class Loading extends React.Component {
  render() {
    let str = this.props.isend ? '已完成' : '加载中';
    return <div className="loading">{str}</div>;
  }
}

export default Loading;
