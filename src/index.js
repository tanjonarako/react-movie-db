import React from 'react';
import {render} from 'react-dom';
import App from 'compo/App';
import { Provider } from 'react-redux'

import { createStore } from 'redux'
import todoApp from './reducers/index'
let store = createStore(todoApp, {movies: ["Naruto", "One piece", "Kuroko", "Mirror challenge"], counter: 1})

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
