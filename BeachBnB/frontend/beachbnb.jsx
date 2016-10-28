import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  window.signup = signup;
  window.login = login;
  window.logout = logout;
  const success = (data) => console.log(data);
  const error = (data) => console.log(data);
  window.success = success;
  window.error = error;

  ReactDOM.render(<h1>Hello</h1>, root);
});
