import {connectedRouterRedirect,} from 'redux-auth-wrapper/history4/redirect'

import * as P from '../../shared/permissions.js'


export const viewBookingCheck = connectedRouterRedirect({
    authenticatedSelector: (state, props) => {
        if (props.booking === undefined) return true;
        return P.viewBooking(state.get("User").toJS(), state.getIn(["Bookings", "bookings", parseInt(props.match.params.bookingId)]).toJS());
    },
    redirectPath: "/user",
    wrapperDisplayName: "View Booking check"
});

export const applyEventCheck = connectedRouterRedirect({
    authenticatedSelector: (state, props) => {
        const Event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]);
        const User = state.get("User");
        return P.applyToBookEvent(User.toJS(), Event.toJS());
    },
    redirectPath: (state, props) => '/event/' + props.match.params.eventId + '/apply/thanks',
    wrapperDisplayName: "Apply To Book check"
});

export const bookEventCheck = connectedRouterRedirect({
    authenticatedSelector: (state, props) => {
        const event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]).toJS();
        const user = state.get("User").toJS();
        return P.bookEvent(user, event);
    },
    redirectPath: "/user",
    wrapperDisplayName: "Create Event Check"
});