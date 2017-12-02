import React from 'react'
import BookingUserDetails from './bookingUserDetails.js'
import ParticipantForm from './participantsForm.js'
import PermissionForm from './permissionForm.js'
import FeeForm from './feeForm.js'
import PaymentForm from './paymentForm.js'
import cloneDeep from 'lodash/cloneDeep'
import update from 'immutability-helper';

//this is a massive component that handles the state of the booking form.

export default class BookingForm extends React.Component {

	constructor(props) {
		super(props);

		this.guest = props.user && props.user.id === 1;

		this.state = {
			permission: false,
			new: this.props.booking.id ? false : true,
			deleteLock: true,
			validation: {
				user: false,
				participant: false,
				payment: false,
				permission: false
			}
		};

		this.updateItem = this.updateItem.bind(this)
		//this.updateUserDetails = this.updateUserDetails.bind(this);
		this.updateParticipantDetails = this.updateParticipantDetails.bind(this);
		//this.updateEmergency = this.updateEmergency.bind(this);
		//this.updateNote = this.updateNote.bind(this);
		this.addParticipant = this.addParticipant.bind(this);
		this.deleteParticipant = this.deleteParticipant.bind(this);
		//this.updatePaymentType = this.updatePaymentType.bind(this);
		//this.updatePermission = this.updatePermission.bind(this);
		this.clickDeleteLock = this.clickDeleteLock.bind(this);
		this.clickDelete = this.clickDelete.bind(this);
		this.submit = this.submit.bind(this);
	}

	componentWillMount() {
	}

	updateItem(item, value) {
		//magic
		this.props.updateCurrentBooking(update(this.props.booking, { [item]: { $set: value } }))
	}

	/*
	updateUserDetails(item, value) {
		this.props.update(update(this.props.booking, { booking: { user: { [item]: { $set: value } } } })) //magic?
		//let user = this.state.booking.user;
		//user[item] = value;
		//this.setState({user:user});
	}

	updateEmergency(item, value) {
		this.setState(update(this.state, { booking: { emergency: { [item]: { $set: value } } } })) //magic?
		//let user = this.state.booking.user;
		//user[item] = value;
		//this.setState({user:user});
	}

	updateNote(value) {
		this.setState(update(this.state, { booking: { note: { $set: value } } } ))
	}
	*/

	updateParticipantDetails(id, item, value) {
		let participants = this.props.booking.participants;
		//const validation = this.state.validation;
		//validation.user = true; //start validating user section

		const participant = participants.find(p => p.id === id);
		participant[item] = value;
		this.props.updateCurrentBooking(update(this.props.booking, { participants: { $set: participants } }));
	}

	addParticipant() {

		//let participants = this.state.participants;
		//participants.push(blankParticipant());
		//this.setState({participants:participants});
		this.props.updateCurrentBooking(update(this.props.booking,  { participants: { $push: [blankParticipant()] } } ));

	}

	deleteParticipant(id) {
		let participants = this.props.booking.participants;
		participants = participants.filter(p => p.id != id);
		this.props.updateCurrentBooking(update(this.props.booking, { participants: { $set: participants } } ));
	}

    /*
	updatePaymentType(type) {

		//const validation = this.state.validation;
		//validation.user = true;
		//validation.participants = true; //start validating user and participants section
		//this.setState({paymentType:type,validation:validation});
		this.setState(update(this.state, { booking: { paymentType: { $set: type } }, validation: { user: { $set: true }, participants: { $set: true } } }));
	}
	

	updatePermission() {

		const validation = this.state.validation;
		validation.user = true;
		validation.participants = true;
		validation.payment = true;
		validation.permission = true; //start validating everything section

		this.setState({ permission: !this.state.permission, validation: validation });
	}
	*/

	submit(e) {
		const state = cloneDeep(this.props.booking);
		state.participants = state.participants.map(p => {
			if (typeof p.id === "string") delete p.id;
			return p;
		}) //remove temp ids from new participants 

		this.props.submit(state, this.state.new);
		e.preventDefault();
	}

