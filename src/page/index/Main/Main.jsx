import React from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
// import { addTodo } from '../actions/tabAction';

import BottomBar from '../BottomBar/BottonBar';
import Home from '../Home/Home';
import Order from '../Order/Order';
import My from '../My/My';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/order/" component={Order} />
          <Route path="/my/" component={My} />
          <BottomBar />
        </div>
      </Router>
    );
  }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch => ({});

export default connect()(Main);
// mapStateToProps,
// mapDispatchToProps
