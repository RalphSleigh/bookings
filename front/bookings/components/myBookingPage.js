import React from 'react'
import { connect } from 'react-redux'
import { Link  } from 'react-router'


import event from '../../events'
import BookingForm from './bookingForm.js'
import ParticipantQuickList from './participantQuickList.js'
import { updateQuickList, createBooking, getUserBookings, saveBooking, cancelBooking } from '../actions.js'


//this is the special case where we are doing the sessions own booking for the event. If we have previously booked then edit that instead of letting them create a new one.  

class MyBookingPage extends React.Component{
	
	constructor(props) {
      super(props);

	}

	render() {

		const event = this.props.Event.toJS();
		const user = this.props.User.toJS();
		const quickList = this.props.QuickList.toJS();

		const form =
			<BookingForm user={user} event={event} booking=
			{this.props.Booking ? this.props.Booking.toJS() : null} submit={this.props.Booking ? this.props.saveBooking : this.props.createBooking} updateQuickList={this.props.updateQuickList} cancel={this.props.cancelBooking}/>;

		return(<div> 
					<div className="row" style={{display:"flex"}}>
						<div className="col-sm-12 col-md-10">
							<h3>Booking for {event.name}</h3>
							<div className="row">
								{form}
							</div>
						</div>
						<ParticipantQuickList quickList={quickList}/>		
					</div>
				</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	let User = state.get("User");
	let Event = state.getIn(["Events", props.params.eventId.toString()]);
	let Booking = state.getIn(["Bookings","bookings"]).find(b => b.get("userId") === User.get("id") && b.get("eventId") === Event.get("id"));
	let  QuickList = state.getIn(["Bookings","quickList"]);
	return {User, Event, Booking, QuickList}
}

const getEvent = event.actions.getEvent
const mapDispatchToProps = {getEvent, updateQuickList, createBooking, getUserBookings, saveBooking, cancelBooking};

const VisibleMyBookingPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyBookingPage);

export default VisibleMyBookingPage;