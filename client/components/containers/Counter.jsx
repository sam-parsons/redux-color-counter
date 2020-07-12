import React from 'react';

import * as actions from '../../actions/actions';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(actions.increment())
})

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <h2>counter</h2>
        <div>
          <button>-</button>
          <span>{this.props.counter.counter}</span>
          <button onClick={this.props.increment}>+</button>
          <button>reset</button>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);