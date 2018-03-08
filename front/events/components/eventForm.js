import React from 'react'
import Moment from 'moment'
import Switch from 'react-toggle'
import update from 'immutability-helper';
import map from 'lodash/map'
import fee from '../../fee'
import attendance from '../../attendance'
import OrgansationForm from './organisationForm.js'
import cloneDeep from "lodash/cloneDeep";
import {
    Button,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Card,
    CardBody,
    CardTitle,
    CardImg,
    CardImgOverlay
} from 'reactstrap';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faLockOpen from '@fortawesome/fontawesome-free-solid/faLockOpen'
import faLock from '@fortawesome/fontawesome-free-solid/faLock'


export default class EditForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.state.event = this.props.event;
        this.state.delete = false;

        this.state.event.bookingPolicy = this.state.event.bookingPolicy || 'guest';
        this.state.event.partialDates = this.state.event.partialDates || 'whole';
        this.state.event.organisations = this.state.event.organisations || [];

        this.update = this.update.bind(this);
        this.updateData = this.updateData.bind(this);
        this.updateChecked = this.updateChecked.bind(this);
        this.updatePaymentOptions = this.updatePaymentOptions.bind(this);

        this.clickDeleteLock = this.clickDeleteLock.bind(this);
        this.clickDelete = this.clickDelete.bind(this);
        this.clickSave = this.clickSave.bind(this);
    }

    update(item) {
        return e => {
            this.setState(update(this.state, {event: {[item]: {$set: e.target.value}}}));
        }
    }

    updateData(item) {
        return data => {
            this.setState(update(this.state, {event: {[item]: {$set: data}}}));
        }
    }

    updateChecked(item) {
        return e => {
            this.setState(update(this.state, {event: {[item]: {$set: e.target.checked}}}));
        }
    }

    updatePaymentOptions(e) {
        this.setState(update(this.state, {event: {paymentTypes: {$set: e.target.value.split("\n")}}}));
    }

    clickDeleteLock(e) {
        this.setState({delete: !this.state.delete});
        e.preventDefault();
    }

    clickDelete(e) {
        this.props.deleteEvent({id: this.props.event.id});
        e.preventDefault();
    }

    clickSave(e) {
        const state = cloneDeep(this.state.event);
        state.organisations = state.organisations.map(o => {
            if (typeof o.id === "string") delete o.id;
            return o;
        }); //remove temp ids
        this.props.saveEvent(state);
        e.preventDefault();
    }

    render() {

        const feeOptions = map(fee, f => <option value={f.name} key={f.name + "key"}>{f.selection}</option>);
        const attendanceOptions = map(attendance, a => <option value={a.name}
                                                               key={a.name + "key"}>{a.selection}</option>);

        const FeeConfig = fee[this.state.event.feeModel].Config;

        const AttendanceConfig = attendance[this.state.event.partialDates].Config;

        let attendanceFields = null;

        if (this.state.event.partialDates !== 'whole') attendanceFields = (
            <FormGroup row>
                <Label sm={2}>Attendance Options:</Label>
                <Col sm={10}>
                    <AttendanceConfig data={this.state.event.partialDatesData}
                                      update={this.updateData('partialDatesData')}/>
                </Col>
            </FormGroup>);

        let paymentFields = null;
        let feeOptionFields = null;

        if (this.state.event.feeModel !== "free") {

            feeOptionFields = (
                <FormGroup row>
                    <Label sm={2}>Fee Options:</Label>
                    <Col sm={10}>
                        <FeeConfig fee={this.state.event.feeData} update={this.updateData('feeData')}/>
                    </Col>
                </FormGroup>);

            const options = this.state.event.paymentTypes.join("\n");
            paymentFields = (<React.Fragment>
                {formField("textarea", "Payment Options:", options, this.updatePaymentOptions)}
                {formField("textarea", "Payment Instructions:", this.state.event.paymentInfo, this.update("paymentInfo"))}
            </React.Fragment>);
        }

        let organisationForm = this.state.event.organisationsEnabled ?

            <Row>
                <Col sm={2}>
                    <Label>Organisations:</Label>
                </Col>
                <Col sm={10}>
                    <OrgansationForm orgs={this.state.event.organisations} update={this.updateData('organisations')}/>
                </Col>
            </Row> : null;

        let deleteButtons = this.props.new ? null : [<Button key="deletelock"
                                                             type="submit"
                                                             disabled={!this.state.delete}
                                                             onClick={this.clickDelete}
                                                             className="float-right"
                                                             color="danger">
            Delete</Button>,
            <Button key="delete"
                    className="float-right mr-1"
                    type="submit"
                    color="danger"
                    onClick={this.clickDeleteLock}>
                <span style={{color: 'white'}}><FontAwesomeIcon icon={!this.state.delete ? faLockOpen : faLock}/></span>
            </Button>];


        return (<Row>
            <Col>
                <Form>
                    {formField("text", "Name:", this.state.event.name, this.update("name"), "Event Name")}
                    {formField("textarea", "Description:", this.state.event.description, this.update("description"))}
                    {formField("date", "Start Date:", Moment(this.state.event.startDate).format("YYYY-MM-DD"), this.update("startDate"))}
                    {formField("date", "End Date:", Moment(this.state.event.endDate).format("YYYY-MM-DD"), this.update("endDate"))}
                    {formField("date", "Booking Deadline:", Moment(this.state.event.bookingDeadline).format("YYYY-MM-DD"), this.update("bookingDeadline"))}
                    <FormGroup>
                        <Label>Booking Policy:</Label>
                        <Input type="select" value={this.state.event.bookingPolicy}
                               onChange={this.update('bookingPolicy')}>
                            <option value={'guest'} key={'guest'}>Guest</option>
                            <option value={'registered'} key={'registered'}>Registered</option>
                            <option value={'approved'} key={'approved'}>Approved</option>
                        </Input>
                    </FormGroup>
                    <FormGroup row>
                        <Label xs={2}>Big Camp Mode:</Label>
                        <Col xs={10} className="mt-1">
                            <Switch checked={!!this.state.event.bigCampMode}
                                    onChange={this.updateChecked('bigCampMode')}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label xs={2}>Enable Organisations:</Label>
                        <Col xs={10} className="mt-1">
                            <Switch checked={!!this.state.event.organisationsEnabled}
                                    onChange={this.updateChecked('organisationsEnabled')}/>
                        </Col>
                    </FormGroup>
                    {organisationForm}
                    <FormGroup>
                        <Label>Attendance Policy:</Label>
                        <Input type="select" value={this.state.event.partialDates}
                               onChange={this.update('partialDates')}>
                            {attendanceOptions}
                        </Input>
                    </FormGroup>
                    {attendanceFields}
                    <FormGroup>
                        <Label>Fee Structure:</Label>
                        <Input type="select" value={this.state.event.feeModel} onChange={this.update('feeModel')}>
                            {feeOptions}
                        </Input>
                    </FormGroup>
                    {feeOptionFields}
                    {paymentFields}
                    <Row>
                        <Col>
                            <Button color="success" onClick={this.clickSave}>Save</Button>
                            {deleteButtons}
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>);
    }
}

const formField = (type, label, value, update, placeholder = null) => (<FormGroup>
    <Label for={label}>{label}</Label>
    <Input type={type} name={label} placeholder={placeholder} value={value || ''} onChange={update}/>
</FormGroup>);