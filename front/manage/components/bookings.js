import React from 'react'
import {Link} from 'react-router-dom'
import ReactTable from 'react-table'
import Moment from 'moment'
import csv from 'csv-file-creator'
import update from "immutability-helper";
//import Switch from 'react-toggle'

//import bookings from '../bookings'
import {showBookingEditLink} from '../permission.js'

import {
    Row,
    Col,
    Button,
    Card,
    CardBody,
    CardTitle,
    Table
} from 'reactstrap';
import ageFactory from "../../age";


//import W from '../../../shared/woodcraft.js'

export default class Bookings extends React.Component {

    constructor(props) {
        super(props);

        this.ageWidgets = ageFactory(this.props.Event.toJS());
        this.state = {expanded: null};

        this.markPaid = this.markPaid.bind(this);
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

    updateExpanded(id) {
        return e => {
            if (id === this.state.expanded) this.setState(update(this.state, {expanded: {$set: null}}));
            else this.setState(update(this.state, {expanded: {$set: id}}));
        }
    }

    exportCSV() {
        const exportedData = this.props.bookings.map(b => [b.id,
            b.userName,
            b.userEmail,
            b.userContact,
            b.participants.length,
            b.paymentType,
            b.emergencyName,
            b.emergencyPhone,
            b.note,
            b.createdAt,
            b.updatedAt]);
        const fileName = this.props.Event.get('name') + "-Bookings-" + Moment().format('YYYY-MM-DD') + ".csv";
        csv(fileName, [['id', 'Name', 'e-mail', 'Phone', 'Participants', 'Payment type', 'Emergency name', 'Emergency Contact', 'Note', 'Created', 'Updated'], ...exportedData]);
    }

    markPaid(id) {
        return () => {
            this.props.togglePaid(id);
        }
    }

    render() {

        //const event = this.props.Event.toJS();
        const bookings = this.props.bookings;
        const user = this.props.User.toJS();
        //const participants = this.props.Participants.toJS();

        /*const brows = bookings.map(b => <tr key={b.id}><td>{b.userName}</td>
                                            <td>{b.userEmail}</td>
                                            <td>{b.userContact}</td>
                                            <td>{b.participants.length}</td>
                                            <td>{b.paymentType}</td>
                                            <td>{b.updatedAt}</td>
                                        </tr>)
    */
        const data = bookings.map(b => {
            let result = {
                userName: b.userName,
                userEmail: b.userEmail,
                userContact: b.userContact,
                paymentType: b.paymentType,
                paid: b.paid,
                id: b.id,
                b: b,
                E: this.props.Event

            };

            result.participants = b.participants.length;
            result.updatedAt = Moment(b.updatedAt).format('L');


            return result
        });

        const BookingEditLink = showBookingEditLink(props => {
            return <Link to={"/booking/" + props.booking.id + "/edit"}>Edit</Link>
        });


        const columns = [{accessor: "userName", Header: "Name", sortable: true},
            {accessor: "userEmail", Header: "e-mail", sortable: true},
            {accessor: "userContact", Header: "Contact", sortable: true, minWidth: 70},
            {accessor: "participants", Header: "Booked", sortable: true, minWidth: 50},
            {accessor: "paymentType", Header: "Payment Method", sortable: true, minWidth: 50},
            {accessor: "updatedAt", Header: "Updated", sortable: true, minWidth: 40},
            {
                id: "edit",
                accessor: "id",
                Header: "Edit",
                Cell: row => <BookingEditLink event={row.original.E.toJS()} booking={row.original.b}/>,
                minWidth: 18
            }
        ];
        //const sortables=[{column:"userName", sortFunction:nameSort},"userEmail","userContact","participants","paymentType","updatedAt"];
        const expanded = {[this.state.expanded]: true};

        return (<React.Fragment>
            <Row>
                <Col>
                    <Button className="float-right" onClick={this.exportCSV}>Export CSV</Button>
                    <h4>Total Bookings: {bookings.length}</h4>
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
                        SubComponent={this.subRow}
                        data={data}
                        columns={columns}
                        showPagination={true}
                        showPageSizeOption={false}/>
                </Col>
            </Row>
        </React.Fragment>);
    }

    subRow = row => {

        const event = row.original.E.toJS();

        const village = event.villages.find(v => row.original.b.villageId === v.id);
        const organisation = event.organisations.find(o => row.original.b.organisationId === o.id);

        const participants = row.original.b.participants.map(p => <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.displayAge}</td>
        </tr>);

        return (
            <Card>
                <CardBody>
                    <CardTitle>
                        {row.original.b.district ? row.original.b.district + " - " : null}
                        {row.original.b.userName}
                    </CardTitle>

                    <Row>
                        <Col sm={4}>
                            <p><b>Booking Contact E-mail:</b> <a
                                href={"mailto:" + row.original.b.userEmail}>{row.original.b.userEmail}</a></p>
                            <p><b>Booking Contact Phone:</b> {row.original.b.userContact}</p>
                            {village ? <p><b>Village:</b> {village.name}</p> : null}
                            {organisation ? <p><b>Organisation:</b> {organisation.name}</p> : null}
                            <p><b>Participants:</b> {row.original.participants}</p>
                            <p><b>Anything Else:</b></p><p>{row.original.b.note}</p>
                            {event.bigCampMode ? <p><b>Camp With: </b>{row.original.b.campWith}</p> : null}
                        </Col>
                        <Col sm={8}>
                            <Table>
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                </tr>
                                </thead>
                                <tbody>
                                {participants}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        );
    }
}



const nameSort = (a, b) => {
    var splitA = a.split(" ");
    var splitB = b.split(" ");
    var lastA = splitA[splitA.length - 1];
    var lastB = splitB[splitB.length - 1];

    if (lastA < lastB) return -1;
    if (lastA > lastB) return 1;
    return 0;
};

