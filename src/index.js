import React from 'react';
import {render} from 'react-dom';
import App from 'compo/App';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import { createStore, applyMiddleware } from 'redux';
import todoAppReducers from './reducers/index';
import todoMiddlewares from './middlewares/index';

const initialState = {
  movies: [],
  counter: 1,
  users: [],
  searchTerm: '',
  filterTerm: 'Drama',
  favourites: []
};

let store = createStore(todoAppReducers, initialState, applyMiddleware(todoMiddlewares), window.devToolsExtension && window.devToolsExtension())

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
