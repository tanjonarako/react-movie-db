import React, {Component} from 'react';
import { connect } from 'react-redux'

import '../main.scss';

@connect(
  (state) => {
    return {
      movies: state.movies
    }
  },
  (dispatch) => ({
    getMovies: () => dispatch({
      type: "getMovies",
      request: {
        url: 'https://api.themoviedb.org/3/movie/popular?api_key=61a7fe0a2defc2d41f21253258bf6a4e'
      }
    })
  })
)
class List extends Component {
  componentDidMount() {
    this.props.getMovies()
  }
  render() {
    const movies = this.props.movies
    return (
      <ul>
        {movies.map((movie) => {
          return <li key={movie.id}>{movie.title}</li>
        })}
      </ul>
    )
  }
}

List.defaultProps = { movies: []}

@connect(
  (state) => {
    return {
      users: state.users
    }
  },
  (dispatch) => ({
    getUsers: (limit) => dispatch({
      type: "getUsers",
      request: {
        url: "https://randomuser.me/api/?results=" + limit
      }
    })
  })
)
class ListUsers extends Component {
  componentDidMount() {
    this.props.getUsers(20)
  }
  render() {
    const users = this.props.users
    return (
      <ul>
        {users.map((user) => {
          return <li key={user.email}>{user.name.first}</li>
        })}
      </ul>
    )
  }
}

ListUsers.defaultProps = { users: []}

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
        <ListUsers/>
      </div>
    )
  }
}

export default App;
