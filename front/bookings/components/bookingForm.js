import React from 'react'
import BookingUserDetails from './BookingUserDetails.js'
import ParticipantForm from './participantsForm.js'
import PermissionForm from './permissionForm.js'
import FeeForm from './feeForm.js' 
import PaymentForm from './paymentForm.js' 
import _ from 'lodash'

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
							paymentType:"",
							permission:false,
							eventId: this.props.event.id,
							delete:false,
							validation:{user:false,
										participant:false,
										payment:false,
										permission:false,}
						 };
		} else {
			//set state from the booking infomation passed.
			this.state = {
							user: {	name: 	this.props.booking.userName,
		  							email: 	this.props.booking.userEmail,
					 				phone:	this.props.booking.userContact},
							participants: this.props.booking.participants,
							permission:true,
							paymentType:this.props.booking.paymentType,
							eventId: this.props.booking.eventId,
							id: this.props.booking.id,
							delete:false,
							validation:{user:true,
										participant:true,
										payment:true,
										permission:true,}
						 };
		}

		this.props.updateQuickList(this.state.participants.map(p => {return {name:p.name, age: p.age}}));

		this.updateUserDetails = this.updateUserDetails.bind(this);
		this.updateParticipantDetails = this.updateParticipantDetails.bind(this);
		this.addParticipant = this.addParticipant.bind(this);
		this.deleteParticipant = this.deleteParticipant.bind(this);
		this.updatePaymentType = this.updatePaymentType.bind(this);
		this.updatePermission = this.updatePermission.bind(this);
		this.clickDeleteLock = this.clickDeleteLock.bind(this);
		this.submit = this.submit.bind(this);
	}


	updateUserDetails(item, value) {
		let user = this.state.user;
		user[item] = value;
		this.setState({user:user});
	}

	updateParticipantDetails(id, item, value) {
		let participants = this.state.participants;
		const validation = this.state.validation;
		validation.user = true; //start validating user section

		const participant = participants.find(p => p.id === id);
		participant[item] = value;
		this.setState({participants:participants, validation:validation});
		this.props.updateQuickList(participants.map(p => {return {name:p.name, age: p.age}}));
	}

	addParticipant() {

		let participants = this.state.participants;
		participants.push(blankParticipant());
		this.setState({participants:participants});
	}

	deleteParticipant(id) {
		let participants = this.state.participants;
		participants = participants.filter(p => p.id != id);
		this.setState({participants:participants});
		this.props.updateQuickList(participants.map(p => {return {name:p.name, age: p.age}}));
	}

	updatePaymentType(type) {

		const validation = this.state.validation;
		validation.user = true;
		validation.participants = true; //start validating user and participants section
		this.setState({paymentType:type,validation:validation});
	}

	updatePermission() {

		const validation = this.state.validation;
		validation.user = true;
		validation.participants = true;
		validation.payment = true;
		validation.permission = true; //start validating everything section

		this.setState({permission:!this.state.permission, validation:validation});
	}

	submit(e) {
		const state = _.cloneDeep(this.state);
		state.participants = state.participants.map(p => {
			if(typeof p.id === "string")delete p.id;
			return p;
		})

		this.props.submit(state);
		e.preventDefault();
	}

	clickDeleteLock(e) {
		this.setState({delete:!this.state.delete});
		e.preventDefault();
	}

	clickDelete(e) {
		this.props.deleteEvent();
		e.preventDefault();
	}

	render() {

		let deleteButtons = this.props.new ? null : [<button key="deletelock" type="submit" disabled={!this.state.delete} onClick={this.clickDelete} className="btn btn-danger pull-right">Cancel Booking</button>,
								 <button key="delete" type="submit" className="btn btn-danger pull-right" onClick={this.clickDeleteLock}><span className="glyphicon glyphicon-lock" aria-hidden="true"></span></button>];


		return(<div>
			<div className="col-sm-12">
				<h3>Your Details</h3>
				<p>Please include a contact number we can use during the event</p>
			</div>
			<BookingUserDetails user={this.state.user} update={this.updateUserDetails} guest={this.guest} validating={this.state.validation.user}/>
			<div className="col-sm-12">
				<h3>Participants</h3>
				<p>Please fill out for every person attending (including yourself if applicable)</p>
			</div>
	<ParticipantForm participants={this.state.participants} update={this.updateParticipantDetails} add={this.addParticipant} delete={this.deleteParticipant} validating={this.state.validation.participants}/>
			<div className="col-sm-12">
				<h3>Money</h3>
			</div>
			<FeeForm event={this.props.event} participants={this.state.participants}/>
			<PaymentForm update={this.updatePaymentType} event={this.props.event} chosen={this.state.paymentType} validating={this.state.validation.user}/>
			<div className="col-sm-12">
				<h3>Permission</h3>
			</div>
			<PermissionForm event={this.props.event} check={this.state.permission} update={this.updatePermission}/>
			<div className="col-sm-12">
				<h3>Submit</h3>
				<p>When you have finished click here to sumbit your booking. You can always come back and edit it before the deadline</p>
				<div className="btn-toolbar">
     				<button className="btn btn-success" onClick={this.submit}>Submit Booking</button>	
					{deleteButtons}
				</div>
			</div>
		</div>)
	}
}

//bad bad bad should be based on model.

let tempkey =0;

const blankParticipant = () => ({
	id:'Temp'+tempkey++, //need a key for react to render the participant array
	name:'',
	age:'',
	diet:'',
	dietExtra:'',
	medical:''
});