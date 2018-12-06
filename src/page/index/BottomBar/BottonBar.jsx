import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { changeTab } from '../actions/tabAction';
import './BottomBar';

/**
 *
 *  首页底部bar
 * @class BottomBar
 * @extends {React.Component}
 */
class BottomBar extends React.Component {
  constructor(props) {
    super(props);
  }

  changePropsTab(item) {
    this.props.history.push(item.key);
    this.props.dispatch(
      changeTab({
        activeKey: item.key
      })
    );
  }

  _renderItems() {
    let { tabs, activeKey } = this.props;

    return tabs.map(item => {
      let cls = item.key + ' btn-item';
      if (item.key === activeKey) {
        cls += ' active';
      }
      return (
        // <Link className={cls} to={item.key} key={item.key}>{item.name}</Link>
        <div
          key={item.key}
          className={cls}
          onClick={() => this.changePropsTab(item)}>
          <div className="tab-icon" />
          <div className="btn-name">{item.name}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="bottom-bar">{this._renderItems()}</div>;
  }
}

const mapStateToProps = state => ({
  tabs: state.tabReducer.tabs,
  activeKey: state.tabReducer.activeKey
});

export default withRouter(connect(mapStateToProps)(BottomBar));
