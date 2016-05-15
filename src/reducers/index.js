import { combineReducers } from 'redux'

const moviesReducer = (state = [], action) => {
  if (action.type == "getMovies_SUCCESS") {
    return [...state, ...action.data.results]
  }
  if (action.type == "push") {
    return [...state, action.data]
  }
  return state
}

const counterReducer = (state = 0, action) => {
  if (action.type == "increment") {
    return state += 1
  }
  if (action.type == "decrement") {
    return state -= 1
  }
  return state
}

const userReducer = (state = [], action) => {
  if (action.type == "getUsers_SUCCESS") {
    return [...state, ...action.data.results]
  }
  return state
}

export default combineReducers({
  movies: moviesReducer,
  counter: counterReducer,
  users: userReducer,
})
