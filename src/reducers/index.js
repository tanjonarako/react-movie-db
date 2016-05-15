import { combineReducers } from 'redux'

const moviesReducer = (state = [], action) => {
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


export default combineReducers({
  movies: moviesReducer,
  counter: counterReducer
})
