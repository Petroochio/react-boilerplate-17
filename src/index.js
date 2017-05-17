/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import configureStore from './redux/store/configureStore';

// TODO: This sets the display settings for the debugger, these should be set by the build env
localStorage.debug = 'main:*';

window.onload = () => render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.querySelector('#root'));
