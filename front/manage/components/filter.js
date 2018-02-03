import React from 'react'
import {MultiSelect, SimpleSelect} from '../../lib/react-selectize'; //Local version to fix bootstrap dropdowns.
import update from 'immutability-helper';
import * as P from '../../../shared/permissions.js'
import debounce from 'debounce'
import moment from 'moment'

//import bookings from '../bookings'
//import { manageEventCheck } from '../permission.js'

import W from '../../../shared/woodcraft.js'
import Immutable from "immutable";

import {
    Button,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Card,
    CardBody,
    CardTitle,
    CardImg,
    CardImgOverlay,
    Nav,
    NavItem,
    NavLink,
    TabContents,
    TabPane
} from 'reactstrap';

export default class Filter extends React.Component {

    constructor(props) {
        super(props);

        const Participants = this.props.Bookings.reduce((r, b) => r.concat(b.get("participants")), Immutable.List());//just easier to do this here than find a plain javascript object map function


        this.state = {
            orgs: [],
            villages: [],
            day: null,
            search: '',
            data: {Bookings: this.props.Bookings, Participants: Participants}
        };
        this.updateOrgs = this.updateOrgs.bind(this);
        this.updateVillages = this.updateVillages.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.updateDay = this.updateDay.bind(this);
        this.searchBooking = this.searchBooking.bind(this);
        this.updateData = this.updateData.bind(this);
        this.bounceUpdate = debounce(() => this.updateData(this.props), 500);
    }

    componentWillReceiveProps(nextProps) {
        this.updateData(nextProps)
    }

    updateOrgs(orgs) {
        this.setState(update(this.state, {orgs: {$set: orgs}}));
        this.bounceUpdate();
    }

    updateVillages(villages) {
        this.setState(update(this.state, {villages: {$set: villages}}));
        this.bounceUpdate();
    }

    updateDay(day) {
        this.setState(update(this.state, {day: {$set: day}}));
        this.bounceUpdate();
    }

    updateSearch(e) {
        this.setState(update(this.state, {search: {$set: e.target.value}}));
        this.bounceUpdate();
    }

    updateData(source) {
        let FilteredBookings = source.Bookings.filter(b => {
            if (this.state.orgs.length === 0) return true;
            return this.state.orgs.find(o => o.value === b.get("organisationId"))
        }).filter(b => {
            if (this.state.villages.length === 0) return true;
            return this.state.villages.find(v => v.value === b.get("villageId"))
        });

        if (this.state.day) FilteredBookings = FilteredBookings.map(b => b.set("participants", b.get("participants").filter(p => p.get("days") & this.state.day.value)));

        if (this.state.search.length > 2) FilteredBookings = FilteredBookings.reduce(this.searchBooking, Immutable.List());

        const Participants = FilteredBookings.equals(this.state.data.Bookings) ? this.state.data.Participants : FilteredBookings.reduce((r, b) => r.concat(b.get("participants")), Immutable.List());//just easier to do this here than find a plain javascript object map function

        this.setState(update(this.state, {
            data: {
                $set: {
                    Participants: Participants,
                    Bookings: FilteredBookings
                }
            }
        }));

    }


//TODO: Proper server side database searching
    searchBooking(R, booking) {
        const term = this.state.search;

        const newParticipants = booking.get("participants").filter(p => p.get("name").includes(term));

        const bookingFound = (
            booking.get("userName").includes(term)
            || booking.get("userEmail").includes(term)
            || booking.get("userContact").includes(term)
            || booking.get("district").includes(term)
            || booking.get("userContact").includes(term))

        if (bookingFound || !newParticipants.isEmpty()) {
            return R.push(booking.set("participants", newParticipants))
        }
        return R
    }

    render() {

        const user = this.props.User.toJS();
        const event = this.props.Event.toJS();
        const wholeEvent = P.manageWholeEvent(user, event);

        const orgOptions = this.props.Event.get("organisations").map(o => {
            return {label: o.get("name"), value: o.get("id"), id: o.get("id")}
        }).toArray();

        const villageOptions = this.props.Event.get("villages").map(v => {
            return {label: v.get("name"), value: v.get("id"), id: v.get("id")}
        }).toArray();

        orgOptions.forEach(o => {
            o.selectable = P.viewOrganisation(user, event, o)
        });


        villageOptions.forEach(v => {
            v.selectable = P.viewVillage(user, event, v)
        });

        const startDate = moment(event.startDate);
        const endDate = moment(event.endDate);
        const days = [];
        let mask = 0;

        for (let m = startDate; m.isBefore(endDate); m.add(1, 'days')) {
            days.push({label: m.format("dddd Do"), value: Math.pow(2, mask)});
            mask++;
        }

        const {Bookings, Participants, ...rest} = this.props;


        return (
            <React.Fragment>
                <Form>
                    <FormGroup row className="mt-3">
                        <Col sm={3}>
                            <Label>Filter by Organisation:</Label>
                            <MultiSelect
                                values={this.state.orgs}
                                onValuesChange={this.updateOrgs}
                                placeholder={wholeEvent ? "All Organisations" : "All Permissible Organisations"}
                                options={orgOptions}
                                theme="bootstrap3"
                            />
                        </Col>
                        <Col sm={3}>
                            <Label>Filter by Village:</Label>
                            <MultiSelect
                                values={this.state.villages}
                                onValuesChange={this.updateVillages}
                                placeholder={wholeEvent ? "All Villages" : "All Permissible Villages"}
                                options={villageOptions}
                                theme="bootstrap3"
                            />
                        </Col>
                        <Col sm={3}>
                            <Label>Filter by Day:</Label>
                            <SimpleSelect
                                value={this.state.day}
                                onValueChange={this.updateDay}
                                placeholder="Any"
                                options={days}
                                theme="bootstrap3"
                            />
                        </Col>
                        <Col sm={3}>
                            <Label className="control-label">Search:</Label>
                            <Input type="text"
                                   value={this.state.search}
                                   onChange={this.updateSearch}
                                   placeholder="Search"/>
                        </Col>
                    </FormGroup>
                </Form>
                {React.cloneElement(this.props.children, {...this.state.data, ...rest})}
            </React.Fragment>
        );

    }
}
