import React from 'react';
import {render} from 'react-dom';
import App from 'compo/App';
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import todoApp from './reducers/index'
import todoMiddlewares from './middlewares/index'
let store = createStore(todoApp, {
  movies: [],
  counter: 1,
  users: []
}, applyMiddleware(todoMiddlewares))

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
