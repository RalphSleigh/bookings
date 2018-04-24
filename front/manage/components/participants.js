import React from 'react'
import csv from 'csv-file-creator'
import ReactTable from 'react-table'
import Moment from 'moment'
import update from 'immutability-helper';
import map from 'lodash/map'

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

import W from '../../../shared/woodcraft.js'

export default class Participants extends React.Component {

    constructor(props) {
        super(props);

        this.state = {expanded: null};

        this.exportCSV = this.exportCSV.bind(this);
        this.updateExpanded = this.updateExpanded.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        //rerendering the tables suck, lets not do it.
        //if (this.state !== nextState) return true;
        //return !this.props.Bookings.equals(nextProps.Bookings);
        return true;
    }

    componentWillReceiveProps() {
        this.setState(update(this.state, {expanded: {$set: null}}));
    }

    exportCSV() {
        const exportedData = this.props.participants.map(p => {
            const b = this.props.bookings.find(b => b.id === p.bookingId);

            return [p.id,
                p.name,
                Moment(p.age).format("DD/MM/YYYY"),
                p.diet,
                p.dietExtra,
                p.medical,
                b.userName,
                b.userEmail,
                b.userContact,
                b.emergencyName,
                b.emergencyPhone,
                b.note,
                p.createdAt,
                p.updatedAt]

        });
        const fileName = this.props.Event.get('name') + "-Participants-" + Moment().format('YYYY-MM-DD') + ".csv";
        csv(fileName, [['id', 'Name', 'DOB', 'Diet', 'Requirements &  Allergies', 'Medical', 'Booking Name', 'Booking e-mail', 'Booking Phone', 'Emergency name', 'Emergency Contact', 'Note', 'Created At', 'Updated At'], ...exportedData]);
    }

    updateExpanded(id) {
        return e => {
            if (id === this.state.expanded) this.setState(update(this.state, {expanded: {$set: null}}));
            else this.setState(update(this.state, {expanded: {$set: id}}));
        }
    }

    render() {

        const event = this.props.Event.toJS();
        const bookings = this.props.bookings;
        const participants = this.props.participants;



        const groups = W.reduce((a, w) => {
            const people = participants.filter((p) => p.ageGroup === '' ? false : p.ageGroup === w.name);
            if (people.length === 0) return a;
            return a + ` ${w.name}: ${people.length}`;
        }, '');

        //const prows = participants.sort(nameSort).map(p => <tr key={p.id}><td>{p.name}</td><td>{p.age}</td><td>{p.diet}</td><td>{bookings.find(b => b.id === p.bookingId).userName}</td></tr>)

        const data = participants.map(p => {
            const b = bookings.find(b => b.id === p.bookingId);
            return {
                name: p.name,
                age: p.ageAtStart,
                diet: p.diet,
                booked: b.userName,
                district: b.district,
                p: p,
                b: b,
                E: this.props.Event
            };
        });

        const columns = [{
            id: "name",
            accessor: row => row,
            Header: "Name",
            sortable: true,
            sortMethod: nameSort,
            Cell: row => row.value.name
        }];

        if (event.bigCampMode) columns.push({accessor: "district", Header: "District", sortable: true});

        columns.push({accessor: "age", Header: "Age", sortable: true},
            {accessor: "diet", Header: "Diet", sortable: true, minWidth: 70},
            {accessor: "booked", Header: "Booked By", sortable: true, minWidth: 50});

        const expanded = {[this.state.expanded]: true};

        return (<React.Fragment>
            <Row>
                <Col>
                    <Button className="float-right" onClick={this.exportCSV}>Export CSV</Button>
                    <h4>Total Participants: {participants.length}</h4>
                    <p>{groups}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ReactTable
                        expanded={expanded}
                        getTrProps={(state, rowInfo, column) => {
                            if (rowInfo) return {onClick: this.updateExpanded(rowInfo.viewIndex)};
                            return {}
                        }}
                        onSortedChange={this.updateExpanded(null)}
                        onPageChange={this.updateExpanded(null)}
                        SubComponent={subRow}
                        data={data}
                        columns={columns}
                        showPageSizeOption={false}
                        showPagination={true}/>
                </Col>
            </Row>
        </React.Fragment>);
    }
}

const subRow = row => {

    const event = row.original.E.toJS();

    const village = event.villages.find(v => row.original.b.villageId === v.id);
    const organisation = event.organisations.find(o => row.original.b.organisationId === o.id);
    const attendance = event.partialDates === "presets" ? event.partialDatesData.find(d => d.mask === row.original.p.days) : null;


    return (<Card>
        <CardBody>
            <CardTitle>
                {row.original.name}
            </CardTitle>
            <Row>
                <Col sm={4}>
                    <p><b>DOB: </b>{Moment(row.original.p.age).format("DD/MM/YYYY")}</p>
                    {row.original.b.district ? <p><b>Group/District:</b> {row.original.b.district}</p> : null}
                    <p><b>Booking Contact:</b> {row.original.b.userName}</p>
                    <p><b>Booking Contact Phone:</b> {row.original.b.userContact}</p>
                    {village ? <p><b>Village:</b> {village.name}</p> : null}
                    {organisation ? <p><b>Organisation:</b> {organisation.name}</p> : null}
                    {attendance ? <p><b>Attendance:</b> {attendance.name}</p> : null}
                    {!event.bigCampMode ? <p><b>Emergency Contact:</b> {row.original.b.emergencyName}</p> : null}
                    {!event.bigCampMode ? <p><b>Emergency Phone:</b> {row.original.b.emergencyPhone}</p> : null}
                </Col>
                <Col sm={4}>
                    <p><b>Diet:</b> {row.original.diet} </p>
                    <p><b>Diet Info:</b></p><p>{row.original.p.dietExtra}</p>
                    <p><b>Anything Else:</b></p><p>{row.original.b.note}</p>
                </Col>
                <Col sm={4}>
                    <p><b>Medical:</b></p><p>{row.original.p.medical}</p>
                </Col>
            </Row>
        </CardBody>
    </Card>);
};


const nameSort = (a, b) => {
    var splitA = a.name.split(" ");
    var splitB = b.name.split(" ");
    var lastA = splitA[splitA.length - 1];
    var lastB = splitB[splitB.length - 1];

    if (lastA < lastB) return -1;
    if (lastA > lastB) return 1;
    return 0;
};

