import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Immutable from 'immutable'
import {Route, Switch} from 'react-router-dom';

import bookings from '../../bookings'
import events from '../../events'
import {manageEventCheck, manageWholeEventWrapper, manageMoneyWrapper, manageRolesWrapper} from '../permission.js'
import {
    togglePaid,
    approve,
    decline,
    assignVillage,
    addVillage,
    deleteVillage,
    addRole,
    deleteRole,
    addPayment,
    deletePayment,
    approveMembership,
    unapproveMembership,
    approveDBS,
    unapproveDBS
} from '../actions.js'
import {getUserList} from "../../user/actions";

import Filter           from './filter'
import BookingsPage     from './bookings.js'
import ParticipantsPage from './participants.js'
import KpPage           from './kp.js'
import ApplicationPage  from './applications.js'
import VillagePage      from './villages.js'
import RolesPage        from './roles.js'
import MoneyPage        from './money.js'
import EmailsPage       from './emails.js'
import BirthdaysPage    from './birthdays.js'
import GraphsPage       from './graphs.js'
import MembershipsPage  from './membership.js'

import W from '../../../shared/woodcraft'

import {
    Row,
    Col,
    Nav,
    NavItem,
    NavLink
}                 from 'reactstrap';

const moment = require("moment");
import classnames from 'classnames';
import ageFactory from "../../age";
import Moment     from "moment/moment";
import Memberships from "./membership";


//this component sits at the root of our management pages and ensures all the booking information for the event is loaded. This will include other peoples bookings so  we need to check we have permission to view them.


class ManageContainerPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getEventDetails(this.props.match.params.eventId);
        this.props.getEventBookings(this.props.match.params.eventId);

        this.prepData(this.props.Bookings, this.props.Event)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.Bookings !== this.props.Bookings) this.prepData(nextProps.Bookings, nextProps.Event)
    }

    prepData(Bookings, Event) {
        //DeImmutable data and calculate ages, to avoid needing to do it on render. Store result in State.

        const event = Event.toJS();

        const ageWidgets = ageFactory(event);

        const startDate = moment(event.startDate); //todo store this as a moment.

        const bookings = Bookings.valueSeq().toJS().filter(b => b.eventId === event.id);
        bookings.forEach(b => {
            b.externalExtra = b.externalExtra || {};
            b.participants.forEach(p => {
                p.ageAtStart = startDate.diff(moment(p.age), 'years');
                p.ageGroup = W.find(w => w.filter(p.ageAtStart)).singular;
                p.displayAge = ageWidgets.displayAgeParticipant(p);
                p.prettyUpdatedAt = moment(p.updatedAt).format('L');
                p.prettyCreatedAt = moment(p.createdAt).format('L');
                p.externalExtra = p.externalExtra || {};
                p.internalExtra = p.internalExtra || {};
            })
        });

        this.setState({bookings: bookings})
    }

    render() {

        //prevent render until we have the data available.
        if (!this.props.Event || !this.props.Bookings || !this.props.Event.get("user")) return <div>Loading Data</div>;


        const event = this.props.Event.toJS();

        const showApplications = event.bookingPolicy === 'approved' && event.applications;

        const ApplicationsTab = showApplications ?
            manageWholeEventWrapper(() => <CustomTab
                to={"/event/" + this.props.match.params.eventId + "/manage/applications"}
                label={'Applications (' + event.applications.length + ')'}/>) : () => null;

        const VillagesTab = manageWholeEventWrapper(() => event.bigCampMode ? <CustomTab
            to={"/event/" + this.props.match.params.eventId + "/manage/villages"} label="Villages"/> : null);
        const RolesTab = manageWholeEventWrapper(() => <CustomTab
            to={"/event/" + this.props.match.params.eventId + "/manage/roles"} label="Roles"/>);

        const MoneyTab = manageMoneyWrapper(() => <CustomTab
            to={"/event/" + this.props.match.params.eventId + "/manage/money"} label="Money"/>);

        const MembershipsTab = manageWholeEventWrapper(() => event.customQuestions.adultEmail ? <CustomTab
            to={"/event/" + this.props.match.params.eventId + "/manage/memberships"} label="Memberships"/> : null);

        const {Bookings, ...props} = this.props;
        return (<React.Fragment>
                <Row>
                    <Col>
                        <Nav tabs>
                            <CustomTab activeOnlyWhenExact to={"/event/" + this.props.match.params.eventId + "/manage"}
                                       label="Participants"/>
                            <CustomTab to={"/event/" + this.props.match.params.eventId + "/manage/bookings"}
                                       label="Bookings"/>
                            <CustomTab to={"/event/" + this.props.match.params.eventId + "/manage/kp"} label="KP"/>
                            <VillagesTab {...this.props}/>
                            <RolesTab {...this.props}/>
                            <ApplicationsTab {...this.props}/>
                            <MoneyTab {...this.props} />
                            <CustomTab to={"/event/" + this.props.match.params.eventId + "/manage/emails"}
                                       label="Emails"/>
                            <CustomTab to={"/event/" + this.props.match.params.eventId + "/manage/birthdays"}
                                       label="🎂"/>
                            <CustomTab to={"/event/" + this.props.match.params.eventId + "/manage/graphs"}
                                       label="📈"/>
                            <MembershipsTab {...this.props} />
                        </Nav>
                    </Col>
                </Row>
                <Switch>
                    <Route exact path="/event/:eventId(\d+)/manage">
                        <Filter bookings={this.state.bookings} {...props} >
                            <ParticipantsPage/>
                        </Filter>
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/participants">
                        <Filter bookings={this.state.bookings} {...props} >
                            <ParticipantsPage/>
                        </Filter>
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/bookings">
                        <Filter bookings={this.state.bookings} {...props} >
                            <BookingsPage/>
                        </Filter>
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/kp">
                        <Filter bookings={this.state.bookings} {...props} >
                            <KpPage/>
                        </Filter>
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/emails">
                        <Filter bookings={this.state.bookings} {...props} >
                            <EmailsPage/>
                        </Filter>
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/birthdays">
                        <Filter bookings={this.state.bookings} {...props} >
                            <BirthdaysPage/>
                        </Filter>
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/applications">
                        <ApplicationPage bookings={this.state.bookings} {...props} />
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/villages">
                        <VillagePage bookings={this.state.bookings} {...props} />
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/roles">
                        <RolesPage bookings={this.state.bookings} {...props} />
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/money">
                        <MoneyPage bookings={this.state.bookings} {...props} />
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/graphs">
                        <Filter bookings={this.state.bookings} {...props} >
                            <GraphsPage/>
                        </Filter>
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/memberships">
                        <Filter bookings={this.state.bookings} {...props} >
                            <MembershipsPage/>
                        </Filter>
                    </Route>
                </Switch>
            </React.Fragment>


        );
    }
}


//we could still have no bookings..
const mapStateToProps = (state, props) => {

    const User = state.getIn(["User", "user"]);
    const UserList = state.getIn(["User", "list"]);
    const Event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]);
    const Bookings = state.getIn(["Bookings", "bookings"]);
    return {User, UserList, Event, Bookings};
};

const mapDispatchToProps = {
    getEventBookings: bookings.actions.getEventBookings,
    getEventDetails: events.actions.getEventDetails,
    togglePaid: togglePaid,
    approve: approve,
    decline: decline,
    assignVillage: assignVillage,
    addVillage: addVillage,
    deleteVillage: deleteVillage,
    getUserList: getUserList,
    addRole: addRole,
    deleteRole: deleteRole,
    addPayment: addPayment,
    deletePayment: deletePayment,
    approveMembership: approveMembership,
    unapproveMembership: unapproveMembership,
    approveDBS: approveDBS,
    unapproveDBS: unapproveDBS
};

const VisibleManageContainerPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(manageEventCheck(ManageContainerPage));

export default VisibleManageContainerPage;

const CustomTab = ({label, to, activeOnlyWhenExact}) => (
    <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({match}) => (
            <NavItem>
                <NavLink className={classnames({active: match})} tag={Link} to={to}>
                    {label}
                </NavLink>
            </NavItem>)}
    />
);


