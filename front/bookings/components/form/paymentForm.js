import React from 'react'
import ReactMarkdown from 'react-markdown'

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
} from 'reactstrap';

export default class PaymentForm extends React.Component {

    constructor(props) {
        super(props);

        this.selectPaymentType = this.selectPaymentType.bind(this);
    }

    selectPaymentType(e) {
        this.props.updateValidation();
        this.props.update("paymentType", e.target.value);
    }

    valid(item) {
        if (this.props.validating && (!item || item === "")) return false;
        return null;
    }

    render() {
        const radios = this.props.event.paymentTypes.map(p =>
            <FormGroup check inline key={p}>
                <Label check>
                    <Input type="radio" value={p}
                           onChange={this.selectPaymentType}
                           checked={this.props.chosen === p}/>
                    {p}
                </Label>
            </FormGroup>);


        return (<React.Fragment>
            <FormGroup row>
                <Label sm={2}>Payment Method:</Label>
                <Col sm={10} className="pt-2">
                    {radios}
                </Col>
            </FormGroup>
            <Row>
                <Col>
                    <ReactMarkdown escapeHtml={true} source={this.props.event.paymentInfo}/>
                </Col>
            </Row>
        </React.Fragment>);

    }
}