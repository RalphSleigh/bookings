import React from 'react'
import {connect} from 'react-redux'

import {applyEventCheck} from '../permission.js'
import {applyToBook} from '../actions.js'
import update from 'immutability-helper';

import {
    Button,
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    Form
} from 'reactstrap';


//Apply to be able to book an event

class ApplyPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {message: ''};

        this.apply = this.apply.bind(this);
        this.updateMessage = this.updateMessage.bind(this)
    }

    apply(e) {
        this.props.applyToBook({message: this.state.message, eventId: this.props.Event.get('id')});
        e.preventDefault();
    }

    updateMessage(e) {
        this.setState(update(this.state, {message: {$set: e.target.value}}));
        e.preventDefault();
    }

    render() {

        const event = this.props.Event.toJS();
        const user = this.props.User.toJS();

        return (<React.Fragment>
            <Row>
                <Col>
                    <h3>Apply to book for <b>{event.name}</b></h3>
                    <Form>
                        <FormGroup>
                            <Label>Hi {user.userName}, Please let us know below who you are booking for below: </Label>
                            <Input type="textarea" value={this.state.message || ''}
                                   onChange={this.updateMessage}/>
                        </FormGroup>
                        <Button color="primary"
                                onClick={this.apply}
                                disabled={this.state.message === ''}
                        >Submit</Button>
                    </Form>
                </Col>
            </Row>
        </React.Fragment>);
    }
}


const mapStateToProps = (state, props) => {
    const Event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]);
    const User = state.getIn(["User", "user"]);
    return {Event, User};
};

const mapDispatchToProps = {
    applyToBook: applyToBook,
};

const VisibleApplyPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(applyEventCheck(ApplyPage));

export default applyEventCheck(VisibleApplyPage);

