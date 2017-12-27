import React from 'react'
import BookingUserDetails from './bookingUserDetails.js'
import ParticipantForm from './participantsForm.js'
import PermissionForm from './permissionForm.js'
import FeeForm from './feeForm.js'
import PaymentForm from './paymentForm.js'
import cloneDeep from 'lodash/cloneDeep'
import update from 'immutability-helper';
import Moment from 'moment'

//this is a massive component that handles the state of the booking form.

export default class BookingForm extends React.Component {

    constructor(props) {
        super(props);

        this.guest = props.user && props.user.id === 1;

        this.state = {
            permission: false,
            new: !this.props.booking.id,
            deleteLock: true,
            validation: this.props.booking.id ? 4 : 0
        };

        this.updateItem = this.updateItem.bind(this);
        this.updateParticipantDetails = this.updateParticipantDetails.bind(this);
        this.addParticipant = this.addParticipant.bind(this);
        this.deleteParticipant = this.deleteParticipant.bind(this);
        this.clickDeleteLock = this.clickDeleteLock.bind(this);
        this.clickDelete = this.clickDelete.bind(this);
        this.submit = this.submit.bind(this);
        this.updateValidation = this.updateValidation.bind(this);
    }

    componentWillMount() {
    }

    updateItem(item, value) {
        //magic
        this.props.updateCurrentBooking(update(this.props.booking, {[item]: {$set: value}}))
    }

    updateParticipantDetails(id, item, value) {
        let participants = this.props.booking.participants;

        const participant = participants.find(p => p.id === id);
        participant[item] = value;
        this.props.updateCurrentBooking(update(this.props.booking, {participants: {$set: participants}}));
    }

    addParticipant() {

        this.props.updateCurrentBooking(update(this.props.booking, {participants: {$push: [blankParticipant(this.props.event)]}}));

    }

    deleteParticipant(id) {
        let participants = this.props.booking.participants;
        participants = participants.filter(p => p.id !== id);
        this.props.updateCurrentBooking(update(this.props.booking, {participants: {$set: participants}}));
    }

    submit(e) {
        const state = cloneDeep(this.props.booking);
        state.participants = state.participants.map(p => {
            if (typeof p.id === "string") delete p.id;
            return p;
        }); //remove temp ids from new participants

        this.props.submit(state, this.state.new);
        e.preventDefault();
    }

    clickDeleteLock(e) {
        this.setState({deleteLock: !this.state.deleteLock});
        e.preventDefault();
    }

    clickDelete(e) {
        this.props.cancel(this.props.booking.id);
        e.preventDefault();
    }

    //for a new booking we only trigger inline validations when the user has interacted with a subsequent section of the form.
    updateValidation(level) {
        return () => {
            if (level > this.state.validation) {
                this.setState(update(this.state, {validation: {$set: level}}));
                console.log("Validating level " + level);
            }
        };
    }

    //validate the booking state and return an array of errors for display, validation is also carried out in indvidual bits of the form,, hopefully they agree.
    validateBooking() {
        const results = [];

        if (empty(this.props.booking.userName)) results.push("Please fill in your name");
        if (empty(this.props.booking.userEmail)) results.push("Please fill in your e-mail address");
        if (empty(this.props.booking.userContact)) results.push("Please fill in your contact phone number");
        if (this.props.event.bigCampMode && empty(this.props.booking.district)) results.push("Please fill in your group/district");

        if (this.props.booking.participants) this.props.booking.participants.forEach((p, k) => {
            if (p.name === "") {
                results.push("Participant #" + (k + 1) + " does not have a name");
                return;
            }
            if (p.age === "") results.push("Please fill in the age for " + p.name);
            if (p.diet === "") results.push("Please choose a diet for " + p.name);
        });

        if (this.props.event.feeModel !== "free" && (!this.props.booking.paymentType || this.props.booking.paymentType === "")) results.push("Please choose a payment option");

        if (!this.props.event.bigCampMode && empty(this.props.booking.emergencyName)) results.push("Please provide an emergency contact name");
        if (!this.props.event.bigCampMode && empty(this.props.booking.emergencyPhone)) results.push("Please provide an emergency contact phone number");

        if (!this.props.booking.permission) results.push("Please tick the permission and data protection statement checkbox");

        return results;
    }

    render() {

        const validationMessages = this.validateBooking();

        const deleteButtons = this.state.new ? null : [<button key="deletelock" type="submit"
                                                               disabled={this.state.deleteLock}
                                                               onClick={this.clickDelete}
                                                               className="btn btn-danger pull-right">Cancel
            Booking</button>,
            <button key="delete" type="submit" className="btn btn-danger pull-right" onClick={this.clickDeleteLock}>
                <span className="glyphicon glyphicon-lock" aria-hidden="true"></span></button>];

        const userDetails = {
            userName: this.props.booking.userName,
            userEmail: this.props.booking.userEmail,
            userContact: this.props.booking.userContact,
            district: this.props.booking.district,
            organisationId: this.props.booking.organisationId
        };

        const permissionDetails = {
            emergencyName: this.props.booking.emergencyName,
            emergencyPhone: this.props.booking.emergencyPhone,
            note: this.props.booking.note,
            permission: this.props.booking.permission
        };

        return (<div>
            <div className="col-sm-12">
                <h3>Your Details</h3>
                <p>We will use these if we need to get in touch</p>
            </div>
            <BookingUserDetails
                event={this.props.event}
                organisations={this.props.organisations}
                update={this.updateItem}
                guest={this.guest}
                validating={this.state.validation > 0} {...userDetails}/>
            <div className="col-sm-12">
                <h3>Participants</h3>
                <p>Please fill out for every person attending (including yourself if applicable)</p>
            </div>
            <ParticipantForm participants={this.props.booking.participants}
                             event={this.props.event}
                             update={this.updateParticipantDetails}
                             add={this.addParticipant}
                             delete={this.deleteParticipant}
                             validating={this.state.validation > 1}
                             updateValidation={this.updateValidation(1)}/>
            <div className="col-sm-12">
                <h3>Money</h3>
            </div>
            <FeeForm event={this.props.event} participants={this.props.booking.participants}/>
            {this.props.event.feeModel === "free" ? null :
                <PaymentForm update={this.updateItem}
                             event={this.props.event}
                             chosen={this.props.booking.paymentType}
                             validating={this.state.validation > 2}
                             updateValidation={this.updateValidation(2)}/>}
            <div className="col-sm-12">
                <h3>Responsibility</h3>
            </div>
            <PermissionForm event={this.props.event}
                            update={this.updateItem}
                            validating={this.state.validation > 3}
                            {...permissionDetails}
                            updateValidation={this.updateValidation(4)}/>
            <div className="col-sm-12">
                <h3>Submit</h3>
                <p>When you have finished click here to submit your booking. You can always come back and edit it before
                    the deadline</p>
                <ValidationList errors={validationMessages}/>
                <div className="btn-toolbar">
                    <button disabled={validationMessages.length !== 0}
                            className="btn btn-success"
                            onClick={this.submit}>Submit Booking
                    </button>
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
};

function empty(value) {
    return !value || value === ""
}

//bad bad bad should be based on model.
let tempkey = 1000;

function blankParticipant(event) {
    return {
        id: 'Temp' + tempkey++, //need a key for react to render the participant array
        name: '',
        age: '',
        diet: '',
        dietExtra: '',
        medical: '',
        days: 2 ** (Moment(event.endDate).diff(Moment(event.startDate), 'days') + 1) - 1
    }
}



