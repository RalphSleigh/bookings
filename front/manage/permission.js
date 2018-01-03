import {connectedRouterRedirect} from 'redux-auth-wrapper/history4/redirect'

import * as P from '../../shared/permissions.js'
import connectedAuthWrapper from "redux-auth-wrapper/connectedAuthWrapper";

export const manageEventCheck = connectedRouterRedirect({
	authenticatedSelector: (state, props) => {
        return P.manageEvent(state.getIn(["User", "user"]).toJS(), state.getIn(["Events", "events", parseInt(props.match.params.eventId)]).toJS());
	},
	redirectPath: "/user",
	wrapperDisplayName: "Manage Event Check"
});

export const manageWholeEventWrapper = connectedAuthWrapper({
    authenticatedSelector: (state, props) => {
        const user = state.getIn(["User", "user"]).toJS();
        const event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]).toJS();
        return P.manageWholeEvent(user, event);
    },
    wrapperDisplayName: "manageWholeEventWrapper"
});

export const manageWholeEventCheck = connectedRouterRedirect({
    authenticatedSelector: (state, props) => {
        const user = state.getIn(["User", "user"]).toJS();
        const event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]).toJS();
        return P.manageWholeEvent(user, event);
    },
    redirectPath: "/user",
    wrapperDisplayName: "manageWholeEventCheck"
});
