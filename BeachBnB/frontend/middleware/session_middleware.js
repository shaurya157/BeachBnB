import { receiveCurrentUser,
         receiveErrors,
         LOGIN,
         LOGOUT,
         SIGNUP
       } from '../actions/session_actions';
import { login, signup, logout } from '../util/session_api_util';

const SessionMiddleware = ({dispatch}) => next => action => {
  let success = (data) => dispatch(receiveCurrentUser(data));
  let error = (data) => dispatch(receiveErrors(data));
  
  switch (action.type) {
    case LOGIN:
      login(action.user, success, error);
      return next(action);
    case LOGOUT:
      error = () => console.log('There was a problem logging out');
      success = () => next(action);
      logout(success, error);
      break;
    case SIGNUP:
      signup(action.user, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default SessionMiddleware;
