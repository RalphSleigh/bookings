import React from 'react'


export default class ParticipantsForm extends React.Component {

	constructor(props) {
		super(props);

		this.add = this.add.bind(this);
	}

	add(e) {
		this.props.add();
		e.preventDefault();
	}

	//I hope you like curry
	update(k) {
		return item => e => {
			this.props.update(k, item, e.target.value)
			e.preventDefault();
		}
	}

	delete(k) {
		return (e) => {
			this.props.delete(k);
			e.preventDefault();
		}
	}

	render() {

		const participants = this.props.participants

		let rows = participants.map((p, k) => <ParticipantRow key={p.id} {...p} update={this.update(p.id)} delete={this.delete(p.id)} validating={this.props.validating} />)

		return (<div>
			<div className="col-sm-12">
				<div className="row participants">
					{rows}
				</div>
			</div><div className="col-sm-12 top15">
				<button className="btn btn-default" onClick={this.add}>More People!</button>
			</div>
		</div>
		)
	}
}

const ParticipantRow = (props) => {

	const valid = "";
	const invalid = "has-error";


	//{props.validating ? props.name === "" || props.age === "" || props.diet === "" ? invalid : valid : valid}

	return (<div className="col-sm-12 participantrow">
		<form className="form-horizontal">
			<div className="form-group">
				<div className={props.validating ? props.name === "" ? invalid : valid : valid}>
					<label className="col-sm-3 control-label">Name:</label>
					<div className="col-sm-3">
						<input type="text" value={props.name || ''} onChange={props.update("name")} className="form-control" placeholder="Name" />
					</div>
				</div>
				<div className={props.validating ? props.age === "" ? invalid : valid : valid}>
					<label className="col-sm-1 control-label">Age:</label>
					<div className="col-sm-1">
						<input type="text" value={props.age || ''} onChange={props.update("age")} className="form-control" placeholder="Age" />
					</div>
				</div>
				<div className={props.validating ? props.diet === "" ? invalid : valid : valid}>
					<label className="col-sm-1 control-label">Diet:</label>
					<div className="col-sm-2">
						<select value={props.diet || ''} onChange={props.update("diet")} className="form-control">
							<option>Please Select</option>
							<option value="omnivore">Omnivore</option>
							<option value="vegetarian">Vegetarian</option>
							<option value="vegan">Vegan</option>
						</select>
					</div>
				</div>
				<div className="col-sm-1">
					<button type="submit" onClick={props.delete} className="btn btn-warning"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
				</div>
			</div>
		</form>
		<form className="form-horizontal">
			<div className="form-group">
				<label className="col-sm-3 control-label">Additional dietry infomation or allergies:</label>
				<div className="col-sm-9">
					<textarea value={props.dietExtra || ''} onChange={props.update("dietExtra")} className="form-control" rows="2" ></textarea>
				</div>
			</div>
			<div className="form-group">
				<label className="col-sm-3 control-label">Additional medical infomation &amp; medication taken:</label>
				<div className="col-sm-9">
					<textarea className="form-control" value={props.medical || ''} onChange={props.update("medical")} rows="2" ></textarea>
				</div>
			</div>
		</form>
	</div>)
}