	clickDeleteLock(e) {
		this.setState({ deleteLock: !this.state.deleteLock });
		e.preventDefault();
	}

	clickDelete(e) {
		this.props.cancel(this.props.booking.id);
		e.preventDefault();
	}

	//validate the booking state and return an array of errors for display, validation is also carried out in indvidual bits of the form,, hopefully they agree. 
	validateBooking() {
		const results = [];

		if (!this.props.booking.userName || this.props.booking.userName === "") results.push("Please fill in your name");
		if (!this.props.booking.userEmail ||this.props.booking.userEmail === "") results.push("Please fill in your e-mail address");
		if (!this.props.booking.userContact || this.props.booking.userContact === "") results.push("Please fill in your contact phone number");

		if (this.props.booking.participants) this.props.booking.participants.forEach((p, k) => {
			if (p.name === "") {
				results.push("Participant #" + (k + 1) + " does not have a name");
				return;
			}
			if (p.age === "") results.push("Please fill in the age for " + p.name);
			if (p.diet === "") results.push("Please choose a diet for " + p.name);
		});

		if (this.props.event.feeModel !== "free" && (!this.props.booking.paymentType || this.props.booking.paymentType === "")) results.push("Please choose a payment option");

		if (!this.props.booking.emergencyName || this.props.booking.emergencyName === "") results.push("Please provide an emergency contact name");
		if (!this.props.booking.emergencyPhone || this.props.booking.emergencyPhone === "") results.push("Please provide an emergency contact phone number");

		if (!this.props.booking.permission) results.push("Please tick the permission checkbox");

		return results;
	}

	render() {

		const validationMessages = this.validateBooking();

		const deleteButtons = this.state.new ? null : [<button key="deletelock" type="submit" disabled={this.state.deleteLock} onClick={this.clickDelete} className="btn btn-danger pull-right">Cancel Booking</button>,
		<button key="delete" type="submit" className="btn btn-danger pull-right" onClick={this.clickDeleteLock}><span className="glyphicon glyphicon-lock" aria-hidden="true"></span></button>];

		const userDetails = { userName: this.props.booking.userName, userEmail: this.props.booking.userEmail, userContact: this.props.booking.userContact }
		const permissionDetails = { emergencyName: this.props.booking.emergencyName, 
									emergencyPhone: this.props.booking.emergencyPhone, 
									note: this.props.booking.note, 
									permission: this.props.booking.permission }

		return (<div>
			<div className="col-sm-12">
				<h3>Your Details</h3>
				<p>We will use these if we need to get in touch</p>
			</div>
			<BookingUserDetails 
				update={this.updateItem}
				guest={this.guest}
				validating={this.state.validation.user} {...userDetails}/>
			<div className="col-sm-12">
				<h3>Participants</h3>
				<p>Please fill out for every person attending (including yourself if applicable)</p>
			</div>
			<ParticipantForm participants={this.props.booking.participants} update={this.updateParticipantDetails} add={this.addParticipant} delete={this.deleteParticipant} validating={this.state.validation.participants} />
			<div className="col-sm-12">
				<h3>Money</h3>
			</div>
			<FeeForm event={this.props.event} participants={this.props.booking.participants} />
			{this.props.event.feeModel === "free" ? null : <PaymentForm update={this.updateItem} event={this.props.event} chosen={this.props.booking.paymentType} validating={this.state.validation.payment} />}
			<div className="col-sm-12">
				<h3>Responsibility</h3>
			</div>
			<PermissionForm event={this.props.event} update={this.updateItem} validating={this.state.validation.permission} {...permissionDetails}/>
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
	if (props.errors.length === 0) return null;

	const items = props.errors.map(e => <li key={e}>{e}</li>);

	return (<div className="panel panel-warning">
		<div className="panel-heading">Still to do:</div>
		<ul>{items}</ul>
	</div>);
}

//bad bad bad should be based on model.
let tempkey = 0;

function blankParticipant() {
	return {
	id: 'Temp' + tempkey++, //need a key for react to render the participant array
	name: '',
	age: '',
	diet: '',
	dietExtra: '',
	medical: ''
	}
}



