import { UserAuthWrapper } from 'redux-auth-wrapper'

import * as P from '../../shared/permissions.js'

export const viewBookingCheck = UserAuthWrapper({
	authSelector: (state, props) => {

		return { user: state.get("User"), booking: state.getIn(["Bookings", "bookings", props.params.bookingId]) }
	},
	predicate: (data) => {
		if (data.booking === undefined) return true;
		return P.viewBooking(data.user.toJS(), data.booking.toJS());
	},
	failureRedirectPath: "/user",
	wrapperDisplayName: "View Booking check"
});
