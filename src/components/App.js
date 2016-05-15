import React, {Component} from 'react';
import { connect } from 'react-redux'

import '../main.scss';

@connect(
  (state) => {
    return {
      movies: state.movies
    }
  }
)
class List extends Component {
  render() {
    const movies = this.props.movies
    return (
      <ul>
        {movies.map((movie, index) => {
          return <li key={index}>{movie}</li>
        })}
      </ul>
    )
  }
}

List.defaultProps = { movies: []}

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
        <h1>Hello</h1>
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
      </div>
    )
  }
}

export default App;
