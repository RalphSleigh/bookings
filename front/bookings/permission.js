import {connectedRouterRedirect,} from 'redux-auth-wrapper/history4/redirect'

import * as P from '../../shared/permissions.js'


export const viewBookingCheck = connectedRouterRedirect({
    authenticatedSelector: (state, props) => {
        if (props.booking === undefined) return true;
        return P.viewBooking(state.getIn(["User", "user"]).toJS(), state.getIn(["Bookings", "bookings", parseInt(props.match.params.bookingId)]).toJS());
    },
    redirectPath: "/user",
    wrapperDisplayName: "View Booking check"
});

export const applyEventCheck = connectedRouterRedirect({
    authenticatedSelector: (state, props) => {
        const Event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]);
        const User = state.getIn(["User", "user"]);
        return P.applyToBookEvent(User.toJS(), Event.toJS());
    },
    redirectPath: (state, props) => {
        if (state.getIn(["User", "user", "applications"]).find(a => a.get("eventId") === props.match.params.eventId))
            return '/event/' + props.match.params.eventId + '/apply/thanks';
        else return '/';
    },
    wrapperDisplayName: "Apply To Book check"
});

export const bookEventCheck = connectedRouterRedirect({
    authenticatedSelector: (state, props) => {
        //we could be called from /booking/1/edit or /event/1/book, need to handle both
        const User = state.getIn(["User", "user"]);
        if (props.match.params.eventId) Event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]);
        else if (props.match.params.bookingId) Event = state.getIn(["Events", "events", state.getIn(["Bookings", "bookings", parseInt(props.match.params.bookingId), "eventId"])]);

        const existingBooking = state.getIn(["Bookings", "bookings"]).find(b => b.get("userId") === User.get("id") && b.get("eventId") === Event.get("id"));

        const user = User.toJS();
        const event = Event.toJS();
        return P.bookEvent(user, event) || P.editBooking(user, event, existingBooking ? existingBooking.toJS() : null);
    },
    redirectPath: "/user",
    wrapperDisplayName: "Create Event Check"
});