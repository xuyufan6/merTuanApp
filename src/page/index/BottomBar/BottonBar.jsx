import React from 'react';
import { connect } from 'react-redux';

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

  _renderItems() {
    let { tabs, activeKey, changePropsTab } = this.props;

    return tabs.map(item => {
      let cls = item.key + ' btn-item';
      if (item.key === activeKey) {
        cls += ' active';
      }
      return (
        <div
          key={item.key}
          className={cls}
          onClick={() => changePropsTab(item)}
        >
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
const mapDispatchToProps = dispatch => ({
  changePropsTab(item) {
    dispatch(
      changeTab({
        activeKey: item.key
      })
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomBar);
