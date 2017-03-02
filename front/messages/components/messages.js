import React from 'react'
import { connect } from 'react-redux'

class Messages extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const data = this.props.Messages.toObject();

		if (data.success && new Date().getTime() - data.success.time.getTime() < 10000) var success = <div className="alert alert-success">{data.success.message}</div>
		if (data.warning && new Date().getTime() - data.warning.time.getTime() < 10000) var warning = <div className="alert alert-warning">{data.warning.message}</div>

		if (!success && !warning) return null;

		return (
			<div className="row">
				<div className="col-md-12">
					{success}
					{warning}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	var Messages = state.get("Messages")
	return { Messages };
}
/*
const mapDispatchToProps = (dispatch) => {
  return {
    doLogin:(credentials) => dispatch(doLogin(credentials))
  }
}
*/

const mapDispatchToProps = {};

var VisibleMessages = connect(
	mapStateToProps,
	mapDispatchToProps
)(Messages);

export default VisibleMessages;