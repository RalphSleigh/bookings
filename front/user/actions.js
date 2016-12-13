import fetch from '../fetch.js'
import { browserHistory } from 'react-router'
import m from '../messages'

export const UPDATE_USER = 'USER_UPDATE_USER'

export const getUser = () => {
  return (dispatch) => {
      fetch('/api/user', "GET")
      .then(j => dispatch(updateUser(j)));
  }
}

export const doLogin = (credentials) => {
    return (dispatch) => {
          fetch('/api/user/login',"POST", credentials)
          .then(j => {
                	dispatch(updateUser(j));
                	dispatch(m.actions.setSuccess("Logged in"));
                	browserHistory.push('/');
          	},
			e => {
              		if(e.status === 401) dispatch(m.actions.setWarning("Invalid e-mail or password"));
         });
    };
} 

export const doLogout = () => {
    return (dispatch) => {
         fetch('/api/user/logout',"POST")
         .then(j => {
              dispatch(updateUser(j));
			  dispatch(m.actions.setSuccess("Logged out"));
              browserHistory.push('/');
         });
    };
};

const updateUser = user => {
	return {type:UPDATE_USER,
			user:user}
}