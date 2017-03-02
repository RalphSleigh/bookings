import React from 'react'

export default class PermissionForm extends React.Component {

	constructor(props) {
		super(props);

		this.updatePermission = this.updatePermission.bind(this);
	}

	updatePermission(e) {
		this.props.update();
	}

	render() {
		return (<div className="col-sm-12">
			<form className="form-horizontal">
				<div className="form-group">
					<div className="checkbox col-sm-11 col-sm-offset-1">
						<label>
							<input type="checkbox" checked={this.props.check} onChange={this.updatePermission} />I give permission for the people named above to attend {this.props.event.Name}
						</label>
					</div>
				</div>
			</form>
		</div>
		)
	}
}