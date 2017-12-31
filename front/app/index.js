import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import messages from '../messages'
import user from '../user'
import events from '../events'
import bookings from '../bookings'

import { withRouter } from 'react-router-dom';

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.getUser();
		this.props.getEvents();
		this.props.getUserBookings();
	}

    componentWillReceiveProps(nextProps) { //refresh bookings/events if we log in/out
        if (this.props.User !== null && this.props.User !== nextProps.User) {
            this.props.getUserBookings();
            this.props.getEvents(); //need to drop the detailed event models if present
        }
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
                <messages.messages/>
				{this.props.children}
			</div>
		);
	}
}

//store.dispatch(user.actions.getUser());

const mapStateToProps = (state) => {
    let User = state.getIn(["User", "user"]);
    let Events = state.getIn(["Events", "events"]);
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

export default withRouter(VisibleApp);


