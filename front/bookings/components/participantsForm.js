import React from 'react'

export default class ParticipantsForm extends React.Component {

	constructor(props) {
      super(props);


	  this.add= this.add.bind(this);
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

	render() {

		let rows = this.props.participants.map((p,k) => <ParticipantRow key={k} {...p} update={this.update(k)}/>)

		return(<div>
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

	return(<div className="col-sm-12 participantrow">
		<form className="form-horizontal">
  			<div className="form-group">
				<label className="col-sm-3 control-label">Name:</label>
				<div className="col-sm-3">
      					<input type="text" value={props.name} onChange={props.update("name")} className="form-control" placeholder="Name"/>
    			</div>
				<label className="col-sm-1 control-label">Age:</label>
				<div className="col-sm-2">
      					<input type="text" value={props.age} onChange={props.update("age")} className="form-control" placeholder="Age"/>
    			</div>
				<label className="col-sm-1 control-label">Diet:</label>
				<div className="col-sm-2">
					<select value={props.diet} onChange={props.update("diet")} className="form-control">
 						<option>Please Select</option>
  						<option name="omnivore">Omnivore</option>
						<option name="vegetarian">Vegetarian</option>
  						<option name="vegan">Vegan</option>
					</select>
    			</div>
  			</div>
		</form>	  
		<form className="form-horizontal">
			<div className="form-group">
				<label className="col-sm-3 control-label">Additional dietry infomation or allergies:</label>
				<div className="col-sm-9">
					<textarea value={props.dietExtra} onChange={props.update("dietExtra")} className="form-control" rows="2" ></textarea>
    			</div>
  			</div>
			<div className="form-group">
				<label className="col-sm-3 control-label">Additional medical infomation &amp; medication taken:</label>
				<div className="col-sm-9">
					<textarea className="form-control" value={props.medical} onChange={props.update("medical")} rows="2" ></textarea>
    			</div>
  			</div>
		</form>
	</div>)
}