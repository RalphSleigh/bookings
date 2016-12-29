import Immutable from 'immutable'
import * as a from './actions.js'


//should Events be a map or list? both suck sometimes..
const initalEventState = null

export default function Events(state = initalEventState, action) {
	
	switch(action.type){
		case a.GET_EVENTS: return Immutable.fromJS(action.data);
    	case a.UPDATE_EVENT: return state.set(action.key.toString(), Immutable.fromJS(action.data)); 
  	}
 	return state;
}