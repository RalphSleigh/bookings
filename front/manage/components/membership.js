import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

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
import ageFactory from "../../age";
import moment from "moment/moment";

export default class Memberships extends React.Component {

    constructor(props) {
        super(props);
        this.state = {copied: 0};

        this.ageWidgets = ageFactory(this.props.Event.toJS());

        this.approveMembership = this.approveMembership.bind(this);
        this.unapproveMembership = this.unapproveMembership.bind(this);

    }

    shouldComponentUpdate(nextProps, nextState) {
        //rerendering the tables suck, lets not do it.
        //if (this.state !== nextState) return true;
        //return !this.props.Bookings.equals(nextProps.Bookings);
        return true;
    }

    componentWillReceiveProps() {
    }

    approveMembership(id){
        return e => {
            this.props.approveMembership({
                id: id
            });
            e.preventDefault();
        }
    }

    unapproveMembership(id){
        return e => {
            this.props.unapproveMembership({
                id: id
            });
            e.preventDefault();
        }
    }

    render() {

        const event = this.props.Event.toJS();
        const bookings = this.props.bookings;
        const participants = this.props.participants;

        const adults = participants.filter(p => p.ageAtStart > 15);

        adults.forEach(p => p.district = bookings.find(b => b.id === p.bookingId).district);

        adults.sort(propSort('district'));

        const approved = adults.filter(p => p.internalExtra.member === true);
        const notYetApproved = adults.filter(p => p.internalExtra.member !== true);

        const notYetApprovedRows = notYetApproved.map(p => <tr key={p.id}>
            <td>{p.name + (p.ageAtStart === 16 ? '  (16)': '')}</td>
            <td>{p.district}</td>
            <td>{p.externalExtra.adultEmail} <CopyToClipboard text={p.externalExtra.adultEmail}
                onCopy={() => this.setState({copied: p.id})}><span style={{cursor:'copy'}}>📋</span></CopyToClipboard>{this.state.copied === p.id ?' ✔️' : ''}</td>
            <td><Button color="success" onClick={this.approveMembership(p.id)}>Approve</Button></td>
        </tr>);

        const approvedRows = approved.map(p => <tr key={p.id}>
            <td>{p.name + (p.ageAtStart === 16 ? '  (16)': '')}</td>
            <td>{p.district}</td>
            <td>{p.externalExtra.adultEmail} <CopyToClipboard text={p.externalExtra.adultEmail}><span style={{cursor:'copy'}}>📋</span></CopyToClipboard>{this.state.copied === p.id ?' ✔️' : ''}</td>
            <td><Button color="warning" onClick={this.unapproveMembership(p.id)}>Unapprove</Button></td>
        </tr>);

        return (<Row>
            <Col sm={12}>
                <h4>To Be Approved:</h4>
                <table className='table'>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>District</th>
                        <th>Membership e-mail</th>
                        <th>Approve</th>
                    </tr>
                    </thead>
                    <tbody>
                    {notYetApprovedRows}
                    </tbody>
                </table>
            </Col>
            <Col sm={12}>
                <h4>Already Approved:</h4>
                <table className='table'>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>District</th>
                        <th>Membership e-mail</th>
                        <th>Unapprove</th>
                    </tr>
                    </thead>
                    <tbody>
                    {approvedRows}
                    </tbody>
                </table>
            </Col>
        </Row>)
    }
}

const propSort = prop => (a,b) => {
    const x = a[prop].toLowerCase();
    const y = b[prop].toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
};



