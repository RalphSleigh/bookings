import 'bootstrap/dist/css/bootstrap.css';
import './lib/react-selectize/index.css';

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import guestUUID from './util.js'
import Routes from './routes.js'

import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import Immutable from 'immutable'
import { combineReducers } from 'redux-immutable';
import {ConnectedRouter, routerReducer, routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import fetch from './fetch'

import user from './user'
import messages from './messages'
import events from './events'
import bookings from './bookings'
import * as a from "./user/actions";


const history = createHistory();
const middleware = routerMiddleware(history);

const appReducer = (state = 'dev', action) => {
    switch (action.type) {
        case 'APP_UPDATE_ENV':
            return action.env;
    }
    return state;
};


const rootReducer = combineReducers({
    App: appReducer,
    User: user.reducer,
    Messages: messages.reducer,
    Events: events.reducer,
    Bookings: bookings.reducer,
    router: routerReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, Immutable.Map(), composeEnhancers(applyMiddleware(thunk, middleware)));
const provider = <Provider store={store}><ConnectedRouter history={history}>{Routes}</ConnectedRouter></Provider>;

//console.log( document.getElementById('root'));

/*****************************
 * This following line is very very bad but we want to be able to dispatch from fetch...
 *****************************/

window.dispatch = store.dispatch;

render(provider, document.getElementById('root'));

let hidden, visibilityChange;
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
    hidden = "hidden";
    visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
}

if (!(typeof document.addEventListener === "undefined" || hidden === undefined)) {
    document.addEventListener(visibilityChange, () => {
        console.log(`Visibility change ${document[hidden]} ${document.visibilityState}`);
        if (!document[hidden]) {
            dispatch(user.actions.getUser())
        }
    }, false);
}

fetch('/api/env', "GET").then(j => dispatch({type: 'APP_UPDATE_ENV', env: j.env}));