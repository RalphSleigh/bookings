import fetch from '../fetch.js'
import {push} from 'react-router-redux'
import m from '../messages'

export const UPDATE_USER = 'USER_UPDATE_USER';

export const getUser = () => {
    return (dispatch) => {
        fetch('/api/user', "GET")
            .then(j => dispatch(updateUser(j)));
    }
};

export const doLogin = (credentials) => {
    return (dispatch) => {
        fetch('/api/user/login', "POST", credentials)
            .then(j => {
                    dispatch(updateUser(j));
                    dispatch(m.actions.setSuccess("Logged in"));
                    dispatch(push('/'));
                },
                e => {
                    if (e.status === 401) dispatch(m.actions.setWarning("Invalid e-mail or password"));
                });
    };
};

export const doLogout = () => {
    return (dispatch) => {
        fetch('/api/user/logout', "POST")
            .then(j => {
                dispatch(updateUser(j));
                dispatch(m.actions.setSuccess("Logged out"));
                dispatch(push('/'));
            });
    };
};


export const updateUser = user => {
    return {
        type: UPDATE_USER,
        user: user
    }
};

export const getUserList = (eventId) => dispatch => {
    fetch('/api/users/' + eventId, 'GET')
        .then(u => dispatch(updateList(u.users)));
};

export const UPDATE_LIST = "USERS_UPDATE_LIST";

const updateList = users => {
    return {
        type: UPDATE_LIST,
        users: users
    }
};