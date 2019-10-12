import React from 'react'
//This event has a flat per participant cost.

import {
    Button,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    InputGroup,
    InputGroupAddon,
    Card,
    CardBody,
    CardTitle,
    CardImg,
    CardImgOverlay,
    Table
} from 'reactstrap';

export const name = "flat";
export const selection = "Flat fee per participant";

export class Config extends React.Component {

    constructor(props) {
        super(props);

        this.update = this.update.bind(this);
    }

    update(e) {
        const fee = {amount: e.target.value}
        this.props.update(fee);
    }

    render() {

        const amount = this.props.fee.amount || "";

        return (<FormGroup row>
            <Label sm={3}>Fee per participant:</Label>
            <Col sm={9}>
                <InputGroup>
                    <div className="input-group-prepend">
                        <span className="input-group-text">£</span>
                    </div>
                    <Input type="number" className="form-control" placeholder="35" value={amount}
                           onChange={this.update}/>
                </InputGroup>
            </Col>
        </FormGroup>);
    }
}

export class BookingForm extends React.Component {

    render() {

        const participants = this.props.participants ? this.props.participants.length : 0
        const total = this.props.feeData.amount * participants


        return (<Row>
            <Col>
                <p>This event costs £{this.props.feeData.amount} per person.</p>
                <p>You have booked <b>{participants}</b> people for a total of <b>£{total}</b></p>
            </Col>
        </Row>);

    }
}

export class ThanksRow extends React.Component {

    render() {

        const participants = this.props.booking.participants ? this.props.booking.participants.length : 0
        const total = this.props.feeData.amount * participants


        return (<Row>
            <Col>
                <p>This event costs £{this.props.event.feeData.amount} per person.</p>
                <p>You have booked <b>{participants}</b> people for a total of <b>£{total}</b></p>
            </Col>
        </Row>);

    }
}