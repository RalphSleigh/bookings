import { connectedReduxRedirect } from 'redux-auth-wrapper/history3/redirect'
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper'

import * as P from '../../shared/permissions.js'

export const manageEventCheck = connectedReduxRedirect({
	authenticatedSelector: (state, props) => {
		if (props.event === undefined) return true;
        return P.manageEvent(state.get("User").toJS(), state.getIn(["Events", "event", parseInt(props.match.params.eventId)]));
	},
	redirectPath: "/user",
	wrapperDisplayName: "Manage Event Check"
});
