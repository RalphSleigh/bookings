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
							user: {	name: this.guest? '' : props.user.UserName,
		  							email: this.guest? '' : props.user.Email,
					 				phone:''},
							participants: [blankParticipant(),blankParticipant()],
							permission:false
						 }	
		} else {
			//set state from the booking infomation passed.

		}
		this.updateUserDetails = this.updateUserDetails.bind(this);
		this.updateParticipantDetails = this.updateParticipantDetails.bind(this);
		this.addParticipant = this.addParticipant.bind(this);
		this.updatePermission = this.updatePermission.bind(this);
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