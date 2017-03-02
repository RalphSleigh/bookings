import { UserAuthWrapper } from 'redux-auth-wrapper'

import * as P from '../../shared/permissions.js'

export const editEventCheck = UserAuthWrapper({
	authSelector: (state, props) => {

		return { user: state.get("User"), event: state.getIn(["Events", props.params.eventId]) }
	},
	predicate: (data) => {
		if (data.event === undefined) return true;
		return P.editEvent(data.user.toJS(), data.event.toJS());
	},
	failureRedirectPath: "/user",
	wrapperDisplayName: "Edit Event Check"
});

export const createEventCheck = UserAuthWrapper({
	authSelector: (state, props) => {

		return state.get("User")
	},
	predicate: (data) => {

		return P.createEvent(data.toJS());
	},
	failureRedirectPath: "/user",
	wrapperDisplayName: "Create Event Check"
});

export const showEditLink = UserAuthWrapper({
	authSelector: (state, props) => {

		return { user: state.get("User"), event: props.event }
	},
	predicate: (data) => {
		return P.editEvent(data.user.toJS(), data.event);
	},
	FailureComponent: null,
	propMapper: ({ redirect, authData, isAuthenticating, failureRedirectPath, event, ...otherProps }) => ({ ...otherProps }),
	wrapperDisplayName: "showEventEditLink"
});

export const showCreateLink = UserAuthWrapper({
	authSelector: (state) => {
		return state.get("User")
	},
	predicate: (data) => {
		return P.createEvent(data.toJS());
	},
	FailureComponent: null,
	propMapper: ({ redirect, authData, isAuthenticating, failureRedirectPath, event, ...otherProps }) => ({ ...otherProps }),
	wrapperDisplayName: "showEventCreateLink"
});

export const showBookLink = UserAuthWrapper({
	authSelector: (state, props) => {
		return { user: state.get("User"), event: props.event };
	},
	predicate: (data) => {
		return P.bookEvent(data.user.toJS(), data.event);
	},
	FailureComponent: null,
	propMapper: ({ redirect, authData, isAuthenticating, failureRedirectPath, event, ...otherProps }) => ({ ...otherProps }),
	wrapperDisplayName: "showBookLink"
});

export const showManageLink = UserAuthWrapper({
	authSelector: (state, props) => {

		return { user: state.get("User"), event: props.event }
	},
	predicate: (data) => {
		if (data.event === undefined) return true;
		return P.manageEvent(data.user.toJS(), data.event);
	},
	FailureComponent: null,
	propMapper: ({ redirect, authData, isAuthenticating, failureRedirectPath, event, ...otherProps }) => ({ ...otherProps }),
	wrapperDisplayName: "showManageLink"
});