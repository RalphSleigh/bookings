import React from 'react'
import ReactMarkdown from 'react-markdown'

export default class PaymentForm extends React.Component {

	constructor(props) {
		super(props);

		this.selectPaymentType = this.selectPaymentType.bind(this);
	}

	selectPaymentType(e) {

		this.props.update("paymentType", e.target.value);
	}

	render() {

		const valid = "form-group";
		const invalid = "form-group has-error";

		const radios = this.props.event.paymentTypes.map(p => <label key={p} className="radio-inline">
			<input type="radio" value={p} onChange={this.selectPaymentType} checked={this.props.chosen === p} /> {p}
		</label>)

		return (<div>
			<div className="col-sm-12">
				<form className="form-horizontal">
					<div className={this.props.validating ? this.props.chosen !== "" ? valid : invalid : valid}>
						<label className="col-sm-2 control-label">Payment Method:</label>
						<div className="col-sm-10">
							{radios}
						</div>
					</div>
				</form>
			</div>
			<div className="col-sm-12">
				<ReactMarkdown escapeHtml={true} source={this.props.event.paymentInfo} />
			</div>
		</div>
		)
	}
}