import React from 'react'
import BookingUserDetails from './BookingUserDetails.js'
import ParticipantForm from './participantsForm.js'
import PermissionForm from './permissionForm.js'

//this is a massive component that handles the state of the booking form.
export default class BookingForm extends React.Component {

	constructor(props) {
    	super(props);
	
		this.guest = props.user.id === 1;

		if(this.props.booking === undefined) {
			//new booking, create blank data
		
			this.state = {
							user: {	name: this.guest? '' : props.user.userName,
		  							email: this.guest? '' : props.user.email,
					 				phone:''},
							participants: [blankParticipant(),blankParticipant()],
							permission:false,
							eventId: this.props.event.id
						 };
		} else {
			//set state from the booking infomation passed.
			this.state = {
							user: {	name: 	this.props.booking.userName,
		  							email: 	this.props.booking.userEmail,
					 				phone:	this.props.booking.userContact},
							participants: this.props.booking.participants,
							permission:true,
							eventId: this.props.booking.eventId,
							id: this.props.booking.id
						 };
		}

		this.props.updateQuickList(this.state.participants.map(p => {return {name:p.name, age: p.age}}));

		this.updateUserDetails = this.updateUserDetails.bind(this);
		this.updateParticipantDetails = this.updateParticipantDetails.bind(this);
		this.addParticipant = this.addParticipant.bind(this);
		this.updatePermission = this.updatePermission.bind(this);
		this.submit = this.submit.bind(this);
	}


	updateUserDetails(item, value) {
		let user = this.state.user;
		user[item] = value;
		this.setState({user:user});
	}

	updateParticipantDetails(key, item, value) {
		let participants = this.state.participants;
		participants[key][item] = value;
		this.setState({participants:participants});
		this.props.updateQuickList(participants.map(p => {return {name:p.name, age: p.age}}));
	}

	addParticipant() {
		let participants = this.state.participants;
		participants.push(blankParticipant());
		this.setState({participants:participants});
	}

	updatePermission() {
		this.setState({permission:!this.state.permission});
	}

	submit(e) {
		
		this.props.submit(this.state);
		e.preventDefault();
	}

	render() {
		return(<div>
			<div className="col-sm-12">
				<h3>Your Details</h3>
				<p>Please include a contact number we can use during the event</p>
			</div>
			<BookingUserDetails user={this.state.user} update={this.updateUserDetails} guest={this.guest}/>
			<div className="col-sm-12">
				<h3>Participants</h3>
				<p>Please fill out for every person attending (including yourself if applicable)</p>
			</div>
			<ParticipantForm participants={this.state.participants} update={this.updateParticipantDetails} add={this.addParticipant}/>
			<div className="col-sm-12">
				<h3>Permission</h3>
			</div>
			<PermissionForm event={this.props.event} check={this.state.permission} update={this.updatePermission}/>
			<div className="col-sm-12">
				<h3>Submit</h3>
				<p>When you have finished click here to sumbit your booking. You can always come back and edit it before the deadline</p>
				<button className="btn btn-success" onClick={this.submit}>Submit Booking</button>
			</div>
		</div>)
	}
}

//bad bad bad should be based on model.
const blankParticipant = () => ({
	name:'',
	age:'',
	diet:'',
	dietExtra:'',
	medical:''
});