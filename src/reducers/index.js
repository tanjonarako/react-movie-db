import { combineReducers } from 'redux'

const moviesReducer = (state = [], action) => {
  if (action.type == "getMovies_SUCCESS") {
    return [...state, ...action.data.data.movies]
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
    return action.data.results
  }
  return state
}

const searchReducer = (state = '', action) => {
  if (action.type == "search") {
    return action.data
  }
  return state
}

const filterReducer = (state = '', action) => {
  if (action.type == "filter") {
    return action.data
  }
  return state
}


const favReducer = (state = [], action) => {
  if (action.type == "addToFav") {
    localStorage["id"] = JSON.stringify(state);
    return [...state, action.data]
  }

  if (action.type == "getFav") {
    var storedId = JSON.parse(localStorage["id"]);
    return [...state, ...storedId]
  }
  return state
}

export default combineReducers({
  movies: moviesReducer,
  counter: counterReducer,
  users: userReducer,
  searchTerm: searchReducer,
  filterTerm: filterReducer,
  favourites: favReducer,
})
