import React from 'react'
import Moment from 'moment'
import update from 'immutability-helper';
import cloneDeep from "lodash/cloneDeep";
//this implements a pricing policy for large camps

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes'

import {
    Row,
    Col,
    FormGroup,
    Input,
    Table,
    InputGroup,
    Button,
    Label
} from 'reactstrap';

let bucketKey = parseInt(Math.random() * 10000);

import moment from 'moment';

export const name = "big";
export const selection = "Big Camp Pricing Policy";

export class Config extends React.Component {

    constructor(props) {
        super(props);

        this.addBucket = this.addBucket.bind(this);
        this.deleteBucket = this.deleteBucket.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.updateAmount = this.updateAmount.bind(this);
        this.updateAmountPartial = this.updateAmountPartial.bind(this);
    }

    updateDate(id) {
        return e => {
            const buckets = cloneDeep(this.props.fee.buckets);
            buckets.forEach(b => {
                if (b.id === id) b.date = e.target.value;
            });
            this.props.update(update(this.props.fee, {buckets: {$set: buckets}}));
            e.preventDefault();
        }
    }

    updateAmount(id) {
        return e => {
            const buckets = cloneDeep(this.props.fee.buckets);
            buckets.forEach(b => {
                if (b.id === id) b.amount = e.target.value;
            });
            this.props.update(update(this.props.fee, {buckets: {$set: buckets}}));
            e.preventDefault();
        }
    }

    updateAmountPartial(id) {
        return o => {
            return e => {
                const buckets = cloneDeep(this.props.fee.buckets);
                buckets.forEach(b => {
                    if (b.id === id) {
                        b.amount = typeof(b.amount) !== 'object' ? {} : b.amount;
                        b.amount[o] = e.target.value;
                    }
                });

                this.props.update(update(this.props.fee, {buckets: {$set: buckets}}));
                e.preventDefault();
            }
        }
    }

    addBucket(e) {
        const buckets = [...(this.props.fee.buckets || [])];
        buckets.push({id: "bucket" + bucketKey, date: new Date(), amount: 0});
        bucketKey++;
        this.props.update(update(this.props.fee, {buckets: {$set: buckets}}));
        e.preventDefault();
    }

    deleteBucket(id) {
        return e => {
            const buckets = cloneDeep(this.props.fee.buckets).filter(b => b.id !== id);
            this.props.update(update(this.props.fee, {buckets: {$set: buckets}}));
            e.preventDefault();
        }
    }

    render() {
        //Thou shalt not ever use JS numbers for currency...
        const dateBuckets = this.props.fee.buckets || [];

        const bucketRows = dateBuckets.map(b => {

            const feeBoxes = (this.props.event.partialDates === 'whole' || !this.props.event.partialDatesData) ?
                <FormGroup>
                    <InputGroup>
                        <div className="input-group-prepend">
                            <span className="input-group-text">£</span>
                        </div>
                        <Input type="number" className="form-control" placeholder="35" value={b.amount}
                               onChange={this.updateAmount(b.id)}/>
                    </InputGroup>
                </FormGroup> :
                <React.Fragment>
                    {this.props.event.partialDatesData.map(o => <FormGroup key={o.id} row>
                        <Label sm={6}>{o.name}</Label>
                        <Col sm={6}>
                            <InputGroup>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">£</span>
                                </div>
                                <Input type="number" className="form-control" placeholder="35"
                                       value={b.amount[o.name] || 0}
                                       onChange={this.updateAmountPartial(b.id)(o.name)}/>
                            </InputGroup>
                        </Col>
                    </FormGroup>)}
                </React.Fragment>;

            return <tr key={b.id}>
                <td><Input type="date" onChange={this.updateDate(b.id)} value={Moment(b.date).format("YYYY-MM-DD")}/>
                </td>
                <td>{feeBoxes}</td>
                <td>
                    <Button onClick={this.deleteBucket(b.id)} color="warning">
                        <span style={{color: 'white'}}><FontAwesomeIcon icon={faTimes}/></span>
                    </Button>
                </td>
            </tr>
        });

        return (<React.Fragment>
            <Row>
                <Col>
                    <h4>Date buckets</h4>
                    <Table>
                        <thead>
                        <tr>
                            <th>Up Until Date</th>
                            <th>Fee</th>
                            <ht></ht>
                        </tr>
                        </thead>
                        <tbody>
                        {bucketRows}
                        </tbody>
                    </Table>
                    <Button onClick={this.addBucket}>Add Bucket</Button>
                </Col>
            </Row>
        </React.Fragment>)
    }
}

export class BookingForm extends React.Component {

    render() {

        const accompanied = this.props.participants.find(p => moment(this.props.event.startDate).diff(moment(p.age), 'years') > 15) === undefined ? false : true;

        const amount = this.props.feeData.amount;
        const unaccompanied = amount === 35 ? 50 : amount * 1.5;
        const unaccompaniedDiscount = amount === 35 ? 25 : amount * 0.75;
        const discount = amount === 35 ? 20 : amount * 0.5;

        const total = this.props.participants.length * Math.round(accompanied ? amount : unaccompanied);
        const totalDiscounted = this.props.participants.length * Math.round(accompanied ? discount : unaccompaniedDiscount);

        return (<div className="col-sm-12">
            <table className="table">
                <thead>
                <tr>
                    <th></th>
                    <th>Suggested Donation</th>
                    <th>Discounted Donation</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Unaccompanied Elfins, Pioneers &amp; Venturers</td>
                    <td>£{Math.round(unaccompanied)}</td>
                    <td>£{Math.round(unaccompaniedDiscount)}</td>
                </tr>
                <tr>
                    <td>Elfins, Pioneers &amp; Venturers accompanied by a responsible adult, DFs and Adults</td>
                    <td>£{Math.round(amount)}</td>
                    <td>£{Math.round(discount)}</td>
                </tr>
                <tr>
                    <td><b>My
                        Booking</b> ({this.props.participants.length} {this.props.participants.length < 2 ? "person" : "people"}, {accompanied ? "Accompanied" : "Unaccompanied"})
                    </td>
                    <td><b>£{total}</b></td>
                    <td><b>£{totalDiscounted}</b></td>
                </tr>
                </tbody>
            </table>
            <p>In order for us to utilise Gift Aid the camp price has been changed to a suggested donation. If you have
                the means to donate more than the donations listed above then please do so as this will allow us to
                further subsidise poorer individuals and families. The <b>discounted donation</b> is offered to all
                families/individuals where there is no wage earner and/or the family/individual is on a low wage. This
                would include DFs and students as well as adults and families. Cost should never be a reason for people
                being unable to attend camp so please contact us if you need further discount. Please make cheques
                payable to Ealing District Woodcraft Folk.</p>
        </div>)
    }
}