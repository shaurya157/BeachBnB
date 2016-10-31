import React from 'react';
import { Link } from 'react-router';

const loggedIn = (currentUser, logout) => {
  return (
    <div>
      <h1>Welcome {currentUser.username}</h1>
      <button onClick={logout}>Log out</button>
    </div>
  );
};


const loggedOut = () => (
  <div>
    <Link to='/signup'>Sign up!</Link>
    <Link to='/login'>Log in</Link>
  </div>
);

const Greeting = ({currentUser, logout}) => (
  currentUser ? loggedIn(currentUser, logout) : loggedOut()
);

export default Greeting;
