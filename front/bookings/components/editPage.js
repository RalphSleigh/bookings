import React from 'react'
import { connect } from 'react-redux'
import { Link  } from 'react-router'


import event from '../../events'
import BookingForm from './bookingForm.js'
import ParticipantQuickList from './participantQuickList.js'
import { updateQuickList, getBooking } from '../actions.js'


class EditPage extends React.Component{
	
	constructor(props) {
      super(props);

	}

	render() {
		
		if(this.props.Event === undefined)return null;

		const event = this.props.Event.toJS();
		const booking = this.props.Booking.toJS();
		const user = this.props.User.toJS();
		const quickList = this.props.QuickList.toJS();
		//const data = this.props.user.toObject();
		return(<div> 
					<div className="row" style={{display:"flex"}}>
						<div className="col-sm-12 col-md-10">
							<h3>Booking for {event.Name}</h3>
							<div className="row">
								<BookingForm user={user} booking={booking} event={event} submit={this.props.createBooking} updateQuickList={this.props.updateQuickList}/>
							</div>
						</div>
						<ParticipantQuickList quickList={quickList}/>		
					</div>
				</div>
		)
	}

	
	componentWillMount() { //messy, really need a proper data preload component
		if(this.props.Booking === undefined)this.props.getBooking(this.props.params.bookingId);
  	}
}

const mapStateToProps = (state, props) => {
	let User = state.get("User");
	let Booking = state.getIn(["Bookings","bookings", props.params.bookingId]);
  	let Event = Booking !== undefined ? state.getIn(["Events", Booking.get("eventId").toString()]) : undefined;
	let QuickList = state.getIn(["Bookings","quickList"]);
	return {User, Booking, Event, QuickList}
}

const getEvent = event.actions.getEvent
const mapDispatchToProps = {getEvent, updateQuickList, getBooking};

var VisibleEditPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPage);

export default VisibleEditPage;