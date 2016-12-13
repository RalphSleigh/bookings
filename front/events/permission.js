import { UserAuthWrapper } from 'redux-auth-wrapper'

import * as P from '../../shared/permissions.js'

export const editEventCheck = UserAuthWrapper({
	authSelector: (state, props) => {

		return {user: state.get("User"), event: state.getIn(["Events",props.params.eventId])}
	},
	predicate: (data) => {
		if(data.event === undefined)return true;
		return P.editEvent(data.user.toJS(), data.event.toJS());
	},
	failureRedirectPath:"/user",
	wrapperDisplayName: "Edit Event Check"
});

export const showEditLink = UserAuthWrapper({
	authSelector: (state, props) => {

		return {user: state.get("User"), event: props.event}
	},
	predicate: (data) => {
		return P.editEvent(data.user.toJS(), data.event);
	},
	FailureComponent: null,
	wrapperDisplayName: "showEventLink"
});