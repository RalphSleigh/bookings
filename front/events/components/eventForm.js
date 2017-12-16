import React from 'react'
import Moment from 'moment'
import Switch from 'react-toggle'
import update from 'immutability-helper';
import map from 'lodash/map'
import fee from '../../fee'
import attendance from '../../attendance'
import OrgansationForm from './organisationForm.js'
import cloneDeep from "lodash/cloneDeep";



export default class EditForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {};
		this.state.event = this.props.event;
		this.state.delete = false;

		this.state.event.bookingPolicy = this.state.event.bookingPolicy || 'guest';
		this.state.event.partialDates = this.state.event.partialDates || 'whole';
		this.state.event.organisations = this.state.event.organisations || [];

		this.update = this.update.bind(this);
		this.updateData = this.updateData.bind(this);
		this.updateChecked = this.updateChecked.bind(this);
		this.updatePaymentOptions = this.updatePaymentOptions.bind(this);

		this.clickRevert = this.clickRevert.bind(this);
		this.clickDeleteLock = this.clickDeleteLock.bind(this);
		this.clickDelete = this.clickDelete.bind(this);
		this.clickSave = this.clickSave.bind(this);
	}

	update(item) {
		return e => {
			this.setState(update(this.state, { event: { [item]: { $set: e.target.value } } }));
		}
	}

	updateData(item) {
		return data => {
			this.setState(update(this.state, { event: { [item]: { $set: data } } }));
		}
	}

	updateChecked(item) {
		return e => {
			this.setState(update(this.state, { event: { [item]: { $set: e.target.checked } } }));
		}
	}

	updatePaymentOptions(e) {
		this.setState(update(this.state, { event: { paymentTypes: { $set: e.target.value.split("\n") } } }));
	}

	clickRevert(e) {
		this.setState(this.props.event);
		e.preventDefault();
	}

	clickDeleteLock(e) {
		this.setState({ delete: !this.state.delete });
		e.preventDefault();
	}

	clickDelete(e) {
		this.props.deleteEvent({ id: this.props.event.id });
		e.preventDefault();
	}

	clickSave(e) {
        const state = cloneDeep(this.state.event);
        state.organisations = state.organisations.map(o => {
            if (typeof o.id === "string") delete o.id;
            return o;
        }); //remove temp ids
        this.props.saveEvent(state);
		e.preventDefault();
	}

	render() {

		const feeOptions = map(fee, f => <option value={f.name} key={f.name + "key"}>{f.selection}</option>);
		const attendanceOptions = map(attendance, a => <option value={a.name} key={a.name + "key"}>{a.selection}</option>);

		const FeeConfig = fee[this.state.event.feeModel].Config;

		const AttendanceConfig = attendance[this.state.event.partialDates].Config;

        let attendanceFields = null;

        if (this.state.event.partialDates !== 'whole') attendanceFields = (<div className="form-group">
			<label className="col-sm-2 control-label">Attendance Options:</label>
			<div className="col-sm-10">
				<AttendanceConfig data={this.state.event.partialDatesData} update={this.updateData('partialDatesData')} />
			</div>
        </div>);
		let paymentFields = null;
		let feeOptionFields = null;

		if (this.state.event.feeModel !== "free") {

			feeOptionFields = (<div className="form-group">
				<label className="col-sm-2 control-label">Fee Options:</label>
				<div className="col-sm-10">
					<FeeConfig fee={this.state.event.feeData} update={this.updateData('feeData')} />
				</div>
            </div>);

            const options = this.state.event.paymentTypes.join("\n");
			paymentFields = (<div>
				<div className="form-group">
					<label className="col-sm-2 control-label">Payment Options:</label>
					<div className="col-sm-10">
						<textarea className="form-control" rows="5" value={options} onChange={this.updatePaymentOptions}></textarea>
					</div>
				</div>
				<div className="form-group">
					<label className="col-sm-2 control-label">Payment Instructions:</label>
					<div className="col-sm-10">
						<textarea className="form-control" rows="5" value={this.state.event.paymentInfo} onChange={this.update("paymentInfo")}></textarea>
					</div>
				</div>
			</div>)
		}

        let organisationForm = this.state.event.organisationsEnabled ?
			<div className="form-group">
				<label className="col-sm-2 control-label">Organisations:</label>
				<div className="col-sm-10">
					<OrgansationForm orgs={this.state.event.organisations} update={this.updateData('organisations')} />
				</div>
			</div>
			: null;

		let deleteButtons = this.props.new ? null : [<button key="deletelock" type="submit" disabled={!this.state.delete} onClick={this.clickDelete} className="btn btn-danger pull-right">Delete</button>,
		<button key="delete" type="submit" className="btn btn-danger pull-right" onClick={this.clickDeleteLock}><span className="glyphicon glyphicon-lock" aria-hidden="true"></span></button>];

		return (<div className="col-sm-12">
			<form className="form-horizontal">
				<div className="form-group">
					<label className="col-sm-2 control-label">Name:</label>
					<div className="col-sm-10">
						<input type="text" className="form-control" placeholder="Name" value={this.state.event.name} onChange={this.update("name")} />
					</div>
				</div>
				<div className="form-group">
					<label className="col-sm-2 control-label">Description:</label>
					<div className="col-sm-10">
						<textarea className="form-control" rows="5" value={this.state.event.description} onChange={this.update("description")}></textarea>
					</div>
				</div>
				<div className="form-group">
					<label className="col-sm-2 control-label">Start date:</label>
					<div className="col-sm-10">
						<input type="date" className="form-control" value={Moment(this.state.event.startDate).format("YYYY-MM-DD")} onChange={this.update("startDate")} />
					</div>
				</div>
				<div className="form-group">
					<label className="col-sm-2 control-label">End date:</label>
					<div className="col-sm-10">
						<input type="date" className="form-control" value={Moment(this.state.event.endDate).format("YYYY-MM-DD")} onChange={this.update("endDate")} />
					</div>
				</div>

				<div className="form-group">
					<label className="col-sm-2 control-label">Booking Deadline:</label>
					<div className="col-sm-10">
						<input type="date" className="form-control" value={Moment(this.state.event.bookingDeadline).format("YYYY-MM-DD")} onChange={this.update("bookingDeadline")} />
					</div>
				</div>

				<div className="form-group">
					<label className="col-sm-2 control-label">Booking Policy:</label>
					<div className="col-sm-10">
						<select value={this.state.event.bookingPolicy} onChange={this.update('bookingPolicy')} className="form-control">
							<option value={'guest'} key={'guest'}>Guest</option>
							<option value={'registered'} key={'registered'}>Registered</option>
							<option value={'approved'} key={'approved'}>Approved</option>
						</select>
					</div>
				</div>

				<div className="form-group">
					<label className="col-sm-2 control-label">Ask for Group/District:</label>
					<div className="col-sm-10">
						<Switch checked={!!this.state.event.requireDistrict} onChange={this.updateChecked('requireDistrict')} />
					</div>
				</div>

				<div className="form-group">
					<label className="col-sm-2 control-label">Enable Organisations</label>
					<div className="col-sm-10">
						<Switch checked={!!this.state.event.organisationsEnabled} onChange={this.updateChecked('organisationsEnabled')} />
					</div>
				</div>
				{organisationForm}
				<div className="form-group">
					<label className="col-sm-2 control-label">Attendance Policy:</label>
					<div className="col-sm-10">
						<select value={this.state.event.partialDates} onChange={this.update('partialDates')} className="form-control">
							{attendanceOptions}
						</select>
					</div>
				</div>
				{attendanceFields}
				<div className="form-group">
					<label className="col-sm-2 control-label">Fee Structure:</label>
					<div className="col-sm-10">
						<select value={this.state.event.feeModel} onChange={this.update('feeModel')} className="form-control">
							{feeOptions}
						</select>
					</div>
				</div>
				{feeOptionFields}
				{paymentFields}
				<div className="form-group">
					<div className="col-sm-offset-2 col-sm-10">
						<div className="btn-toolbar">
							<button type="submit" className="btn btn-success" onClick={this.clickSave}>Save</button>
							<button type="submit" className="btn btn-warning" onClick={this.clickRevert}>Revert</button>

							{deleteButtons}
						</div>
					</div>
				</div>
			</form>
		</div>)
	}
}