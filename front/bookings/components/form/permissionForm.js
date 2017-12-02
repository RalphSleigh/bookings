import React from 'react'

export default class PermissionForm extends React.Component {

	constructor(props) {
		super(props);

		this.updatePermission = this.updatePermission.bind(this);
		this.updateEmergency = this.updateEmergency.bind(this);
		this.updateNote = this.updateNote.bind(this);
	}

	updatePermission() {
		this.props.update('permission', this.props.permission ? false : true);
	}

	updateEmergency(item) {
		return (e) => {
			this.props.update(item, e.target.value)
			e.preventDefault();
		}
	}

	updateNote(e) {
		this.props.update('note', e.target.value);
		e.preventDefault();
	}

	render() {

		const valid = "form-group";
		const invalid = "form-group has-error";

		return (<div className="col-sm-12">
			<form className="form-horizontal">
				<div className="col-sm-12">
					<h4>Emergency Contact</h4>
					<p>Please provide details of someone we can contact in case of an emergency during the event (a second person is better even if you are not attending yourself)</p>
				</div>
				<div className={this.props.validating ? this.props.emergencyName === "" ? invalid : valid : valid}>
					<label className="col-sm-2 control-label">Name:</label>
					<div className="col-sm-10">
						<input type="text" className="form-control" placeholder="Name" value={this.props.emergencyName || ''} onChange={this.updateEmergency("emergencyName")} />
					</div>
				</div>
				<div className={this.props.validating ? this.props.emergencyPhone === "" ? invalid : valid : valid}>
					<label className="col-sm-2 control-label">Phone Number:</label>
					<div className="col-sm-10">
						<input type="text" className="form-control" placeholder="Name" value={this.props.emergencyPhone || ''} onChange={this.updateEmergency("emergencyPhone")} />
					</div>
				</div>
				<div className="col-sm-12">
					<h4>Additional infomation</h4>
				</div>
				<div className="form-group">
					<label className="col-sm-2 control-label">Anything else we need to know:<br /></label>
					<div className="col-sm-10">
						<textarea value={this.props.note || ''} onChange={this.updateNote} className="form-control" rows="2" ></textarea>
					</div>
				</div>
				<div className="col-sm-12">
					<h4>Permission</h4>
				</div>
				<div className="form-group">
					<div className="checkbox col-sm-11 col-sm-offset-1">
						<label>
							<input type="checkbox" checked={this.props.permission ? true : false} onChange={this.updatePermission} />I give permission for the people named above to attend {this.props.event.Name}
						</label>
					</div>
				</div>
			</form>
		</div>
		)
	}
}