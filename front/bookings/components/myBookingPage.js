import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'


import event from '../../events'
import BookingForm from './form/bookingForm.js'
import ParticipantQuickList from './participantQuickList.js'
import { updateQuickList, createBooking, getUserBookings, saveBooking, cancelBooking, updateCurrentBooking } from '../actions.js'

//this is the special case where we are doing the sessions own booking for the event. If we have previously booked then edit that instead of letting them create a new one.  

//TODO: do we have permission?

class MyBookingPage extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const event = this.props.Event.toJS();
		const user = this.props.User.toJS();
		const booking = this.props.Booking.toJS ? this.props.Booking.toJS() : this.props.Booking;

		const form =
			<BookingForm user={user} event={event} booking={booking} submit={booking.id ? (booking) => this.props.saveBooking(booking, true) : this.props.createBooking} updateCurrentBooking={this.props.updateCurrentBooking} cancel={this.props.cancelBooking} />;

		return (<div>
			<div className="row" style={{ display: "flex" }}>
				<div className="col-sm-12 col-md-10">
					<h3>Booking for {event.name}</h3>
					<div className="row">
						{form}
					</div>
				</div>
				<ParticipantQuickList booking={booking} />
			</div>
		</div>
			)
	}
}

const mapStateToProps = (state, props) => {
				let User = state.get("User");
	let Event = state.getIn(["Events", props.params.eventId.toString()]);

	//find the booking, sources:
	//1) currentBooking if set,
	//2) Pre-exising booking in the bookings map
	//3) Booking in localstorage
	//4) empty booking

	const Bookings = state.get("Bookings");

	const currentBooking = Bookings.get("currentBooking");

	const userId = currentBooking ? currentBooking.get("userId") : null;

	const userIdvalid = userId == 1 || userId == User.get("id");

	let Booking = (userIdvalid ? Bookings.get("currentBooking") : null ) ||
		state.getIn(["Bookings", "bookings"]).find(b => b.get("userId") === User.get("id") && b.get("eventId") === Event.get("id")) || 
		(localStorage.currentBooking ? JSON.parse(localStorage.currentBooking) : false) ||
		emptyBooking(User, Event);

	return {User, Event, Booking}
}

const emptyBooking = (User, Event) => {
	return {
		eventId: Event.get("id"),
		userName: User.get("id") == 1 ? '' : User.get("userName"),
		userEmail: User.get("id") == 1 ? '' : User.get("email"),
		participants:[{id:"TEMP"}]
	}
}

const getEvent = event.actions.getEvent
const mapDispatchToProps = {getEvent, updateQuickList, createBooking, getUserBookings, saveBooking, cancelBooking, updateCurrentBooking };

const VisibleMyBookingPage = connect(
	mapStateToProps,
	mapDispatchToProps
)(MyBookingPage);

export default VisibleMyBookingPage;