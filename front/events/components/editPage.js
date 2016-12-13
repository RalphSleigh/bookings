import React from 'react'
import { connect } from 'react-redux'
import { Link  } from 'react-router'
import EventForm from './eventForm.js'

import { getEvent, saveEvent } from '../actions.js'
import { editEventCheck } from '../permission.js'

class EditPage extends React.Component {
	
	render() {
		if(this.props.Event === undefined)return null; 
		//const data = this.props.user.toObject();
		return(
			<div>
				<div className="row">
					<div className="col-sm-12">
						<h3>Edit Event - {this.props.Event.get("Name")}</h3>
					</div>
				</div>
				<div className="row">
					<EventForm {...this.props} />
				</div>
			</div>
		)
	}

	componentWillMount() {
    	if(this.props.Event === undefined)this.props.getEvent(this.props.params.eventId);
  }
}

const mapStateToProps = (state, props) => {
  	var Event = state.getIn(["Events",props.params.eventId]);
 	return {Event}
}

const mapDispatchToProps = {getEvent, saveEvent};

var VisibleEditPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(editEventCheck(EditPage));

export default VisibleEditPage;

