import React from 'react'
import { connect } from 'react-redux'

//import bookings from '../bookings'
//import { manageEventCheck } from '../permission.js'

//this component sits at the root of our management pages and ensures all the booking infomation for the event is loaded. This will include other peoples bookings so  we need to check we have permission to view them.


class OverviewPage extends React.Component {
	
  constructor(props) {
    super(props);
  }
  
  	/*
	componentWillMount() {
		this.props.getEventBookings(this.props.params.eventId);
	}
	*/

  render() {
	return <p>overview</p>
  }
}

//store.dispatch(user.actions.getUser());

const mapStateToProps = (state, props) => {

  let Event = state.getIn(["Events",props.params.eventId]);
  let Bookings = state.getIn(["Bookings","bookings"]).filter(b => b.get("eventId") === Event.get("id"));
  return {Event, Bookings};
}

const mapDispatchToProps = {
};

var VisibleOverviewPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(OverviewPage);

export default VisibleOverviewPage;


