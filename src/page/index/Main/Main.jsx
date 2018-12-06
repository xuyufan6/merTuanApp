import React from 'react';
import { connect } from 'react-redux';
// import { addTodo } from '../actions/tabAction';

import BottomBar from '../BottomBar/BottonBar';
// import Home from '../Home/Home';
import Order from '../Order/Order';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <Home /> */}
        <Order />
        <BottomBar />
      </div>
    );
  }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch => ({});

export default connect()(Main);
// mapStateToProps,
// mapDispatchToProps
