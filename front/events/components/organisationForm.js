import React from 'react'
import update from 'immutability-helper';

let orgkey = 0;

export default class OrganisationForm extends React.Component {

	constructor(props) {
		super(props);

		this.update = this.update.bind(this)
		this.delete = this.delete.bind(this)
		this.add = this.add.bind(this)

		this.state = {};
		this.state.orgs = this.props.orgs || [{ id: 'TEMP' }]
	}

	componentWillReceiveProps(nextProps) {
		this.setState(update(this.state, { orgs: { $set: (nextProps.orgs || [{ id: 'TEMP' }]) } }))
	}

	update(id) {
		return e => {
			const org = this.state.orgs.find(o => o.id === id);
			org.name = e.target.value
			this.props.update(this.state.orgs)
			e.preventDefault()
		}
	}

	delete(id) {
		return e => {
			const orgs = this.state.orgs.filter(o => o.id !== id);
			this.props.update(orgs)
			e.preventDefault()
		}
	}

	add(e) {
		this.state.orgs.push({ id: "temp" + orgkey })
		orgkey++
		this.props.update(this.state.orgs)
		e.preventDefault()
	}

	render() {
		const orgRows = this.state.orgs.map(o => <OrgRow key={o.id} org={o} update={this.update} delete={this.delete} />)

		return <div className="row">
			{orgRows}
			<div className="form-group">
				<div className="col-sm-12">
					<div className="btn-toolbar">
						<button type="submit" className="btn btn-success" onClick={this.add}>Add</button>
					</div>
				</div>
			</div>
		</div>

	}
}

const OrgRow = props => <div className="col-sm-12">
	<div className="form-horizontal">
		<div className="form-group">
			<div>
				<div className="col-sm-11">
					<input type="text" value={props.org.name || ''} onChange={props.update(props.org.id)} className="form-control" placeholder="Organisation Name" />
				</div>
			</div>
			<div className="col-sm-1">
				<button type="submit" onClick={props.delete(props.org.id)} className="btn btn-warning"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
			</div>
		</div>
	</div>
</div>