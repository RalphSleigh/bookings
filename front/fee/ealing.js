import React from 'react'
//this implements Ealing's camp pricing policy.

export const name = "ealing";
export const selection = "Ealing Pricing Policy";

export class Config extends React.Component {

	constructor(props) {
      super(props);

	  this.update = this.update.bind(this);
    }

	update(e) {
		const fee = {amount:parseFloat(e.target.value)}
		this.props.onChange(fee);
	}

	render() {
		//Thou shalt not ever use JS numbers for currency...
		const amount = this.props.fee.amount || 35;

		return(<div className="row">
			<div className="col-sm-12">
				<table className="table">
					<thead>
						<tr>
							<th></th>
							<th>Standard Rates</th>
							<th>Discounted Rates</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Unaccompanied Elfins, Pioneers &amp; Venturers</td>
							<td>£{Math.round(amount*1.5)}</td>
							<td>£{Math.round(amount*0.75)}</td>
						</tr>
						<tr>
							<td>Elfins, Pioneers &amp; Venturers accompanied by a responsible adult, DFs and Adults</td>
							<td>
								<div className="input-group">
									<span className="input-group-addon">£</span>
									<input type="number" className="form-control" placeholder="35" value={amount} onChange={this.update}/>
								</div>
							</td>
							<td>£{Math.round(amount*0.5)}</td>
						</tr>
					</tbody>
				</table>
  			</div>
		</div>)

	} 
}

export class BookingForm extends React.Component {

	render() {


		const accompanied = this.props.participants.find(p => parseInt(p.age) > 15) === undefined ? false : true;

		const amount = this.props.feeData.amount;
		
		const total = this.props.participants.length * Math.round(this.props.feeData.amount * (accompanied ? 1 : 1.5));
		const totalDiscounted = this.props.participants.length * Math.round(this.props.feeData.amount * (accompanied ? 0.5 : 0.75));

		return(<div className="col-sm-12">
			<table className="table">
					<thead>
						<tr>
							<th></th>
							<th>Suggested Donation</th>
							<th>Discounted Donation</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Unaccompanied Elfins, Pioneers &amp; Venturers</td>
							<td>£{Math.round(amount*1.5)}</td>
							<td>£{Math.round(amount*0.75)}</td>
						</tr>
						<tr>
							<td>Elfins, Pioneers &amp; Venturers accompanied by a responsible adult, DFs and Adults</td>
							<td>£{Math.round(amount)}</td>
							<td>£{Math.round(amount*0.5)}</td>
						</tr>
						<tr>
							<td><b>My Booking</b> ({this.props.participants.length} people, {accompanied ? "Accompanined" : "Unaccompanied"})</td>
							<td><b>£{total}</b></td>
							<td><b>£{totalDiscounted}</b></td>
						</tr>
					</tbody>
				</table>
				<p>In order for us to utilise Gift Aid the camp price has been changed to a suggested donation. If you have the means to donate more than the donations listed above then please do so as this will allow us to further subsidise poorer individuals and families. The <b>discounted donation</b> is offered to all families/individuals where there is no wage earner and/or the family/individual is on a low wage. This would include DFs and students as well as adults and families. Cost should never be a reason for people being unable to attend camp so please contact us if you need further discount. Please make cheques payable to Ealing District Woodcraft Folk.</p>
		</div>)
	}
}