import React from 'react'
import { connect } from 'react-redux'
import { Link  } from 'react-router'
import Moment from 'moment'


import EventForm from './eventForm.js'
import { createEventCheck } from '../permission.js'
import { createEvent } from '../actions.js'

class CreatePage extends React.Component{
	
	constructor(props) {
      super(props);

	  this.saveEvent = this.saveEvent.bind(this);
    }

	saveEvent(e) {
		this.props.createEvent(e);
	}

	render() {
		//const data = this.props.user.toObject();

		let event = {
			id:null,
			Name:'',
			Description:'',
			StartDate:Moment().format("YYYY-MM-DD"),
			EndDate:Moment().format("YYYY-MM-DD"),
			BookingDeadline:Moment().format("YYYY-MM-DD"),
			AllowGuestBookings:false
		}

		return(
			<div>
				<div className="row">
					<div className="col-sm-12">
						<h3>New Event</h3>
					</div>
				</div>
				<div className="row">
					<EventForm event={event} new={true} saveEvent={this.saveEvent}/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  //var Events = state.getIn(["Data","Events"]);
 // return {Events};
 return {}
}

const mapDispatchToProps = {createEvent};

var VisibleCreatePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(createEventCheck(CreatePage));

export default VisibleCreatePage;