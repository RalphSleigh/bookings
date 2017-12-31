import {connectedRouterRedirect} from 'redux-auth-wrapper/history4/redirect'

import * as P from '../../shared/permissions.js'

export const manageEventCheck = connectedRouterRedirect({
	authenticatedSelector: (state, props) => {
        return P.manageEvent(state.getIn(["User", "user"]).toJS(), state.getIn(["Events", "events", parseInt(props.match.params.eventId)]).toJS());
	},
	redirectPath: "/user",
	wrapperDisplayName: "Manage Event Check"
});
