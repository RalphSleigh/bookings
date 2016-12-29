import React from 'react'
import { connect } from 'react-redux'
import { Link  } from 'react-router'
import { browserHistory } from 'react-router'

import { getEvents } from '../actions.js'
import { showEditLink, showCreateLink, showBookLink, showManageLink } from'../permission.js'
import { getUserBookings } from '../../bookings/actions.js' //deep import, bad cause circular..

//Event listing

class EventList extends React.Component{
	constructor(props) {
    	super(props);

	this.clickCreate = this.clickCreate.bind(this);
  }

  clickCreate(e) {
	  e.preventDefault();
	  browserHistory.push('/event/create');
  }

  render() {

	  let events = this.props.Events.toSeq().sort((a,b) => a.get("StartDate") - b.get("StartDate")).map((e) => <Event {...e.toJS()} key={e.get("id")}/>).toArray();
	  return (
		<div className="row">
		  <div className="col-md-12">
		  	{events}
		  </div>
		  <div className="col-md-12">
		  		<CreateButton clickCreate={this.clickCreate}/>
		  </div>
		</div>)
  }
}

const CreateButton = showCreateLink((props) => <button className="btn btn-success" onClick={props.clickCreate}>New Event</button>)

const EditLink = showEditLink(Link);
const ManageLink = showManageLink(Link)

const Event = (props) => {

	const bookLink = props => props.booking !== undefined ? <Link event={props} to={"/event/"+props.id+"/book"}>Edit My Booking</Link> : <Link to={"/event/"+props.id+"/book"}>Book</Link>

	const PermBookLink =  showBookLink(bookLink);

	return(<div>
		<EditLink event={props} className="pull-right" to={"/event/"+props.id+"/edit"}>Edit</EditLink>
		<ManageLink event={props} className="pull-right" to={"/event/"+props.id+"/manage"}>Manage</ManageLink>
		<h1>{props.Name}</h1>
		<h3>{props.StartDate} - {props.EndDate}</h3>
		<p>{props.Description}</p>
		<PermBookLink event={props} {...props}/>
	</div>)}


//Connect to redux

const mapStateToProps = (state) => {

	const user = state.get("User")
	const userId = user.get("id");
  	let Events = state.get("Events");
  	const Bookings = state.getIn(["Bookings", "bookings"]);
  	Events = Events.map(e => e.set("booking", Bookings.find(b => b.get("eventId") === e.get('id') && b.get("userId") === userId)));
  	return {Events};
}


const mapDispatchToProps = {
		getEvents:getEvents, 
		getUserBookings:getUserBookings};

var VisibleEventList = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);

export default VisibleEventList;