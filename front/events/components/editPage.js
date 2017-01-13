import React from 'react'
import { connect } from 'react-redux'
import { Link  } from 'react-router'
import EventForm from './eventForm.js'

import { getEvent, saveEvent, deleteEvent } from '../actions.js'
import { editEventCheck } from '../permission.js'

class EditPage extends React.Component {
	
	render() {
		if(this.props.Event === undefined)return null;

		let event = this.props.Event.toJS();
		//const data = this.props.user.toObject();
		return(
			<div>
				<div className="row">
					<div className="col-sm-12">
						<h3>Edit Event - {event.name}</h3>
					</div>
				</div>
				<div className="row">
					<EventForm event={event} saveEvent={this.props.saveEvent} deleteEvent={this.props.deleteEvent} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
  	var Event = state.getIn(["Events",props.params.eventId]);
 	return {Event}
}

const mapDispatchToProps = {getEvent, saveEvent, deleteEvent};

var VisibleEditPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(editEventCheck(EditPage));

export default VisibleEditPage;

