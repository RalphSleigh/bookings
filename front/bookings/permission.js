import { connectedReduxRedirect } from 'redux-auth-wrapper/history3/redirect'
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper'

import * as P from '../../shared/permissions.js'

export const viewBookingCheck = connectedReduxRedirect({
	authSelector: (state, props) => {
		if (props.booking === undefined) return true;
		return P.viewBooking(state.get("User").toJS(), state.getIn(["Bookings", "bookings", props.match.params.bookingId]).toJS());
	},
	redirectPath: "/user",
	wrapperDisplayName: "View Booking check"
});
