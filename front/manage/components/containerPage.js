import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Immutable from 'immutable'
import { Route, Switch, NavLink } from 'react-router-dom';

import bookings from '../../bookings'
import { manageEventCheck } from '../permission.js'
import { togglePaid } from '../actions.js'

import BookingsTab from './bookings.js'
import ParticipantsTab from './participants.js'
import KpTab from './kp.js'




//this component sits at the root of our management pages and ensures all the booking infomation for the event is loaded. This will include other peoples bookings so  we need to check we have permission to view them.


class ManageContainerPage extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.getEventBookings(this.props.match.params.eventId);
	}

	render() {

		//prevent render until we have the data available.
		if (this.props.Events === null || this.props.Bookings === null) return <div>Loading Data</div>;


		const event = this.props.Event.toJS();
		//React.cloneElement(this.props.children, {myprop: this.route.myprop})

		return (<div className="row">
			<div className="col-sm-12">
				<h3>Report for {event.name}</h3>
				<ul className="nav nav-tabs">
					<CustomTab activeOnlyWhenExact to={"/event/" + this.props.match.params.eventId + "/manage"} label="Participants" />
					<CustomTab to={"/event/" + this.props.match.params.eventId + "/manage/bookings"} label="Bookings"/>
					<CustomTab to={"/event/" + this.props.match.params.eventId + "/manage/kp"} label="KP" />
				</ul>
				<Switch>
					<Route exact path="/event/:eventId/manage">
						<ParticipantsTab {...this.props} />
					</Route>
					<Route path="/event/:eventId/manage/participants">
						<ParticipantsTab {...this.props} />
					</Route>
					<Route path="/event/:eventId/manage/bookings">
						<BookingsTab {...this.props} />
					</Route>
					<Route path="/event/:eventId/manage/kp">
						<KpTab {...this.props} />
					</Route>
				</Switch>
			</div>
		</div>)
	}
}


//we could still have no bookings..
const mapStateToProps = (state, props) => {

	const Event = state.getIn(["Events", props.match.params.eventId]);
	const Bookings = state.getIn(["Bookings", "bookings"]).filter(b => b.get("eventId") === Event.get("id")).toList();
	const Participants = Bookings.reduce((r, b) => r.concat(b.get("participants")), Immutable.List());//just easier to do this here than find a plain javascript object map function
	return { Event, Bookings, Participants };
}

const mapDispatchToProps = {
	getEventBookings: bookings.actions.getEventBookings,
	togglePaid: togglePaid
};

var VisibleManageContainerPage = connect(
	mapStateToProps,
	mapDispatchToProps
)(manageEventCheck(ManageContainerPage));

export default VisibleManageContainerPage;

const CustomTab = ({ label, to, activeOnlyWhenExact}) => (
	<Route
		path={to}
		exact={activeOnlyWhenExact}
		children={({ match }) => (
			<li className={match ? "active" :  ""}>
				<Link to={to}>
					{label}
				</Link>
			</li>
		)}
	/>
);


