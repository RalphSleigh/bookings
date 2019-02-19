import React      from 'react'
import csv        from 'csv-file-creator'
import ReactTable from 'react-table'
import Moment     from 'moment'
import update     from 'immutability-helper';
import eol        from 'eol'
import map        from 'lodash/map'

//import bookings from '../bookings'
//import { manageEventCheck } from '../permission.js'

import {
    Row,
    Col,
    Button,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
} from 'reactstrap';

import W          from '../../../shared/woodcraft.js'
import ageFactory from "../../age";
import moment     from "moment/moment";

export default class Birthdays extends React.Component {

    constructor(props) {
        super(props);

        this.ageWidgets = ageFactory(this.props.Event.toJS());
    }

    shouldComponentUpdate(nextProps, nextState) {
        //rerendering the tables suck, lets not do it.
        //if (this.state !== nextState) return true;
        //return !this.props.Bookings.equals(nextProps.Bookings);
        return true;
    }

    componentWillReceiveProps() {
    }

    render() {

        const event = this.props.Event.toJS();
        const bookings = this.props.bookings;
        const participants = this.props.participants;

        const startDate = moment.utc(event.startDate).startOf('day');
        const endDate = moment.utc(event.endDate).startOf('day').add(1, 'days');
        const days = [];


        for (let m = startDate; m.isBefore(endDate); m.add(1, 'days')) {

            let rows = []
            participants.forEach(p => {

                const bday = Moment.utc(p.age)
                if (m.date() === bday.date() && m.month() === bday.month()) {

                    const age = moment(m).add(1, 'days').diff(bday, 'years');
                    if (age < 22) rows.push(<p key={p.id}>{p.name} ({age})</p>);
                    else rows.push(<p key={p.id}>{p.name}</p>);
                }


            });

            days.push(<React.Fragment id={m}>
                <h4>{m.format('dddd Do')}</h4>
                {rows}
            </React.Fragment>)
        }

        return (<React.Fragment>
            <Row>
                <Col>
                    {days}
                </Col>
            </Row>
        </React.Fragment>);
    }
}


