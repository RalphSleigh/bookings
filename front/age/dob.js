import React from 'react'

import DateTimePicker from 'react-widgets/lib/DateTimePicker'

import {
    Col,
    Label
} from 'reactstrap';
import W from "../../shared/woodcraft";
import Moment from "moment/moment";

const moment = require("moment");

/*
indvidual age widgets
 */

module.exports = {
    BookingFormWidget: props => {
        return <React.Fragment>
            <Label sm={2}>Date of Birth:</Label>
            <Col sm={3}>
                <DateTimePicker
                    value={props.age ? new Date(props.age) : null}
                    placeholder={'DD/MM/YYYY'}
                    onChange={props.updateAge}
                    editFormat={'DD/MM/YYYY'}
                    format={'DD/MM/YYYY'}
                    time={false}
                    inputProps={{className: 'form-control ' + props.valid, placeholder: 'DD/MM/YYYY'}}
                />
            </Col>
        </React.Fragment>
    },

    displayAgeParticipant: p => {
        return p.ageGroup + (p.ageAtStart < 21 ? ` (${p.ageAtStart})` : '');
    },

    displayAgeMoment: (age, event) => {
        const startDate = moment(event.startDate); //todo store this as a moment.
        const ageAtStart = startDate.diff(moment(age), 'years');
        const ageGroup = W.find(w => w.filter(ageAtStart)).singular;
        return ageGroup + (ageAtStart < 21 ? ` (${ageAtStart})` : '');
    },

    displayAgeCSV: p => {
        return p.age
    },

    participantCardField: p => {
        return <p><b>DOB: </b>{Moment(p.dob).format("DD/MM/YYYY")} - {p.age}</p>
    }
};