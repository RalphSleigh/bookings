import React from 'react'
import BookingUserDetails from './bookingUserDetails.js'
import ParticipantForm from './participantsForm.js'
import PermissionForm from './permissionForm.js'
import FeeForm from './feeForm.js' 
import PaymentForm from './paymentForm.js' 
import _ from 'lodash'
import update from 'immutability-helper';

//this is a massive component that handles the state of the booking form.
//involves alot of magic, we should probably give up and hoist its internal state into the redux store.
export default class BookingForm extends React.Component {

	constructor(props) {
	super(props);
	
		this.guest = props.user && props.user.id === 1;

		if(this.props.booking === null) {
			//new booking, create blank data
		
			this.state = {
							booking: {
								user: {	
									name: this.guest? '' : props.user.userName,
									email: this.guest? '' : props.user.email,
									phone:''},
								participants: [blankParticipant(),blankParticipant()],
								paymentType:"",
								eventId: this.props.event.id},
							permission:false,
							new:true,
							deleteLock:true,
							validation:{user:false,
										participant:false,
										payment:false,
										permission:false}
						};
		} else {
			//set state from the booking infomation passed in the booking prop.
			this.state = {
							booking: {
								user: {	
									name: 	this.props.booking.userName,
									email: 	this.props.booking.userEmail,
									phone:	this.props.booking.userContact},
								participants: this.props.booking.participants,
								paymentType:this.props.booking.paymentType,
								eventId: this.props.booking.eventId,
								id: this.props.booking.id},
							permission:true,
							new:false,
							deleteLock:true,
							validation:{user:true,
										participant:true,
										payment:true,
										permission:true}
									};
		}

		this.updateUserDetails = this.updateUserDetails.bind(this);
		this.updateParticipantDetails = this.updateParticipantDetails.bind(this);
		this.addParticipant = this.addParticipant.bind(this);
		this.deleteParticipant = this.deleteParticipant.bind(this);
		this.updatePaymentType = this.updatePaymentType.bind(this);
		this.updatePermission = this.updatePermission.bind(this);
		this.clickDeleteLock = this.clickDeleteLock.bind(this);
		this.clickDelete = this.clickDelete.bind(this);
		this.submit = this.submit.bind(this);
	}

	componentWillMount() {
		this.props.updateQuickList(this.state.booking.participants.filter(p => p.name !== "" && p.age !== "").map(p => {return {name:p.name, age: p.age}}));
	}

	updateUserDetails(item, value) {
		this.setState(update(this.state, {booking:{user:{[item]:{$set:value}}}})) //magic?
		//let user = this.state.booking.user;
		//user[item] = value;
		//this.setState({user:user});
	}

	updateParticipantDetails(id, item, value) {
		let participants = this.state.booking.participants;
		//const validation = this.state.validation;
		//validation.user = true; //start validating user section

		const participant = participants.find(p => p.id === id);
		participant[item] = value;
		this.setState(update(this.state,{booking:{participants:{$set:participants}},validation:{user:{$set:true}}}));
		this.props.updateQuickList(participants.filter(p => p.name !== "" && p.age !== "").map(p => {return {name:p.name, age: p.age}}));
	}

	addParticipant() {

		//let participants = this.state.participants;
		//participants.push(blankParticipant());
		//this.setState({participants:participants});
		this.setState(update(this.state,{booking:{participants:{$push:[blankParticipant()]}}}));
		
	}

	deleteParticipant(id) {
		let participants = this.state.booking.participants;
		participants = participants.filter(p => p.id != id);
		this.setState(update(this.state,{booking:{participants:{$set:participants}},validation:{user:{$set:true}}}));
		this.props.updateQuickList(participants.filter(p => p.name !== "" && p.age !== "").map(p => {return {name:p.name, age: p.age}}));
	}

