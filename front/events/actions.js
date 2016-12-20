import Immutable from 'immutable'
import fetch from '../fetch.js'
import { browserHistory } from 'react-router'
import m from '../messages'

//Actions



export const UPDATE_EVENT = 'EVENT_UPDATE_EVENT';
export const GET_EVENTS = 'EVENT_GET_EVENTS';

const updateEvent = e => {
	return {type:UPDATE_EVENT,
			key: e.id,
			data:e};
}

export const getEvents = () => {
	return (dispatch) => {
		fetch('/api/events',"GET")
		.then(j => 
			dispatch({
				type:GET_EVENTS,
				data:j
			})
		).catch(r => {
			console.log(r);
		});
	}
}

export const getEvent = (id) => {
	return (dispatch) => {
		fetch('/api/event/'+id,"GET")
		.then(j => {
			dispatch(updateEvent(j));
		}).catch(r => console.log(r));
	}
}

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

export const createEvent = event => {
	return dispatch => {
		fetch('/api/event/create',"POST", event)
		.then(j => {
			dispatch({
				type:GET_EVENTS,
				data:j
			});
			dispatch(m.actions.setSuccess("Event Created"));
			browserHistory.push('/');
		}).catch(r => {
			console.log(r);
		});
	}
}

export const deleteEvent = event => {
	return dispatch => {
		fetch('/api/event/delete',"POST", event)
		.then(() => {
			dispatch(m.actions.setSuccess("Event Deleted"));
			browserHistory.push('/');
		})
	}
}