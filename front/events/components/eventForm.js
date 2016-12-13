import React from 'react'
import Moment from 'moment'
import Switch from 'react-toggle'

export default class EditForm extends React.Component {

	constructor(props) {
      super(props);

      this.state = this.props.Event.toJS();
	  this.state.delete = false;

	  this.updateName = this.updateName.bind(this);
	  this.updateDescription = this.updateDescription.bind(this);
	  this.updateStartDate = this.updateStartDate.bind(this);
	  this.updateEndDate = this.updateEndDate.bind(this);
	  this.updateBookingDeadline = this.updateBookingDeadline.bind(this);

	  this.clickRevert = this.clickRevert.bind(this);
	  this.clickDeleteLock = this.clickDeleteLock.bind(this);
	  this.clickSave = this.clickSave.bind(this);
    }

	updateName(e) {
		this.setState({Name:e.target.value})
	}

	updateDescription(e) {
		this.setState({Description:e.target.value})
	}

	updateStartDate(e) {
		this.setState({StartDate:e.target.value})
	}

	updateEndDate(e) {
		this.setState({EndDate:e.target.value})
	}

	updateBookingDeadline(e) {
		this.setState({BookingDeadline:e.target.value})
	}

	clickRevert(e) {
		this.setState(this.props.Event.toJS());
		e.preventDefault();
	}

	clickDeleteLock(e) {
		this.setState({delete:!this.state.delete});
		e.preventDefault();
	}

	clickSave(e) {
		let event = {
			id:this.state.id,
			Name:this.state.Name,
			Description:this.state.Description,
			StartDate:this.state.StartDate,
			EndDate:this.state.EndDate,
			BookingDeadline:this.state.BookingDeadline,
			AllowGuestBookings:this.state.AllowGuestBookings
		}

		this.props.saveEvent(event);
		e.preventDefault();
	}

	render() {	

		return(<div className="col-sm-12">
				<form className="form-horizontal">
  					<div className="form-group">
						<label className="col-sm-2 control-label">Name:</label>
						 <div className="col-sm-10">
      						<input type="text" className="form-control" placeholder="Name" value={this.state.Name} onChange={this.updateName}/>
    					</div>
  					</div>
  					<div className="form-group">
    					<label className="col-sm-2 control-label">Description:</label>
    					<div className="col-sm-10">
     						<textarea className="form-control" rows="5" value={this.state.Description} onChange={this.updateDescription}></textarea>
    					</div>
  					</div>
  					<div className="form-group">
						<label className="col-sm-2 control-label">Start date:</label>
						 <div className="col-sm-10">
      						<input type="date" className="form-control" value={Moment(this.state.StartDate).format("YYYY-MM-DD")} onChange={this.updateStartDate}/>
    					</div>
  					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">End date:</label>
						 <div className="col-sm-10">
      						<input type="date" className="form-control" value={Moment(this.state.EndDate).format("YYYY-MM-DD")} onChange={this.updateEndDate}/>
    					</div>
  					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">Booking Deadline:</label>
						 <div className="col-sm-10">
      						<input type="date" className="form-control" value={Moment(this.state.BookingDeadline).format("YYYY-MM-DD")} onChange={this.updateBookingDeadline}/>
    					</div>
  					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">Allow Guest Bookings:</label>
						 <div className="col-sm-10">
      						<Switch checked={this.state.AllowGuestBookings} onChange={() => this.setState({AllowGuestBookings:!this.state.AllowGuestBookings})}  value='yes'/>
    					</div>
  					</div>
  					<div className="form-group">
  						<div className="col-sm-offset-2 col-sm-10">
						  	 <div className="btn-toolbar">
     						 	<button type="submit" className="btn btn-success" onClick={this.clickSave}>Save</button>
							 	<button type="submit" className="btn btn-warning" onClick={this.clickRevert}>Revert</button>
								
							 	<button type="submit" disabled={!this.state.delete} className="btn btn-danger pull-right">Delete</button>
								 <button type="submit" className="btn btn-danger pull-right" onClick={this.clickDeleteLock}><span className="glyphicon glyphicon-lock" aria-hidden="true"></span></button>
							</div>
    					</div>
  					</div>
				</form>
	</div>)
	}
}