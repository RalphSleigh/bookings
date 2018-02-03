import React from 'react'
import {connect} from 'react-redux'

import BookingForm from './form/bookingForm.js'
import ParticipantQuickList from './participantQuickList.js'
import {saveBooking, cancelBooking, updateCurrentBooking} from '../actions.js'
import {editBookingCheck} from '../permission.js'
import {bookIntoOrganisation} from "../../../shared/permissions";

import {
    Row,
    Col,
} from 'reactstrap';

class EditPage extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        const event = this.props.Event.toJS();
        const booking = this.props.Booking.toJS();
        const user = this.props.User.toJS();

        const organisations = event.organisations.filter(o => bookIntoOrganisation(user, event, booking, o));


        return (<Row>
            <Col xs={12} sm={12} md={10}>
                <h3>Booking for {event.name}</h3>
                <BookingForm user={user}
                             booking={booking}
                             event={event}
                             organisations={organisations}
                             submit={this.props.saveBooking}
                             cancel={this.props.cancelBooking}
                             updateCurrentBooking={this.props.updateCurrentBooking}/>
            </Col>
            <ParticipantQuickList booking={booking}/>
        </Row>);
    }
}

const mapStateToProps = (state, props) => {
    const User = state.getIn(["User", "user"]);
    let Booking = state.getIn(["Bookings", "bookings", parseInt(props.match.params.bookingId)]);
    const Event = state.getIn(["Events", "events", Booking.get("eventId")]);
    const CurrentBooking = state.getIn(["Bookings", "currentBooking"]);

    Booking = (CurrentBooking ? CurrentBooking.get("id") : null) === Booking.get("id") ? CurrentBooking : Booking;

    return {User, Booking, Event}
};

const mapDispatchToProps = {saveBooking, cancelBooking, updateCurrentBooking};

const VisibleEditPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditPage);

export default editBookingCheck(VisibleEditPage);