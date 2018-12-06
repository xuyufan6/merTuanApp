import React from 'react';
import { connect } from 'react-redux';

import './ContentList.scss';
import { getListData } from '../../actions/contentListAction';
import ListItem from './ListItem/ListItem';
import ScrollView from 'component/ScrollView/ScrollView';

/**
 *
 *  附近商家列表
 * @class ContentList
 * @extends {React.Component}
 */
class ContentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isend: false // 标识页面是否可以滚动
    };
    // 当前页码
    this.page = 1;
    this.fetchData(this.page);
  }

  onLoadPage() {
    this.page++;
    // 最多滚动3页
    if (this.page > 3) {
      this.setState({
        isend: true
      });
    } else {
      this.fetchData(this.page);
    }
  }

  fetchData(page) {
    this.props.dispatch(getListData(page));
  }

  renderItems() {
    let list = this.props.list;
    return list.map(item => {
      return <ListItem key={item.id} itemData={item} />;
    });
  }

  render() {
    return (
      <div className="list-content">
        <h4 className="list-title">
          <span className="title-line" />
          <span>附近商家</span>
          <span className="title-line" />
        </h4>
        <ScrollView
          loadCallback={this.onLoadPage.bind(this)}
          isend={this.state.isend}>
          {this.renderItems()}
        </ScrollView>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.contentListReducer.list
});

export default connect(mapStateToProps)(ContentList);
