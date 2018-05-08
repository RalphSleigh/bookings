import React from 'react'
import {connect} from 'react-redux'
import {Link, NavLink} from 'react-router-dom'
import {push} from 'react-router-redux'
import ReactMarkdown from 'react-markdown'
import Moment from 'moment'

import {getEvents} from '../actions.js'
import {
    showEditLink,
    showCreateLink,
    showBookLink,
    showManageLink,
    showApplyToBookLink,
    showBookingEditLink
} from '../permission.js'
import {getUserBookings} from '../../bookings/actions.js' //deep import, bad cause circular..
import {applyToBookEvent, manageEvent} from '../../../shared/permissions.js'

import {
    Button,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardImg
} from 'reactstrap';

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
        let events = this.props.Events.toSeq().filter(e => manageEvent(user, e.toJS()) || new Date(e.get("startDate")) > new Date()).sort((a, b) => a.get("startDate") - b.get("startDate")).map((e) =>
            <Event
            User={user} {...e.toJS()} key={e.get("id")}/>).toArray();
        return (<React.Fragment>
            <Row>
                <Col>
                    {events}
                </Col>
            </Row>
            <Row>
                <Col>
                    <CreateButton clickCreate={this.clickCreate}/>
                </Col>
            </Row>
        </React.Fragment>);

    }
}

const CreateButton = showCreateLink((props) => <Button color="success" onClick={props.clickCreate}>New
    Event</Button>);


const Event = (props) => {


    const EditLink = showEditLink(() => <NavLink event={props} to={"/event/" + props.id + "/edit"}>Edit</NavLink>);
    const ManageLink = showManageLink(() => <NavLink to={"/event/" + props.id + "/manage"}>Manage</NavLink>);
    const EditApplyButton = getEditApplyButton(props.User, props);

    return (<Card className="mb-3">
        <CardImg top src="/event-header.jpg" alt="Card image cap"/>
        <CardBody>
            <EditApplyButton event={props} booking={props.booking}/>
            <CardTitle>{props.name}</CardTitle>
            <CardSubtitle>{Moment(props.startDate).format('Do')} - {Moment(props.endDate).format('Do MMMM YYYY')}</CardSubtitle>
            <ReactMarkdown escapeHtml={true} source={props.description}/>
            <div className="float-right">
                <EditLink event={props}/>
                {" "}
                <ManageLink event={props}/>
            </div>
        </CardBody>
    </Card>);
};

const getEditApplyButton = (user, event) => {
    if (event.bookingPolicy !== 'guest' && user.id === 1)
        return () => <Link to={"/user"}
                           className="btn btn-primary float-right">Log in to Book</Link>;

    if (event.booking !== undefined) {
        return showBookingEditLink(() => <Link to={"/booking/" + event.booking.id + "/edit"}
                                               className="btn btn-primary float-right">Edit
            My Booking</Link>)
    }
    if (applyToBookEvent(user, event)) {
        return showApplyToBookLink(() => <Link to={"/event/" + event.id + "/apply"}
                                               className="btn btn-primary float-right">Apply to book</Link>);
    }
    if (event.application !== undefined) {
        return () => <button className="btn btn-primary float-right disabled" disabled>Applied</button>;
    }
    return showBookLink(() => <Link to={"/event/" + event.id + "/book"}
                                    className="btn btn-primary float-right">Book</Link>)
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