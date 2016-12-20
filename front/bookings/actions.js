import Immutable from 'immutable'
import fetch from '../fetch.js'
import { browserHistory } from 'react-router'
import m from '../messages'

/*
export const saveEvent = event => {
	return (dispatch) => {
		fetch('/api/event/edit',"POST",event)
		.then(j => {
			dispatch(updateEvent(j));
			dispatch(m.actions.setSuccess("Event Updated"));
			browserHistory.push('/');
		}).catch(r => console.log(r));
	}

}
*/

export const UPDATE_QUICK_LIST = 'BOOKING_UPDATE_QUICK_LIST';

export const updateQuickList = participants => {
	return {type:UPDATE_QUICK_LIST,
			participants:participants}
}