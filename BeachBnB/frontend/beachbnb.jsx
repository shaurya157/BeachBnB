import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {login} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;

  if(window.currentUser){
    store = configureStore({session: {currentUser: window.currentUser}});
  } else {
    store = configureStore();
  }

  window.store = store;
  window.login = login;

  ReactDOM.render(<Root store={store} />, root);
});
