import React from 'react'
import { connect } from 'react-redux'
//import { Link  } from 'react-router'


//import event from '../../events'
import BookingForm from './form/bookingForm.js'
import ParticipantQuickList from './participantQuickList.js'
import { saveBooking, cancelBooking, updateCurrentBooking } from '../actions.js'
import {bookEventCheck} from '../permission.js'
import {bookIntoOrganisation} from "../../../shared/permissions";


class EditPage extends React.Component {

	constructor(props) {
		super(props);

	}

	render() {

		const event = this.props.Event.toJS();
		const booking = this.props.Booking.toJS();
        const organisations = event.organisations;
		
		return (<div>
			<div className="row" style={{ display: "flex" }}>
				<div className="col-sm-12 col-md-10">
					<h3>Booking for {event.Name}</h3>
					<div className="row">
                        <BookingForm booking={booking}
                                     event={event}
                                     organisations={organisations}
                                     submit={this.props.saveBooking}
                                     cancel={this.props.cancelBooking}
                                     updateCurrentBooking={this.props.updateCurrentBooking}/>
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
    let Booking = state.getIn(["Bookings", "bookings", parseInt(props.match.params.bookingId)]);
    const Event = state.getIn(["Events", "events", Booking.get("eventId")]);
    const CurrentBooking = state.getIn(["Bookings", "currentBooking"]);

    Booking = (CurrentBooking ? CurrentBooking.get("id") : null) === Booking.get("id") ? CurrentBooking : Booking;
	
	return { Booking, Event }
};

const mapDispatchToProps = { saveBooking, cancelBooking, updateCurrentBooking };

const VisibleEditPage = connect(
	mapStateToProps,
	mapDispatchToProps
)(EditPage);

export default bookEventCheck(VisibleEditPage);