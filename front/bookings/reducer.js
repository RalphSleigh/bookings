import Immutable from 'immutable'
import * as a from './actions.js'
import user from '../user'
import * as manageActions from '../manage/actions.js'

const initalBookingsState = Immutable.fromJS({currentBooking:null, bookings: null });

export default function Bookings(state = initalBookingsState, action) {

	switch (action.type) {
		case a.UPDATE_QUICK_LIST: return state.set("quickList", Immutable.fromJS(action.participants));
		//case a.GET_EVENTS: return Immutable.fromJS(action.data);
		case a.UPDATE_BOOKINGS:
			if (state.get("bookings") === null) return state.set("bookings", Immutable.Map()).mergeIn(["bookings"], Immutable.fromJS(action.bookings));
			return state.mergeIn(["bookings"], Immutable.fromJS(action.bookings));
		case a.UPDATE_BOOKING: return state.mergeIn(["bookings"], Immutable.fromJS(action.booking));
		case manageActions.TOGGLE_PAID: return state.mergeIn(["bookings"], Immutable.fromJS(action.booking));
		case a.DELETE_BOOKING: return state.deleteIn(["bookings", action.id]);
		case user.actions.UPDATE_USER: return state.set("bookings", null) //invalidates app render if the user changes until we can fetch more user bookings.
		case a.UPDATE_CURRENT_BOOKING: return state.set("currentBooking", Immutable.fromJS(action.booking)) 
	}
	return state;
}