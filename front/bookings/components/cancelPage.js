import React from 'react'
//import { connect } from 'react-redux'
//import { Link  } from 'react-router'
//import { browserHistory } from 'react-router'

//import event from '../../events'

//confirmation page for booking cancallation


class CancelPage extends React.Component{
	
	constructor(props) {
      super(props); 
	}

	

	render() {
		return(<div> 
					<div className="row">
						<div className="col-sm-12">
							<h3>Your booking has been cancelled</h3>
							<p>You may book again if you reconsider</p>
						</div>	
					</div>
				</div>
		)
	}
}

//const ParticipantRow = props => <tr><td>{props.name}</td><td>{props.age}</td><td>{props.diet}</td></tr>

//const mapStateToProps = (state, props) => {
	/*
	let User = state.get("User");
	let Event = state.getIn(["Events", props.params.eventId.toString()]);
	let Booking = state.getIn(["Bookings","bookings"]).find(b => b.get("userId") === User.get("id") && b.get("eventId") === Event.get("id"));
	return {User, Event, Booking}
	*/
//	return {}
//}

export default CancelPage;