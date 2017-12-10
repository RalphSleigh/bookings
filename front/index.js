import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import guestUUID from './util.js'
import Routes from './routes.js'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import Immutable from 'immutable'
import { combineReducers } from 'redux-immutable';
import {ConnectedRouter, routerReducer, routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { withRouter } from 'react-router-dom';

import user from './user'
import messages from './messages'
import events from './events'
import bookings from './bookings'



const history = createHistory()
const middleware = routerMiddleware(history)

const rootReducer = combineReducers({
	User: user.reducer,
	Messages: messages.reducer,
	Events: events.reducer,
	Bookings: bookings.reducer,
	router: routerReducer
});

const store = createStore(rootReducer, Immutable.Map(), applyMiddleware(thunk, middleware));


const provider = <Provider store={store}><ConnectedRouter history={history}>{Routes}</ConnectedRouter></Provider>

//console.log( document.getElementById('root'));

/*****************************
 * This following line is very very bad but we want to be able to dispatch from fetch...
 *****************************/

window.dispatch = store.dispatch


render(provider, document.getElementById('root'));