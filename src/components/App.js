import React, {Component} from 'react';
import { connect } from 'react-redux'
import Search from 'components/Search'
import Filter from 'components/Filter'
import List from 'components/List';
import ListUsers from 'components/ListUsers';
import Counter from 'components/Counter';
import Favourite from 'components/Favourite';

import '../main.scss';

@connect(
  () => ({}),
  (dispatch) => ({
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
      <div className="container">
        <Search/>
        <Filter/>
        <List/>
        <Favourite/>
        <Counter/>
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
