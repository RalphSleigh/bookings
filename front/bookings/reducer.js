import Immutable from 'immutable'
import * as a from './actions.js'
import user from '../user'
import * as manageActions from '../manage/actions.js'

const initialBookingsState = Immutable.fromJS({currentBooking: null, bookings: null});

export default function Bookings(state = initialBookingsState, action) {

    switch (action.type) {
        //case a.GET_EVENTS: return Immutable.fromJS(action.data);
        case a.UPDATE_BOOKINGS:
            return state.set("bookings", action.bookings.reduce((a, c) => {
                return a.set(c.id, Immutable.fromJS(c))
            }, state.get("bookings") || Immutable.Map()));
        case a.DELETE_BOOKING:
            return state.deleteIn(["bookings", action.id]);
        case user.actions.UPDATE_USER:
            return state.set("bookings", null); //invalidates app render if the user changes until we can fetch more user bookings.
        case a.UPDATE_CURRENT_BOOKING:
            return state.set("currentBooking", Immutable.fromJS(action.booking))
    }
    return state;
}

