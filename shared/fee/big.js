import React from 'react'
import Moment from 'moment'
import update from 'immutability-helper';
import cloneDeep from "lodash/cloneDeep";
import map from 'lodash/map';
import reduce from 'lodash/reduce';
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
        this.update = this.update.bind(this);
        this.updateAmount = this.updateAmount.bind(this);
        this.updateAmountPartial = this.updateAmountPartial.bind(this);

        if (!this.props.fee.woodchips) this.props.update({
            buckets: [{
                id: "bucket" + bucketKey,
                date: new Date(),
                amount: 0
            }], woodchips: 0.5, cancel: 50
        });
        bucketKey++;
    }

    update(field) {
        return e => {
            this.props.update(update(this.props.fee, {[field]: {$set: e.target.value}}));
            e.preventDefault();
        }
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
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {bucketRows}
                        </tbody>
                    </Table>
                    <Button onClick={this.addBucket}>Add Bucket</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup row>
                        <Label sm={4}>Woodchip Multiplier</Label>
                        <Col sm={2}>
                            <InputGroup>
                                <Input type="number" className="form-control" placeholder="0.5"
                                       value={this.props.fee.woodchips}
                                       onChange={this.update('woodchips')}/>
                            </InputGroup>
                        </Col>
                        <Label sm={4}>Cancellation Fee:</Label>
                        <Col sm={2}>
                            <InputGroup>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">£</span>
                                </div>
                                <Input type="number" className="form-control" placeholder="50"
                                       value={this.props.fee.cancel}
                                       onChange={this.update('cancel')}/>
                            </InputGroup>
                        </Col>
                    </FormGroup>
                </Col>
            </Row>
        </React.Fragment>)
    }
}

export class BookingForm extends React.Component {

    render() {

        //this.props.participants
        //this.props.event.startDate

        //this.props.feeData.amount
        //
        const feesOwed = getFeesOwed(this.props.event, this.props.participants);
        const tableLines = feesOwed.map(l => <tr key={l.line}>
            <td>{l.line}</td>
            <td>£{l.total}</td>
        </tr>);

        return (<Row>
            <Col>
                <Table>
                    <thead></thead>
                    <tbody>{tableLines}
                    <tr>
                        <td><b>Total:</b></td>
                        <td><b>£{feesOwed.reduce((a, c) => {
                            return a + c.total
                        }, 0)}</b></td>
                </tr>
                </tbody>
                </Table>
            </Col>
        </Row>)
    }
}

const isWoodchip = (e, p) => {

    return moment(e.startDate).diff(moment(p.age), 'years') < 6
};

const getFeeForBucket = (bucket, event, participant) => {

    if (event.partialDates === 'whole' || !event.partialDatesData) {
        return bucket.amount * (isWoodchip(event, participant) ? event.feeData.woodchips : 1)
    } else {
        const attendanceName = event.partialDatesData.find(d => d.mask === participant.days).name;
        return bucket.amount[attendanceName] * (isWoodchip(event, participant) ? event.feeData.woodchips : 1);
    }
};

export function getFeesOwed(event, participants) {

    const sortedBuckets = event.feeData.buckets.sort((a, b) => a.date < b.date ? 1 : a.date === b.date ? 0 : -1);

    const rawCosts = participants
        .filter(p => p.name !== '' && p.age !== '' && p.diet !== '')
        .map(p => {
            if (!p.updatedAt) p.updatedAt = Moment().format("YYYY-MM-DD");
            return p;
        })
        .map(p => sortedBuckets.reduce((a, c) => {
            if (p.updatedAt < c.date) return {
                type: isWoodchip(event, p) ? 'woodchip' : 'normal',
                date: c.date,
                amount: getFeeForBucket(c, event, p)
            };
            else return a;
        }, {}));

    const combinedCosts = rawCosts.reduce((a, c) => {
        a[c.date] = a[c.date] ? a[c.date] : {};
        if (a[c.date][c.type]) {
            a[c.date][c.type].count++;
        } else {
            a[c.date][c.type] = {count: 1, amount: c.amount};
        }
        return a;
    }, {});

    const costLines = reduce(combinedCosts, (a, c, i) => [...a, ...map(c, (l, t) => {
        if (t === 'normal') return {
            line: `${l.count} ${l.count > 1 ? 'people' : 'person'} booked before ${i} at £${l.amount}`,
            total: l.count * l.amount
        };
        else return {
            line: `${l.count} ${l.count > 1 ? 'woodchips' : 'woodchip'} booked before ${i} at £${l.amount}`,
            total: l.count * l.amount
        }
    })], []);

    return costLines;
}