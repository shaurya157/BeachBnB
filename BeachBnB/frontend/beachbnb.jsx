import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './actions/session_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  const success = (data) => console.log(data);
  const error = (data) => console.log(data);
  window.success = success;
  window.error = error;

  ReactDOM.render(<h1>Hello</h1>, root);
});
