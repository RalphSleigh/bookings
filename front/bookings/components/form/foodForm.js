import React from 'react'

import {
    Button,
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    Card,
    CardBody,
    CardTitle,
    CardImg,
    CardImgOverlay
}             from 'reactstrap';
import update from "immutability-helper/index";

export default class FoodForm extends React.Component {

    constructor(props) {
        super(props);

        this.updateChecked = this.updateChecked.bind(this);
    }

    updateChecked(e) {
        this.props.update('foodOptOut', e.target.checked);
    }

    render() {
        return (<React.Fragment>
            <FormGroup row>
                <Label sm={2}>Central Food Optout:</Label>
                <Col sm={10}>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" checked={!!this.props.booking.externalExtra.foodOptOut}
                                   onChange={this.updateChecked}/>{' '}
                            This is a very scary warning about the consquenses of invoking said checkbox..
                            <br/>
                            <img src="https://i.imgur.com/9pSh5Xi.jpg"/>
                        </Label>
                    </FormGroup>
                </Col>
            </FormGroup>
        </React.Fragment>);

    }
}