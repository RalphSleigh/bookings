import React from 'react'

import {
    Row,
    Col,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

export default class PermissionForm extends React.Component {

    constructor(props) {
        super(props);

        this.updatePermission = this.updatePermission.bind(this);
        this.updateEmergency = this.updateEmergency.bind(this);
        this.updateNote = this.updateNote.bind(this);
        this.updateCampWith = this.updateCampWith.bind(this);
    }

    updatePermission() {
        this.props.updateValidation();
        this.props.update('permission', !this.props.permission);
    }

    updateEmergency(item) {
        return (e) => {
            this.props.updateValidation();
            this.props.update(item, e.target.value)
            e.preventDefault();
        }
    }

    updateCampWith(e) {
        this.props.updateValidation();
        this.props.update('campWith', e.target.value);
        e.preventDefault();
    }

    updateNote(e) {
        this.props.updateValidation();
        this.props.update('note', e.target.value);
        e.preventDefault();
    }

    valid(item) {
        if (this.props.validating && (!item || item === "")) return false;
        return null;
    }

    render() {

        const valid = "form-group";
        const invalid = "form-group has-error";

        const emergency = this.props.event.bigCampMode ? null :
            <React.Fragment>
                <Row>
                    <Col>
                        <h4>Emergency Contact</h4>
                        <p>Please provide details of someone we can contact in case of an emergency during the event (a
                            second
                            person is better even if you are not attending yourself)</p>
                    </Col>
                </Row>
                <FormGroup row>
                    <Label sm={2}>
                        Name:
                    </Label>
                    <Col sm={10}>
                        <Input type="text"
                               placeholder="Name"
                               value={this.props.emergencyName || ''}
                               valid={this.valid(this.props.emergencyName)}
                               onChange={this.updateEmergency("emergencyName")}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}>
                        Phone:
                    </Label>
                    <Col sm={10}>
                        <Input type="text"
                               placeholder="Phone number"
                               value={this.props.emergencyPhone || ''}
                               valid={this.valid(this.props.emergencyPhone)}
                               onChange={this.updateEmergency("emergencyPhone")}/>
                    </Col>
                </FormGroup>
            </React.Fragment>;


        const campWith = this.props.event.bigCampMode ?

            <FormGroup row>
                <Label sm={2}>
                    Are there any Groups/Districts you would like to camp
                    with?:
                </Label>
                <Col sm={10}>
                    <Input type="textarea"
                           value={this.props.campWith || ''}
                           onChange={this.updateEmergency("campWith")}/>
                </Col>
            </FormGroup> : null;

        return (<React.Fragment>
            {emergency}
            <Row>
                <Col>
                    <h4>Additional Information</h4>
                </Col>
            </Row>
            <FormGroup row>
                <Label sm={2}>
                    Anything else we need to know?:
                </Label>
                <Col sm={10}>
                    <Input type="textarea"
                           placeholder=""
                           value={this.props.note || ''}
                           onChange={this.updateNote}/>
                </Col>
            </FormGroup>
            {campWith}
            <Row>
                <Col>
                    <h4>Permission</h4>
                </Col>
            </Row>
            <FormGroup row>
                <Col sm={{size: 10, offset: 2}}>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" checked={!!this.props.permission}
                                   onChange={this.updatePermission}/>{' '}
                            I give permission for the people named above to
                            attend {this.props.event.name}<br/>######### TODO: Data protection statement
                            ############
                        </Label>
                    </FormGroup>
                </Col>
            </FormGroup>
        </React.Fragment>);
    }
}