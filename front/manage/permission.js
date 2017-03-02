import { UserAuthWrapper } from 'redux-auth-wrapper'

import * as P from '../../shared/permissions.js'

export const manageEventCheck = UserAuthWrapper({
	authSelector: (state, props) => {

		return { user: state.get("User"), event: state.getIn(["Events", props.params.eventId]) }
	},
	predicate: (data) => {
		if (data.event === undefined) return true;
		return P.manageEvent(data.user.toJS(), data.event.toJS());
	},
	failureRedirectPath: "/user",
	wrapperDisplayName: "Manage Event Check"
});
