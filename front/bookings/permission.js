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
        if (state.getIn(["User", "applications"]).find(a => a.get("eventId") === props.match.params.eventId))
            return '/event/' + props.match.params.eventId + '/apply/thanks';
        else return '/';
    },
    wrapperDisplayName: "Apply To Book check"
});

export const bookEventCheck = connectedRouterRedirect({
    authenticatedSelector: (state, props) => {
        //we could be called from /booking/1/edit or /event/1/book, need to handle both
        let event = null;
        if (props.match.params.eventId) event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]).toJS();
        else if (props.match.params.bookingId) event = state.getIn(["Events", "events", state.getIn(["Bookings", "bookings", parseInt(props.match.params.bookingId), "eventId"])]).toJS();

        const user = state.getIn(["User", "user"]).toJS();
        return P.bookEvent(user, event);
    },
    redirectPath: "/user",
    wrapperDisplayName: "Create Event Check"
});