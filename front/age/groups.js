import React from 'react'

import DateTimePicker from 'react-widgets/lib/DateTimePicker'

import {
    Col,
    Label,
    Input
} from 'reactstrap';
import W from "../../shared/woodcraft";
import Moment from "moment/moment";

const moment = require("moment");

/*
indvidual age widgets
 */

export default {
    BookingFormWidget: props => {

        const options = W.map((w, i) => <option key={i} value={w.singular}>{w.singular}</option>);
        let ageGroup = '';

        if (props.age) {
            const ageAtStart = Moment(props.event.startDate).diff(moment(props.age), 'years');
            ageGroup = W.find(w => w.filter(ageAtStart)).singular;
        }

        const onChange = e => {

            if (e.target.value === '') return props.updateAge(null);
            const ageGroup = W.find(w => w.singular === e.target.value);
            props.updateAge(ageGroup.getAge(props.event));
        };

        return <React.Fragment>
            <Label sm={2}>Age:</Label>
            <Col sm={3}>
                <Input
                    type="select"
                    value={ageGroup}
                    onChange={onChange}
                    className={props.valid}>
                    <option value={''}>Please Select</option>
                    {options}
                </Input>
            </Col>
        </React.Fragment>
    },

    displayAgeParticipant: p => {
        return p.ageGroup;
    },

    displayAgeMoment: (age, event) => {
        const startDate = moment(event.startDate); //todo store this as a moment.
        const ageAtStart = startDate.diff(moment(age), 'years');
        const ageGroup = W.find(w => w.filter(ageAtStart)).singular;
        return ageGroup;
    },

    displayAgeCSV: p => {
        return p.age
    },

    participantCardField: p => {
        return <p><b>Age: </b>{p.age}</p>
    }
};