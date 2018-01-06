import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Immutable from 'immutable'
import {Route, Switch} from 'react-router-dom';

import bookings from '../../bookings'
import events from '../../events'
import {manageEventCheck, manageWholeEventWrapper} from '../permission.js'
import {
    togglePaid,
    approve,
    decline,
    assignVillage,
    addVillage,
    deleteVillage,
    addRole,
    deleteRole
} from '../actions.js'
import {getUserList} from "../../user/actions";

import Filter from './filter'
import BookingsPage from './bookings.js'
import ParticipantsPage from './participants.js'
import KpPage from './kp.js'
import ApplicationPage from './applications.js'
import VillagePage from './villages.js'
import RolesPage from './roles.js'


//this component sits at the root of our management pages and ensures all the booking information for the event is loaded. This will include other peoples bookings so  we need to check we have permission to view them.


class ManageContainerPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getEventDetails(this.props.match.params.eventId);
        this.props.getEventBookings(this.props.match.params.eventId);
    }

    render() {

        //prevent render until we have the data available.
        if (!this.props.Event || !this.props.Bookings || !this.props.Event.get("user")) return <div>Loading Data</div>;


        const event = this.props.Event.toJS();
        //React.cloneElement(this.props.children, {myprop: this.route.myprop})

        const showApplications = event.bookingPolicy === 'approved' && event.applications;

        const ApplicationsTab = showApplications ?
            manageWholeEventWrapper(() => <CustomTab
                to={"/event/" + this.props.match.params.eventId + "/manage/applications"}
                label={'Applications (' + event.applications.length + ')'}/>) : null;

        const VillagesTab = manageWholeEventWrapper(() => <CustomTab
            to={"/event/" + this.props.match.params.eventId + "/manage/villages"} label="Villages"/>);
        const RolesTab = manageWholeEventWrapper(() => <CustomTab
            to={"/event/" + this.props.match.params.eventId + "/manage/roles"} label="Roles"/>);


        return (<div className="row">
            <div className="col-sm-12">
                <ul className="nav nav-tabs">
                    <CustomTab activeOnlyWhenExact to={"/event/" + this.props.match.params.eventId + "/manage"}
                               label="Participants"/>
                    <CustomTab to={"/event/" + this.props.match.params.eventId + "/manage/bookings"} label="Bookings"/>
                    <CustomTab to={"/event/" + this.props.match.params.eventId + "/manage/kp"} label="KP"/>
                    <VillagesTab {...this.props}/>
                    <RolesTab {...this.props}/>
                    <ApplicationsTab {...this.props}/>
                </ul>
                <Switch>
                    <Route exact path="/event/:eventId(\d+)/manage">
                        <Filter {...this.props} >
                            <ParticipantsPage/>
                        </Filter>
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/participants">
                        <Filter {...this.props} >
                            <ParticipantsPage/>
                        </Filter>
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/bookings">
                        <Filter {...this.props} >
                            <BookingsPage/>
                        </Filter>
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/kp">
                        <Filter {...this.props} >
                            <KpPage/>
                        </Filter>
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/applications">
                        <ApplicationPage {...this.props} />
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/villages">
                        <VillagePage {...this.props} />
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/roles">
                        <RolesPage {...this.props} />
                    </Route>
                </Switch>
            </div>
        </div>)
    }
}


//we could still have no bookings..
const mapStateToProps = (state, props) => {

    const User = state.getIn(["User", "user"]);
    const UserList = state.getIn(["User", "list"]);
    const Event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]);
    const Bookings = state.getIn(["Bookings", "bookings"]).filter(b => b.get("eventId") === Event.get("id")).toList();
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
    deleteRole: deleteRole
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
            <li className={match ? "active" : ""}>
                <Link to={to}>
                    {label}
                </Link>
            </li>
        )}
    />
);


