import React from 'react'

//import _ from 'lodash'
import fee from '../../../fee'


export default class FeeForm extends React.Component {

	constructor(props) {
		super(props);

		this.updatePermission = this.updatePermission.bind(this);
	}

	updatePermission(e) {
		this.props.update();
	}

	render() {

		const BookingFeeForm = fee[this.props.event.feeModel].BookingForm;

        return (
			<BookingFeeForm feeData={this.props.event.feeData} participants={this.props.participants} />
		)
	}
}