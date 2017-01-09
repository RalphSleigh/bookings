import React from 'react'
import { connect } from 'react-redux'
import { Link  } from 'react-router'
import Immutable from 'immutable'

import bookings from '../../bookings'
import { manageEventCheck } from '../permission.js'




//this component sits at the root of our management pages and ensures all the booking infomation for the event is loaded. This will include other peoples bookings so  we need to check we have permission to view them.


class ManageContainerPage extends React.Component {
	
  constructor(props) {
    super(props);
  }
 
	componentWillMount() {
		this.props.getEventBookings(this.props.params.eventId);
	}

  render() {

	//prevent render until we have the data available.
	if(this.props.Events === null || this.props.Bookings === null) return <div>Loading Data</div>;


	const event = this.props.Event.toJS();
	//React.cloneElement(this.props.children, {myprop: this.route.myprop})

    return(<div className="row">
						<div className="col-sm-12">
							<h3>Report for {event.name}</h3>
							<ul className="nav nav-tabs">
								<NavTab to={"/event/"+this.props.params.eventId+"/manage"}>Participants</NavTab>
  								<NavTab to={"/event/"+this.props.params.eventId+"/manage/bookings"}>Bookings</NavTab>
								<NavTab to={"/event/"+this.props.params.eventId+"/manage/kp"}>KP</NavTab>
							</ul>
							{React.cloneElement(this.props.children, {
								Event: this.props.Event,
								Bookings: this.props.Bookings,
								Participants: this.props.Participants})}
						</div>		
			</div>)
  }
}


//we could still have no bookings..
const mapStateToProps = (state, props) => {

	const Event = state.getIn(["Events",props.params.eventId]);
	 const Bookings = state.getIn(["Bookings","bookings"]).filter(b => b.get("eventId") === Event.get("id")).toList();
  	const Participants = Bookings.reduce((r, b) => r.concat(b.get("participants")), Immutable.List());//just easier to do this here than find a plain javascript object map function
  	return {Event, Bookings, Participants};
}

const mapDispatchToProps = {
		getEventBookings:bookings.actions.getEventBookings
};

var VisibleManageContainerPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(manageEventCheck(ManageContainerPage));

export default VisibleManageContainerPage;

class NavTab extends React.Component {

	constructor(props) {
    	super(props);
  	}
    
    render() {
        var isActive = this.context.router.isActive(this.props.to, true);
        var className = isActive ? 'active' : '';
        var link = (
            <Link onlyActiveOnIndex={true} {...this.props} />
        );
        return <li className={className}>{link}</li>;
    }

};

NavTab.contextTypes = {
        	router:React.PropTypes.object
    	};