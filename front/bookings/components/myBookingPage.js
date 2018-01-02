import React from 'react'
import {connect} from 'react-redux'


import event from '../../events'
import BookingForm from './form/bookingForm.js'
import ParticipantQuickList from './participantQuickList.js'
import {
    updateQuickList,
    createBooking,
    getUserBookings,
    saveBooking,
    cancelBooking,
    updateCurrentBooking
} from '../actions.js'

import {bookEventCheck} from '../permission.js'
import {bookIntoOrganisation} from '../../../shared/permissions.js'
import Moment from "moment/moment";


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
        const organisations = event.organisations.filter(o => bookIntoOrganisation(user, event, booking, o));


        const form =
            <BookingForm user={user}
                         event={event}
                         booking={booking}
                         organisations={organisations}
                         submit={booking.id ? (booking) => this.props.saveBooking(booking, true) : this.props.createBooking}
                         updateCurrentBooking={this.props.updateCurrentBooking} cancel={this.props.cancelBooking}/>;

        return (<div>
                <div className="row" style={{display: "flex"}}>
                    <div className="col-sm-12 col-md-10">
                        <h3>Booking for {event.name}</h3>
                        <div className="row">
                            {form}
                        </div>
                    </div>
                    <ParticipantQuickList booking={booking}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const eventId = parseInt(props.match.params.eventId)
    let User = state.getIn(["User", "user"]);
    let Event = state.getIn(["Events", "events", eventId]);

    //find the booking, sources:
    //1) currentBooking if set and for this user/event,
    //2) Pre-existing booking in the bookings map
    //3) Booking in localstorage
    //4) empty booking

    const Bookings = state.get("Bookings");

    let currentBooking = Bookings.get("currentBooking");

    if (currentBooking && (currentBooking.get("eventId") !== Event.get("id") || currentBooking.get("userId") !== User.get("id"))) currentBooking = null;

    const existingBooking = state.getIn(["Bookings", "bookings"]).find(b => b.get("userId") === User.get("id") && b.get("eventId") === Event.get("id"))

    const localStorageData = localStorage.currentBooking ? JSON.parse(localStorage.currentBooking) : false;

    const localBooking = (localStorageData &&
        (localStorageData.eventId === Event.get("id")) &&
        (localStorageData.userId === User.get("id"))) ? localStorageData : false;

    let Booking = currentBooking || existingBooking || localBooking || emptyBooking(User, Event);

    return {User, Event, Booking}
};

const emptyBooking = (User, Event) => {
    const booking = {
        userId: User.get("id"),
        eventId: Event.get("id"),
        userName: User.get("id") === 1 ? '' : User.get("userName"),
        userEmail: User.get("id") === 1 ? '' : User.get("email") ? User.get("email") : '',
        participants: [{
            id: "TEMP",
            days: 2 ** (Moment(Event.get('endDate')).diff(Moment(Event.get('startDate')), 'days') + 1) - 1
        }]
    };
    if (Event.get("organisationsEnabled")) booking.organisationId = Event.getIn(['organisations', 0, 'id']);
    return booking;
};

const getEvent = event.actions.getEvent;
const mapDispatchToProps = {
    getEvent,
    updateQuickList,
    createBooking,
    getUserBookings,
    saveBooking,
    cancelBooking,
    updateCurrentBooking
};

const VisibleMyBookingPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyBookingPage);

export default bookEventCheck(VisibleMyBookingPage);