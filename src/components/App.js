import React, {Component} from 'react';
import { connect } from 'react-redux'
import Search from 'react-search'
import List from 'components/List';
import ListUsers from 'components/ListUsers';
import Counter from 'components/Counter';

import '../main.scss';

@connect(
  () => ({}),
  (dispatch) => ({
    addMovie: (title) =>
      dispatch({
        type: "push",
        data: title
      })
    ,
    increment: () => dispatch({
      type: "increment"
    }),
    decrement: () => dispatch({
      type: "decrement"
    })
  })
)

class App extends Component {
  render() {
    const {addMovie, increment, decrement} = this.props
    return (
      <div>
        <input type="text" ref={ (input) => { this.myInput = input } }/>
        <List/>
        <Counter/>
        <button onClick={() =>
          {
            addMovie(this.myInput.value)
            this.myInput.value = ""
          }
        }>Push</button>
        <button onClick={() =>
          increment()
        }>Increment</button>
        <button onClick={() =>
          decrement()
        }>Decrement</button>
        <ListUsers/>
      </div>
    )
  }
}

export default App;
