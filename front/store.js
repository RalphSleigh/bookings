import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';
import Immutable from 'immutable'
import { combineReducers } from 'redux-immutable';

import user from './user'
import messages from './messages'
import events from './events'





/*
function bookingsApp(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }

  // For now, don’t handle any actions
  // and just return the state given to us.
  return state
}
*/

//const initalState = Immutable.fromJS({User:initalUserState, UI:initalUIState});

const rootReducer = combineReducers({
	User:user.reducer, 
	Messages:messages.reducer, 
	Events:events.reducer});

export default createStore(rootReducer, Immutable.Map(), applyMiddleware(thunk));
