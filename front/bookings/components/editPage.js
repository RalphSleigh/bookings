import React from 'react'
import { connect } from 'react-redux'
//import { Link  } from 'react-router'


//import event from '../../events'
import BookingForm from './form/bookingForm.js'
import ParticipantQuickList from './participantQuickList.js'
import { updateQuickList, saveBooking, cancelBooking } from '../actions.js'


class EditPage extends React.Component{
	
	constructor(props) {
      super(props);

	}

	render() {
		
		const event = this.props.Event.toJS();
		const booking = this.props.Booking.toJS();
		//const user = this.props.User.toJS();
		const quickList = this.props.QuickList.toJS();
		//const data = this.props.user.toObject();
		return(<div> 
					<div className="row" style={{display:"flex"}}>
						<div className="col-sm-12 col-md-10">
							<h3>Booking for {event.Name}</h3>
							<div className="row">
								<BookingForm booking={booking} event={event} submit={this.props.saveBooking} updateQuickList={this.props.updateQuickList} cancel={this.props.cancelBooking}/>
							</div>
						</div>
						<ParticipantQuickList quickList={quickList}/>		
					</div>
				</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	//let User = state.get("User");
	const QuickList = state.getIn(["Bookings","quickList"]);
	const Event =  props.Event;
	const Booking = props.Booking
	return {QuickList, Booking, Event}
}

const mapDispatchToProps = {updateQuickList, saveBooking, cancelBooking };

var VisibleEditPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPage);

export default VisibleEditPage;