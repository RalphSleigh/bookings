import Immutable from 'immutable'
import * as a from './actions.js'

const initalBookingsState = Immutable.fromJS({quickList:[]});

export default function Bookings(state = initalBookingsState, action) {
	
	switch(action.type){
		case a.UPDATE_QUICK_LIST: return state.set("quickList",Immutable.fromJS(action.participants));
		//case a.GET_EVENTS: return Immutable.fromJS(action.data);
    	//case a.UPDATE_EVENT: return state.set(action.key.toString(), Immutable.fromJS(action.data)); 
  	}
 	return state;
}