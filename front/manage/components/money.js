import React from 'react'
import Currency from 'react-currency-formatter';
import Moment from 'moment'

//import bookings from '../bookings'
//import { manageEventCheck } from '../permission.js'
import fee from '../../../shared/fee'
import update from 'immutability-helper';

import {
    Row,
    Col,
    Label,
    Button,
    Input,
    InputGroup,
    FormGroup,
    Table
} from 'reactstrap';

import W from '../../../shared/woodcraft.js'

export default class Money extends React.Component {

    constructor(props) {
        super(props);

        this.state = {expanded: 0, amount: 0, note: ''};
        this.expand = this.expand.bind(this);
        this.updateAmount = this.updateAmount.bind(this);
        this.updateNote = this.updateNote.bind(this);
        this.addPayment = this.addPayment.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        //rerendering the tables suck, lets not do it.
        //return !this.props.Bookings.equals(nextProps.Bookings);
        return true
    }

    expand(id) {
        return e => {
            this.setState(update(this.state, {expanded: {$set: id}}));
        }
    }

    updateAmount(e) {
        this.setState(update(this.state, {amount: {$set: e.target.value}}));
    }

    updateNote(e) {
        this.setState(update(this.state, {note: {$set: e.target.value}}));
    }

    addPayment(type) {
        return e => {

            this.props.addPayment({
                type: type,
                amount: this.state.amount,
                note: this.state.note,
                bookingId: this.state.expanded
            });
            e.preventDefault();
        }
    }

    closedRow(b, event) {
        const name = event.bigCampMode ? b.district : b.userName;
        let owed = this.getFeesOwed(event, b.participants, b).reduce((a, c) => parseFloat(c.total) + a, 0);
        const paid = b.payments.filter(p => p.type === 'payment').reduce((a, c) => a + parseFloat(c.amount), 0);

        owed = b.payments.filter(p => p.type === 'adjustment').reduce((a, c) => a + parseFloat(c.amount), owed);

        this.totalOwed += owed;
        this.totalPaid += paid;

        return <tr key={b.id} onClick={this.expand(b.id)} className={paid - owed >= 0 ? "table-success" : ''}>
            <td>+</td>
            <td>{name}</td>
            <td><Currency
                quantity={owed}
                currency="GBP"
            /></td>
            <td><Currency
                quantity={paid}
                currency="GBP"
            /></td>
            <td><Currency
                quantity={paid - owed}
                currency="GBP"
            /></td>
        </tr>
    }

    openRow(b, event) {
        const name = event.bigCampMode ? b.district : b.userName;
        let owed = this.getFeesOwed(event, b.participants, b).reduce((a, c) => parseFloat(c.total) + a, 0);
        const paid = b.payments.filter(p => p.type === 'payment').reduce((a, c) => a + parseFloat(c.amount), 0);

        owed = b.payments.filter(p => p.type === 'adjustment').reduce((a, c) => a + parseFloat(c.amount), owed);

        this.totalOwed += owed;
        this.totalPaid += paid;

        const adjustmentRow = b.payments.filter(p => p.type === 'adjustment').map(r => <tr key={`adjust${b.id}`}>
            <td>x</td>
            <td>{Moment(r.updatedAt).format('L') + ' ' + r.note}</td>
            <td><Currency
                quantity={r.amount}
                currency="GBP"
            /></td>
            <td></td>
            <td></td>
        </tr>);

        const paymentRows = b.payments.filter(p => p.type === 'payment').map((r, i) => <tr key={`adjust${b.id}${i}`}>
            <td>x</td>
            <td>{Moment(r.updatedAt).format('L') + ' ' + r.note}</td>
            <td></td>
            <td><Currency
                quantity={r.amount}
                currency="GBP"
            /></td>
            <td></td>
        </tr>);

        const feeRows = this.getFeesOwed(event, b.participants, b).map((r, i) => <tr key={`owed${b.id} ${i}`}>
            <td></td>
            <td>{r.line}</td>
            <td><Currency
                quantity={r.total}
                currency="GBP"
            /></td>
            <td></td>
            <td></td>
        </tr>);

        const hasAdjustment = b.payments.find(p => p.type === 'adjustment');

        return <React.Fragment key={b.id}>
            <tr onClick={this.expand(0)} style={{borderTop: 'solid black 3px'}}>
                <td></td>
                <td colSpan={4}><b>{name}</b></td>
            </tr>
            {feeRows}
            {adjustmentRow}
            {paymentRows}
            <tr>
                <td></td>
                <td colSpan={4}>
                    <FormGroup row>
                        <Label sm={3}>Amount</Label>
                        <Col sm={3}>
                            <InputGroup>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">£</span>
                                </div>
                                <Input type="number" onChange={this.updateAmount} value={this.state.amount}/>
                            </InputGroup>
                        </Col>
                        <Col sm={6}>
                            <Button color="success" onClick={this.addPayment('payment')}>Add Payment</Button>{' '}
                            <Button color="warning"
                                    onClick={this.addPayment('adjustment')}>{hasAdjustment ? 'Update Adjustment' : 'Add Adjustment'}</Button>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={3}>Note</Label>
                        <Col sm={9}>
                            <Input onChange={this.updateNote} value={this.state.note}/>
                        </Col>
                    </FormGroup>
                </td>
            </tr>
            <tr style={{borderBottom: 'solid black 3px'}}>
                <td></td>
                <td><b>Total:</b></td>
                <td><b><Currency
                    quantity={owed}
                    currency="GBP"
                /></b></td>
                <td><b><Currency
                    quantity={paid}
                    currency="GBP"
                /></b></td>
                <td><b><Currency
                    quantity={paid - owed}
                    currency="GBP"
                /></b></td>
            </tr>
        </React.Fragment>
    }

    render() {

        const event = this.props.Event.toJS();
        const bookings = this.props.bookings;
        const participants = this.props.bookings.reduce((r, b) => [...r, ...b.participants], []);

        this.getFeesOwed = fee[event.feeModel].getFeesOwed;

        this.totalOwed = 0;
        this.totalPaid = 0;

        const bookingRows = bookings.map(b => {
            return b.id === this.state.expanded ? this.openRow(b, event) : this.closedRow(b, event);
        });

        return (<Row>
            <Col>
                <h3>Money</h3>
                <Table striped size="sm">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Booking</th>
                        <th>Fees</th>
                        <th>Payments</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bookingRows}
                    <tr>
                        <td></td>
                        <td>
                            <b>Total</b>
                        </td>
                        <td>
                            <b><Currency
                                quantity={this.totalOwed}
                                currency="GBP"
                            /></b>
                        </td>
                        <td><b>
                            <Currency
                                quantity={this.totalPaid}
                                currency="GBP"
                            /></b>
                        </td>
                        <td><b>
                            <Currency
                                quantity={this.totalPaid - this.totalOwed}
                                currency="GBP"
                            /></b>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>);
    }
}


const nameSort = (a, b) => {
    var splitA = a.name.split(" ");
    var splitB = b.name.split(" ");
    var lastA = splitA[splitA.length - 1];
    var lastB = splitB[splitB.length - 1];

    if (lastA < lastB) return -1;
    if (lastA > lastB) return 1;
    return 0;
};
