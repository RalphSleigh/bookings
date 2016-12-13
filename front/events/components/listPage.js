import React from 'react'
import { connect } from 'react-redux'
import { Link  } from 'react-router'

import { getEvents } from '../actions.js'
import { showEditLink } from'../permission.js'

//Event listing

class EventList extends React.Component{
	constructor(props) {
    	super(props);
  }

  componentWillMount() {
    this.props.getEvents();
  }

  render() {

	  let events = this.props.Events.toSeq().sort((a,b) => a.get("StartDate") -b.get("StartDate")).map((e) => <Event {...e.toObject()} key={e.get("id")}/>).toArray();
	  return (
		<div className="row">
		  <div className="col-sm-12">
		  	{events}
		  </div>
		</div>)
  }
}

const EditLink = showEditLink(Link);

const Event = (props) => {
	return(<div>
		<EditLink event={props} className="pull-right" to={"/event/"+props.id+"/edit"}>Edit</EditLink>
		<h1>{props.Name}</h1><p>{props.Description}</p><Link to={"/event/"+props.id+"/book"}>Book</Link>
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