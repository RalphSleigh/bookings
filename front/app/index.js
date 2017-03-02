import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import messages from '../messages'
import user from '../user'
import events from '../events'
import bookings from '../bookings'

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.getUser();
		this.props.getEvents();
		this.props.getUserBookings();
	}

	componentWillReceiveProps(nextProps) { //refresh bookings if wwe log in/out
		if (this.props.User !== null && this.props.User !== nextProps.User) this.props.getUserBookings();
	}

	render() {

		//prevent render until we have the basic data available, this makes child components much simpler.
		if (this.props.User === null || this.props.Events === null || this.props.Bookings === null) return <div>Loading Data</div>;


		return (
			<div className="container">
				<div className="row">
					<div className="col-md-9"><Link to="/" >Home</Link></div>
					<user.loginStatus />
				</div>
				<messages.messages routes={this.props.routes/*quick hack to rerender messages every time we change route*/} />
				{this.props.children}
			</div>
		);
	}
}

//store.dispatch(user.actions.getUser());

const mapStateToProps = (state) => {
	let User = state.get("User");
	let Events = state.get("Events");
	let Bookings = state.getIn(["Bookings", "bookings"])
	return { User, Events, Bookings };
}

const mapDispatchToProps = {
	getUser: user.actions.getUser,
	getEvents: events.actions.getEvents,
	getUserBookings: bookings.actions.getUserBookings
};

var VisibleApp = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

export default VisibleApp;


