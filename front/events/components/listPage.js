import React from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { push } from 'react-router-redux'
import ReactMarkdown from 'react-markdown'
import Moment from 'moment'

import { getEvents } from '../actions.js'
import {showEditLink, showCreateLink, showBookLink, showManageLink, showApplyToBookLink} from '../permission.js'
import { getUserBookings } from '../../bookings/actions.js' //deep import, bad cause circular..
import {applyToBookEvent} from '../../../shared/permissions.js'

//Event listing

class EventList extends React.Component {
	constructor(props) {
		super(props);

		this.clickCreate = this.clickCreate.bind(this);
	}

	clickCreate(e) {
		e.preventDefault();
		dispatch(push('/event/create'));
	}

	render() {
        const user = this.props.User.toJS();
        let events = this.props.Events.toSeq().sort((a, b) => a.get("StartDate") - b.get("StartDate")).map((e) => <Event
            user={user} {...e.toJS()} key={e.get("id")}/>).toArray();
		return (
			<div className="row">
				<div className="col-md-12">
					{events}
				</div>
				<div className="col-md-12">
					<CreateButton clickCreate={this.clickCreate} />
				</div>
			</div>)
	}
}

const CreateButton = showCreateLink((props) => <button className="btn btn-success" onClick={props.clickCreate}>New Event</button>)




const Event = (props) => {


	const EditLink = showEditLink(() => <NavLink event={props} to={"/event/" + props.id + "/edit"}>Edit</NavLink>);
    const ManageLink = showManageLink(() => <NavLink to={"/event/" + props.id + "/manage"}>Manage</NavLink>);
    const Button = getEditApplyButton(props.user, props);

	return (<div className="panel panel-default">
		<div className="panel-heading"><h3 className="panel-title">{props.name}</h3></div>
		<div className="panel-body">
            <Button event={props}/>
			<h4>{Moment(props.startDate).format('Do')} - {Moment(props.endDate).format('Do MMMM YYYY')}</h4>
			<ReactMarkdown escapeHtml={true} source={props.description} />
			<div className="pull-right">
				<EditLink event={props}/>
				{" "}
				<ManageLink event={props} />
			</div>
		</div>
	</div>)
};

const getEditApplyButton = (user, event) => {
    if (event.booking !== undefined) {
        return showBookLink(() => <Link to={"/event/" + event.id + "/book"} className="btn btn-primary pull-right">Edit
            My Booking</Link>)
    }
    if (applyToBookEvent(user, event)) {
        return showApplyToBookLink(() => <Link to={"/event/" + event.id + "/apply"}
                                               className="btn btn-primary pull-right">Apply to book</Link>);
    }
    if (event.application !== undefined) {
        return () => <button className="btn btn-primary pull-right disabled" disabled>Applied</button>;
    }
    return showBookLink(() => <Link to={"/event/" + event.id + "/book"}
                                    className="btn btn-primary pull-right">Book</Link>)
};


//Connect to redux

const mapStateToProps = (state) => {

    const User = state.getIn(["User", "user"]);
    const userId = User.get("id");
    let Events = state.getIn(["Events", "events"]);
	const Bookings = state.getIn(["Bookings", "bookings"]);
    Events = Events.map(e => {
        e = e.set("booking", Bookings.find(b => b.get("eventId") === e.get('id') && b.get("userId") === userId));
        return e.set("application", User.get("applications").find(a => a.get('eventId') === e.get('id')));
    });
    return {User, Events};
}


const mapDispatchToProps = {
	getEvents: getEvents,
	getUserBookings: getUserBookings
};

var VisibleEventList = connect(
	mapStateToProps,
	mapDispatchToProps
)(EventList);

export default VisibleEventList;