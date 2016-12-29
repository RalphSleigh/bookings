import React from 'react'
import { connect } from 'react-redux'

import bookings from '../../bookings'
import { manageEventCheck } from '../permission.js'

//this component sits at the root of our management pages and ensures all the booking infomation for the event is loaded. This will include other peoples bookings so  we need to check we have permission to view them.


class ManageLoader extends React.Component {
	
  constructor(props) {
    super(props);
  }
 
	componentWillMount() {
		this.props.getEventBookings(this.props.params.eventId);
	}

  render() {

	//prevent render until we have the data available.
	if(this.props.Events === null || this.props.Bookings === null) return <div>Loading Data</div>;

    return this.props.children

  }
}


//we could still have no bookings..
const mapStateToProps = (state, props) => {

  let Event = state.getIn(["Events",props.params.eventId]);
  let Bookings = state.getIn(["Bookings","bookings"]).filter(b => b.get("eventId") === Event.get("id"));
  return {Event, Bookings};
}

const mapDispatchToProps = {
		getEventBookings:bookings.actions.getEventBookings
};

var VisibleManageLoader = connect(
  mapStateToProps,
  mapDispatchToProps
)(manageEventCheck(ManageLoader));

export default VisibleManageLoader;


