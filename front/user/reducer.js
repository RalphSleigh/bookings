import Immutable from 'immutable'
import * as a from './actions.js'

//const initalUserState = Immutable.fromJS({id:0, name:"Guest", roles:[]});
const initalUserState = null;

export default function User(state = initalUserState, action) {
	
	switch(action.type){
    	case a.UPDATE_USER: return Immutable.fromJS(action.user);    
  	}

 	return state;
  
}