import React from 'react';
import {render} from 'react-dom';
import App from 'compo/App';
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import todoAppReducers from './reducers/index'
import todoMiddlewares from './middlewares/index'

const initialState = {
  movies: [],
  counter: 1,
  users: [],
  searchTerm: '',
  favourites: []
};

let store = createStore(todoAppReducers, initialState, applyMiddleware(todoMiddlewares))

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
