import React from 'react'
import { connect } from 'react-redux'
//import { Link  } from 'react-router'


//import event from '../../events'
import BookingForm from './form/bookingForm.js'
import ParticipantQuickList from './participantQuickList.js'
import { saveBooking, cancelBooking, updateCurrentBooking } from '../actions.js'


class EditPage extends React.Component {

	constructor(props) {
		super(props);

	}

	render() {

		const event = this.props.Event.toJS();
		const booking = this.props.Booking.toJS();
		
		return (<div>
			<div className="row" style={{ display: "flex" }}>
				<div className="col-sm-12 col-md-10">
					<h3>Booking for {event.Name}</h3>
					<div className="row">
						<BookingForm booking={booking} event={event} submit={this.props.saveBooking} cancel={this.props.cancelBooking} updateCurrentBooking={this.props.updateCurrentBooking} />
					</div>
				</div>
				<ParticipantQuickList booking={booking} />
			</div>
		</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	//let User = state.get("User");
	const Event = props.Event;
	const CurrentBooking = state.getIn(["Bookings","currentBooking"])

	const Booking = (CurrentBooking ? CurrentBooking.get("id") : null) == props.Booking.get("id") ? CurrentBooking : props.Booking
	
	return { Booking, Event }
}

const mapDispatchToProps = { saveBooking, cancelBooking, updateCurrentBooking };

var VisibleEditPage = connect(
	mapStateToProps,
	mapDispatchToProps
)(EditPage);

export default VisibleEditPage;