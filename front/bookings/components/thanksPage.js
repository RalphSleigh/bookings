import React            from 'react'
import {connect}        from 'react-redux'
import {Link}           from 'react-router-dom'
import {browserHistory} from 'react-router'
import moment           from 'moment'

//import event from '../../events'
import {redirectFromThanks} from '../actions.js'
import {
    Row,
    Col,
    Table
}                           from 'reactstrap';
import ReactMarkdown        from 'react-markdown'
import ageFactory           from "../../age";
import feeFactory           from '../../../shared/fee/feeFactory.js'
import W                    from "../../../shared/woodcraft";


//confirmation page for bookings

class ThanksPage extends React.Component {

    constructor(props) {
        super(props);

        this.event = this.props.Event.toJS();
        this.user = this.props.User.toJS();
        this.booking = this.props.Booking.toJS();

        this.ageWidgets = ageFactory(this.event);
        this.fees = feeFactory(this.event);

    }

    render() {

        const event = this.props.Event.toJS();
        const user = this.props.User.toJS();

        const ageWidgets = ageFactory(event);

        //this is some unholy hack to get the thanks page to redirect back to the booking form if the user does not have a booking and will never actually come up in the real world.


        const booking = this.props.Booking.toJS();
        const startDate = moment(event.startDate);

        booking.participants.forEach(p => {
            p.ageAtStart = startDate.diff(moment(p.age), 'years');
            p.ageGroup = W.find(w => w.filter(p.ageAtStart)).singular;
            p.displayAge = ageWidgets.displayAgeParticipant(p);
        });

        const participants = booking.participants.map(p => <ParticipantRow key={p.id} {...p} />);


        return (<React.Fragment>
            <Row>
            <Col>
                <h3>Thanks for booking for {event.name}</h3>
                <p>You can come back and <Link to={"/event/" + event.id + "/book"}>edit</Link> your booking at any time
                    before the deadline</p>
                <h4>Participants booked</h4>
                <Table striped>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Diet</th>
                    </tr>
                    </thead>
                    <tbody>
                    {participants}
                    </tbody>
                </Table>
            </Col>
            </Row>
            <Row>
            <Col sm={12}>
                <h4>Money</h4>
                <ReactMarkdown escapeHtml={true} source={event.feeData.desc}/>
            </Col>
            </Row>
            <this.fees.ThanksRow
                event={this.event}
                booking={booking}/>
            <Row>
                <ReactMarkdown escapeHtml={true} source={event.paymentInfo}/>
            </Row>
            <Row>
                <Col>
                    <p>If you have any questions, or need to get in touch for any reason please contact <a href={`mailto:${event.customQuestions.emailReply}`}>{event.customQuestions.emailReply}</a></p>
                </Col>
            </Row>
        </React.Fragment>);
    }
}

const ParticipantRow = props => <tr>
    <td>{props.name}</td>
    <td>{props.displayAge}</td>
    <td>{props.diet}</td>
</tr>;

class ThanksPageWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.hasBooking = this.props.Booking
    }

    render() {
        if (this.props.Booking) return <ThanksPage {...this.props}/>;
        else {
            //this is some unholy hack to get the thanks page to redirect back to the booking form if the user does not have a booking and will never actually come up in the real world.
            setImmediate(this.props.redirectFromThanks, this.props.Event.get('id'));
            return null;
        }
    }
}

const mapStateToProps = (state, props) => {
    let User = state.getIn(["User", "user"]);
    let Event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]);
    let Booking = state.getIn(["Bookings", "bookings"]).find(b => b.get("userId") === User.get("id") && b.get("eventId") === Event.get("id"));
    return {User, Event, Booking}
};

//const getEvent = event.actions.getEvent
const mapDispatchToProps = {redirectFromThanks};

const VisibleThanksPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(ThanksPageWrapper);

export default VisibleThanksPage;