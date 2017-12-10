import { connectedReduxRedirect } from 'redux-auth-wrapper/history3/redirect'
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper'

import * as P from '../../shared/permissions.js'

export const editEventCheck = connectedReduxRedirect({
	authenticatedSelector: (state, props) => {
		if (props.event === undefined) return true;
		return P.editEvent(state.get("User").toJS(),state.getIn(["Events", props.match.params.eventId]).toJS());
	},
	redirectPath: "/user",
	wrapperDisplayName: "Edit Event Check"
});

export const createEventCheck = connectedReduxRedirect({
	authenticatedSelector: (state, props) => {
		return P.createEvent(state.get("User").toJS());
	},
	redirectPath: "/user",
	wrapperDisplayName: "Create Event Check"
});

export const showEditLink = connectedAuthWrapper({
	authenticatedSelector: (state, props) => {
		return P.editEvent(state.get("User").toJS(), props.event);
	},
	wrapperDisplayName: "showEventEditLink"
});

export const showCreateLink = connectedAuthWrapper({
	authenticatedSelector: (state) => {
		return P.createEvent(state.get("User").toJS());
	},
	wrapperDisplayName: "showEventCreateLink"
});

export const showBookLink = connectedAuthWrapper({
	authenticatedSelector: (state, props) => {
		return P.bookEvent(state.get("User").toJS(), props.event);
	},
	wrapperDisplayName: "showBookLink"
});

export const showManageLink = connectedAuthWrapper({
	authenticatedSelector: (state, props) => {
		if (props.event === undefined) return true;
		return P.manageEvent(state.get("User").toJS(), props.event);
	},
	wrapperDisplayName: "showManageLink"
});