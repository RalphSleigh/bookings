import React from 'react'
import attendance from '../../../attendance'
import {ParticipantWidget} from "../../../attendance/presets";

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

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes'

export default class ParticipantsForm extends React.Component {

    constructor(props) {
        super(props);

        this.add = this.add.bind(this);
        this.valid = this.valid.bind(this);
    }

    add(e) {
        this.props.add();
        e.preventDefault();
    }

    //I hope you like curry
    update(k) {
        return item => e => {
            this.props.updateValidation();
            this.props.update(k, item, e.target.value);
            e.preventDefault();
        }
    }

    delete(k) {
        return (e) => {
            this.props.delete(k);
            e.preventDefault();
        }
    }

    valid(item) {
        const valid = "";
        const invalid = "has-error";

        if (this.props.validating && (!item || item === "")) return invalid;
        return valid;
    }

    render() {

        const participants = this.props.participants;

        const AttendanceWidget = attendance[this.props.event.partialDates].ParticipantWidget;


        let rows = participants.map((p, i) => <ParticipantRow key={p.id}
                                                              index={i}
                                                         {...p}
                                                         update={this.update(p.id)}
                                                         delete={this.delete(p.id)}
                                                         valid={this.valid}
                                                         event={this.props.event}
                                                         AttendanceWidget={AttendanceWidget}/>);
        return (<React.Fragment>
                {rows}
                <Row className="mb-3">
                    <Col>
                        <Button color="info" onClick={this.add}>More People!</Button>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

const ParticipantRow = (props) => {

    //{props.validating ? props.name === "" || props.age === "" || props.diet === "" ? invalid : valid : valid}

    const attendance = <props.AttendanceWidget days={props.days} event={props.event} update={props.update("days")}/>;

    return (<Card className="mb-3">
        <CardImg top src="/participant-header.jpg" alt="Card image cap"/>
        <CardImgOverlay>
            <CardTitle style={{marginTop: "-0.85em", marginLeft: "-0.60em"}}>#{props.index + 1}</CardTitle>
        </CardImgOverlay>
        <CardBody>
            <FormGroup row>
                <Label sm={2}>Name:</Label>
                <Col sm={10}>
                    <Input type="text"
                           value={props.name || ''}
                           onChange={props.update("name")}
                           vaild={props.valid(props.name)}
                           placeholder="Name"/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={2}>Date of Birth:</Label>
                <Col sm={3}>
                    <Input type="date"
                           className={props.valid(props.age)}
                           value={props.age || ''}
                           onChange={props.update("age")}
                    />
                </Col>
                <Label sm={1}>Diet:</Label>
                <Col sm={3}>

                    <Input type="select" value={props.diet || ''}
                           onChange={props.update("diet")}
                           vaild={props.valid(props.diet)}>
                        <option>Please Select</option>
                        <option value="omnivore">Omnivore</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={3}>Additional dietary requirement or food related allergies:</Label>
                <Col sm={9}>
                    <Input type="textarea"
                           value={props.dietExtra || ''}
                           onChange={props.update("dietExtra")}
                           rows="3"/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={3}>Additional medical information &amp; medication taken:</Label>
                <Col sm={9}>
                    <Input type="textarea"
                           value={props.medical || ''}
                           onChange={props.update("medical")}
                           rows="3"/>
                </Col>
            </FormGroup>
            <FormGroup row>
                {attendance}
                <Col sm={1}>
                    <Button type="submit" onClick={props.delete} color="warning">
                        <span style={{color: 'white'}}><FontAwesomeIcon icon={faTimes}/></span>
                    </Button>
                </Col>
            </FormGroup>
        </CardBody>
    </Card>)
};