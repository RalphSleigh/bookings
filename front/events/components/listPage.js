import React from 'react'
import { connect } from 'react-redux'
import { Link  } from 'react-router'
import { browserHistory } from 'react-router'
import ReactMarkdown from 'react-markdown'
import Moment from 'moment'

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

	const bookLink = props => props.booking !== undefined ? <Link to={"/event/"+props.id+"/book"} className="btn btn-primary pull-right">Edit My Booking</Link> : <Link to={"/event/"+props.id+"/book"} className="btn btn-primary pull-right">Book</Link>

	const PermBookLink =  showBookLink(bookLink);

	return(<div className="panel panel-default">
		<div className="panel-heading"><h3 className="panel-title">{props.name}</h3></div>
		<div className="panel-body">
			<PermBookLink event={props} {...props}/>
			<h4>{Moment(props.startDate).format('Do')} - {Moment(props.endDate).format('Do MMMM YYYY')}</h4>
			<ReactMarkdown escapeHtml={true} source={props.description} />
				<div className="pull-right">
					<EditLink event={props} to={"/event/"+props.id+"/edit"}>Edit</EditLink>
					{" "} 
					<ManageLink event={props} to={"/event/"+props.id+"/manage"}>Manage</ManageLink>
				</div>
		</div>
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