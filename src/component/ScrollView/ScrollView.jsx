import React from 'react';

import Loading from 'component/Loading/Loading';

/**
 * <ScrollView loadCallback={function} isend={bool} />
 * @description 滚动加载组件
 */
class ScrollView extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.onLoadPage.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onLoadPage.bind(this));
  }

  onLoadPage() {
    // 可视区
    let clientHeight = document.documentElement.clientHeight;
    // 滚动距离
    let scrollTop = document.documentElement.scrollTop;
    // 文档高度
    let scrollHeight = document.body.scrollHeight;

    // 预值，提前量
    let proLoadDis = 30;
    // 可视区+滚动距离 >= （文档高度-预留值） = 触底了
    if (clientHeight + scrollTop >= scrollHeight - proLoadDis) {
      if (!this.props.isend) {
        this.props.loadCallback && this.props.loadCallback();
      }
    }
  }

  render() {
    return (
      <div className="scroll-view">
        {this.props.children}
        <Loading isend={this.props.isend} />
      </div>
    );
  }
}

export default ScrollView;
