import React from 'react'
import Moment from 'moment'
import Switch from 'react-toggle'
import _ from 'lodash'
import fee from '../../fee'

export default class EditForm extends React.Component {

	constructor(props) {
      super(props);

      this.state = this.props.event;
	  this.state.delete = false;

	  this.update = this.update.bind(this);
	  this.updatePaymentOptions = this.updatePaymentOptions.bind(this);
	  this.updateFeeData = this.updateFeeData.bind(this);


	  this.clickRevert = this.clickRevert.bind(this);
	  this.clickDeleteLock = this.clickDeleteLock.bind(this);
	  this.clickDelete = this.clickDelete.bind(this);
	  this.clickSave = this.clickSave.bind(this);
    }

	update(item) {
		return e => {
			let newState = {};
			newState[item] = e.target.value;
			this.setState(newState);
		}
	}

	updateFeeData(data) {
		this.setState({feeData:data}) 
	}

	updatePaymentOptions(e) {
		this.setState({paymentTypes:e.target.value.split("\n")}) 
	}

	clickRevert(e) {
		this.setState(this.props.event);
		e.preventDefault();
	}

	clickDeleteLock(e) {
		this.setState({delete:!this.state.delete});
		e.preventDefault();
	}

	clickDelete(e) {
		this.props.deleteEvent({id:this.props.event.id});
		e.preventDefault();
	}

	clickSave(e) {
		let event = {
			id:this.state.id,
			name:this.state.name,
			description:this.state.description,
			startDate:this.state.startDate,
			endDate:this.state.endDate,
			bookingDeadline:this.state.bookingDeadline,
			allowGuestBookings:this.state.allowGuestBookings,
			feeModel:this.state.feeModel,
			feeData:this.state.feeData,
			paymentTypes:this.state.paymentTypes.filter(v => v !== ""),
			paymentInfo:this.state.paymentInfo
		}

		this.props.saveEvent(event);
		e.preventDefault();
	}

	render() {	

		const feeOptions = _.map(fee, f => <option value={f.name} key={f.name+"key"}>{f.selection}</option>);

		const FeeConfig = fee[this.state.feeModel].Config;

		let paymentFields = null;
		let feeOptionFields = null;

		if(this.state.feeModel !== "free") {

			feeOptionFields = (<div className="form-group">
								<label className="col-sm-2 control-label">Fee Options:</label>
						 		<div className="col-sm-10">
							 		 <FeeConfig fee={this.state.feeData} onChange={this.updateFeeData}/>
    							</div>
  								</div>)

			const options = this.state.paymentTypes.join("\n")
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
     								<textarea className="form-control" rows="5" value={this.state.paymentInfo} onChange={this.update("paymentInfo")}></textarea>
    							</div>
  							</div>
							</div>)
		}

		let deleteButtons = this.props.new ? null : [<button key="deletelock" type="submit" disabled={!this.state.delete} onClick={this.clickDelete} className="btn btn-danger pull-right">Delete</button>,
								 <button key="delete" type="submit" className="btn btn-danger pull-right" onClick={this.clickDeleteLock}><span className="glyphicon glyphicon-lock" aria-hidden="true"></span></button>];

		return(<div className="col-sm-12">
				<form className="form-horizontal">
  					<div className="form-group">
						<label className="col-sm-2 control-label">Name:</label>
						 <div className="col-sm-10">
      						<input type="text" className="form-control" placeholder="Name" value={this.state.name} onChange={this.update("name")}/>
    					</div>
  					</div>
  					<div className="form-group">
    					<label className="col-sm-2 control-label">Description:</label>
    					<div className="col-sm-10">
     						<textarea className="form-control" rows="5" value={this.state.description} onChange={this.update("description")}></textarea>
    					</div>
  					</div>
  					<div className="form-group">
						<label className="col-sm-2 control-label">Start date:</label>
						 <div className="col-sm-10">
      						<input type="date" className="form-control" value={Moment(this.state.startDate).format("YYYY-MM-DD")} onChange={this.update("startDate")}/>
    					</div>
  					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">End date:</label>
						 <div className="col-sm-10">
      						<input type="date" className="form-control" value={Moment(this.state.endDate).format("YYYY-MM-DD")} onChange={this.update("endDate")}/>
    					</div>
  					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">Booking Deadline:</label>
						 <div className="col-sm-10">
      						<input type="date" className="form-control" value={Moment(this.state.bookingDeadline).format("YYYY-MM-DD")} onChange={this.update("bookingDeadline")}/>
    					</div>
  					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">Allow Guest Bookings:</label>
						 <div className="col-sm-10">
      						<Switch checked={this.state.allowGuestBookings} onChange={() => this.setState({allowGuestBookings:!this.state.allowGuestBookings})}  value='yes'/>
    					</div>
  					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">Fee Structure:</label>
						 <div className="col-sm-10">
      						<select value={this.state.feeModel} onChange={this.update('feeModel')} className="form-control">
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