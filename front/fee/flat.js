import React from 'react'
//This event has a flat per participant cost.

export const name = "flat";
export const selection = "Flat fee per participant";

export class Config extends React.Component {

	constructor(props) {
		super(props);

		this.update = this.update.bind(this);
	}

	update(e) {
		const fee = { amount: e.target.value }
		this.props.update(fee);
	}

	render() {

		const amount = this.props.fee.amount || "";

		return (<div className="row">
			<div className="form-group">
				<label className="col-sm-2 control-label">Fee per participant:</label>
				<div className="col-sm-10">
					<div className="input-group">
						<span className="input-group-addon">£</span>
						<input type="number" className="form-control" placeholder="35" value={amount} onChange={this.update} />
					</div>
				</div>
			</div>
		</div>)

	}
}

export class BookingForm extends React.Component {

	render() {

		const participants = this.props.participants ? this.props.participants.length : 0
		const total = this.props.feeData.amount *  participants

		return (<div>
			<p>This event costs £{this.props.feeData.amount} per person.</p>
			<p>You have booked <b>{participants}</b> people for a total of <b>£{total}</b></p>
		</div>)
	}
}