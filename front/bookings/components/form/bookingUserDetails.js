import React from 'react'

export default class BookingUserDetails extends React.Component {

	constructor(props) {
		super(props);

		this.update = this.update.bind(this);
	}

	update(item) {
		return (e) => {
			this.props.update(item, e.target.value)
			e.preventDefault();
		}
	}

	render() {

		const valid = "form-group";
		const invalid = "form-group has-error";

		return (<div className="col-sm-12">
			<form className="form-horizontal">
				<div className={this.props.validating ? this.props.userName === "" ? invalid : valid : valid}>
					<label className="col-sm-2 control-label">Your Name:</label>
					<div className="col-sm-10">
						<input type="text" className="form-control" placeholder="Name" disabled={!this.props.guest} value={this.props.userName || ''} onChange={this.update("userName")} />
					</div>
				</div>
				<div className={this.props.validating ? this.props.userEmail === "" ? invalid : valid : valid}>
					<label className="col-sm-2 control-label">Your e-mail:</label>
					<div className="col-sm-10">
						<input type="e-mail" className="form-control" placeholder="e-mail" disabled={!this.props.guest} value={this.props.userEmail} onChange={this.update("userEmail")} />
					</div>
				</div>
				<div className={this.props.validating ? this.props.userContact === "" ? invalid : valid : valid}>
					<label className="col-sm-2 control-label">Phone Number:</label>
					<div className="col-sm-10">
						<input type="tel" className="form-control" placeholder="Phone" value={this.props.userContact || ''} onChange={this.update("userContact")} />
					</div>
				</div>
			</form>
		</div>


		)
	}
}