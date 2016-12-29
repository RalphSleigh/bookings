import Immutable from 'immutable'
import fetch from '../fetch.js'
import { browserHistory } from 'react-router'

import events from '../events'
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

export const CREATE_BOOKING = 'BOOKING_CREATE_BOOKING';

export const createBooking = booking => {
	return dispatch => {
		fetch('/api/booking/'+booking.eventId+'/create',"POST", booking)
		.then(j => {
			dispatch(updateBooking(j));
			browserHistory.push('/event/'+booking.eventId+'/book/thanks');
		})
	}
}

export const saveBooking = booking => {
	return dispatch => {
		fetch('/api/booking/save',"POST",booking)
		.then(j => {
			dispatch(updateBooking(j));
			browserHistory.push('/event/'+booking.eventId+'/book/thanks');
		});
	}
}

//export const UPDATE_BOOKING = 'BOOKING_UPDATE_BOOKING';

export const getBooking = (id) => {
	return dispatch => {
		fetch('/api/booking/'+id, "GET")
		.then(j => {
			dispatch(events.actions.updateEvent(j[id].event));
			dispatch(updateBookings(j));
		})
	}
}



export const UPDATE_BOOKINGS = 'BOOKING_UPDATE_BOOKINGS';

export const getUserBookings = () => {
	return dispatch => {
		fetch('/api/booking/user', "GET")
		.then(j => {
			dispatch(updateBookings(j));
		})
	}

}

export const getEventBookings = (eventId) => {
	return dispatch => {
		fetch('/api/booking/event/'+eventId, "GET")
		.then(j => {
			dispatch(updateBookings(j));
		})
	}

}

const updateBookings = bookings => {
	return {type:UPDATE_BOOKINGS,
			bookings:bookings}
}

export const UPDATE_BOOKING = 'BOOKING_UPDATE_BOOKING';

const updateBooking = booking => {
	return {type:UPDATE_BOOKING,
			booking:booking}
}

export const redirectFromThanks = eventId => dispatch => {
	browserHistory.push('/event/'+eventId+'/book');
} 