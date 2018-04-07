import React from 'react'

import fee from '../../../../shared/fee'


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
            <BookingFeeForm event={this.props.event} feeData={this.props.event.feeData}
                            participants={this.props.participants} booking={this.props.booking}/>
		)
	}
}