import React from 'react';

import * as actions from '../../actions/actions';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(actions.increment()),
  decrement: () => dispatch(actions.decrement()),
  resetCounter: () => dispatch(actions.resetCounter()),
});

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h2>counter</h2>
        <div>
          <button onClick={this.props.decrement}>-</button>
          <span>{this.props.counter}</span>
          <button onClick={this.props.increment}>+</button>
          <button onClick={this.props.resetCounter}>reset</button>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);