import React, {Component} from 'react';
import { connect } from 'react-redux'

@connect(
  (state) => ({
    counter: state.counter
  })
)
class Counter extends Component {
  render() {
    const counter = this.props.counter
    return (
      <div>
        {counter}
      </div>
    )
  }
}

export default Counter;