	updatePaymentType(type) {

		//const validation = this.state.validation;
		//validation.user = true;
		//validation.participants = true; //start validating user and participants section
		//this.setState({paymentType:type,validation:validation});
		this.setState(update(this.state,{booking:{paymentType:{$set:type}},validation:{user:{$set:true},participants:{$set:true}}}));
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
		const state = _.cloneDeep(this.state.booking);
		state.participants = state.participants.map(p => {
			if(typeof p.id === "string")delete p.id;
			return p;
		}) //remove temp ids from new participants 

		this.props.submit(state, this.props.user ? true : false);
		e.preventDefault();
	}

	clickDeleteLock(e) {
		this.setState({deleteLock:!this.state.deleteLock});
		e.preventDefault();
	}

	clickDelete(e) {
		this.props.cancel(this.props.booking.id);
		e.preventDefault();
	}

	//validate the booking state and return an array of errors for display, validation is also carried out in indvidual bits of the form,, hopefully they agree. 
	validateBooking() {
		const results = [];

		if(this.state.booking.user.name === "")results.push("Please fill in your name");
		if(this.state.booking.user.email === "")results.push("Please fill in your e-mail address");
		if(this.state.booking.user.phone === "")results.push("Please provide a contact phone number");

		this.state.booking.participants.forEach((p,k) => {
			if(p.name === ""){
				results.push("Participant #"+(k+1)+" does not have a name");
				return;
			}
			if(p.age === "")results.push("Please fill in the age for "+p.name);
			if(p.diet === "")results.push("Please choose a diet for "+p.name);
		});

		if(this.props.event.feeModel !== "free" && this.state.booking.paymentType === "")results.push("Please choose a payment option");

		if(this.state.permission === false)results.push("Please tick the permission checkbox");

		return results;
	}

	render() {

		const validationMessages = this.validateBooking();

		const deleteButtons = this.props.new ? null : [<button key="deletelock" type="submit" disabled={this.state.deleteLock} onClick={this.clickDelete} className="btn btn-danger pull-right">Cancel Booking</button>,
		<button key="delete" type="submit" className="btn btn-danger pull-right" onClick={this.clickDeleteLock}><span className="glyphicon glyphicon-lock" aria-hidden="true"></span></button>];


		return(<div>
			<div className="col-sm-12">
				<h3>Your Details</h3>
				<p>Please include a contact number we can use during the event</p>
			</div>
			<BookingUserDetails user={this.state.booking.user} update={this.updateUserDetails} guest={this.guest} validating={this.state.validation.user}/>
			<div className="col-sm-12">
				<h3>Participants</h3>
				<p>Please fill out for every person attending (including yourself if applicable)</p>
			</div>
			<ParticipantForm participants={this.state.booking.participants} update={this.updateParticipantDetails} add={this.addParticipant} delete={this.deleteParticipant} validating={this.state.validation.participants}/>
			<div className="col-sm-12">
				<h3>Money</h3>
			</div>
			<FeeForm event={this.props.event} participants={this.state.booking.participants}/>
			{this.props.event.feeModel === "free" ? null : <PaymentForm update={this.updatePaymentType} event={this.props.event} chosen={this.state.booking.paymentType} validating={this.state.validation.payment}/>}
			<div className="col-sm-12">
				<h3>Permission</h3>
			</div>
			<PermissionForm event={this.props.event} check={this.state.permission} update={this.updatePermission} validating={this.state.validation.permission}/>
			<div className="col-sm-12">
				<h3>Submit</h3>
				<p>When you have finished click here to sumbit your booking. You can always come back and edit it before the deadline</p>
				<ValidationList errors={validationMessages} />
				<div className="btn-toolbar">
					<button disabled={validationMessages.length !== 0} className="btn btn-success" onClick={this.submit}>Submit Booking</button>	
					{this.state.new ? null : deleteButtons}
				</div>
			</div>
		</div>)
	}
}

const ValidationList = (props) => {
	if(props.errors.length === 0) return null;

	const items = props.errors.map(e => <li key={e}>{e}</li>);
	
	return(<div className="panel panel-warning">
		<div className="panel-heading">Errors</div>
		<ul>{items}</ul>
	</div>);
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