import React from 'react'
import { connect } from 'react-redux'
import { Link  } from 'react-router'
import { browserHistory } from 'react-router'

import { getEvents } from '../actions.js'
import { showEditLink, showCreateLink } from'../permission.js'

//Event listing

class EventList extends React.Component{
	constructor(props) {
    	super(props);

	this.clickCreate = this.clickCreate.bind(this);
  }

  componentWillMount() {
    this.props.getEvents();
  }

  clickCreate(e) {
	  e.preventDefault();
	  browserHistory.push('/event/create');
  }

  render() {

	  let events = this.props.Events.toSeq().sort((a,b) => a.get("StartDate") - b.get("StartDate")).map((e) => <Event {...e.toObject()} key={e.get("id")}/>).toArray();
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

const Event = (props) => {
	return(<div>
		<EditLink event={props} className="pull-right" to={"/event/"+props.id+"/edit"}>Edit</EditLink>
		<h1>{props.Name}</h1>
		<h3>{props.StartDate} - {props.EndDate}</h3>
		<p>{props.Description}</p>
		<Link to={"/event/"+props.id+"/book"}>Book</Link>
	</div>)}


//Connect to redux

const mapStateToProps = (state) => {
  var Events = state.get("Events");
  return {Events};
}

const mapDispatchToProps = {getEvents};

var VisibleEventList = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);

export default VisibleEventList;