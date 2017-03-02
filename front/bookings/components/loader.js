import React from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'

import { viewBookingCheck } from '../permission.js'
import { getBooking } from '../actions.js'


//load an indvidual booking so we can edit it, this will check we have permission to VIEW this booking.

class BookingLoader extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.getBooking(this.props.params.bookingId);
	}

	render() {

		//prevent render until we have the data available.
		if (this.props.Booking === undefined) return <div>Loading Data</div>;


		//const event = this.props.Event.toJS();
		//React.cloneElement(this.props.children, {myprop: this.route.myprop})

		return React.cloneElement(this.props.children, {
			Booking: this.props.Booking,
			Event: this.props.Event
		})
	}
}


const mapStateToProps = (state, props) => {

	const Booking = state.getIn(["Bookings", "bookings", props.params.bookingId])

	const Event = Booking ? state.getIn(["Events", Booking.get("eventId").toString()]) : undefined;
	//const Bookings = state.getIn(["Bookings","bookings"]).filter(b => b.get("eventId") === Event.get("id")).toList();
	//const Participants = Bookings.reduce((r, b) => r.concat(b.get("participants")), Immutable.List());//just easier to do this here than find a plain javascript object map function
	return { Booking, Event };
}

const mapDispatchToProps = {
	getBooking: getBooking,
};

var VisibleBookingLoader = connect(
	mapStateToProps,
	mapDispatchToProps
)(viewBookingCheck(BookingLoader));

export default VisibleBookingLoader;

