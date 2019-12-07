import React from 'react'
//import { StickyContainer, Sticky } from 'react-sticky';
import W from '../../../shared/woodcraft.js'
import {
    Row,
    Col,
} from 'reactstrap';

const moment = require("moment");

W.reverse();

export default class ParticipantsList extends React.Component {

    render() {

        const list = this.props.booking.participants.filter(p => p.name !== '' && p.age !== '' && p.diet !== '');
        const groups = W.map(w => {
            const people = list.filter((p) => p.age === '' ? false : w.filter(moment(this.props.event.startDate).diff(moment(p.age), 'years'))).map((p, k) =>
                <p
                    key={k}><a href={`#participant-${p.id}`}>{p.name}</a></p>);
            if (people.length === 0) return null;
            return (<div className="participantQuickList" key={w.name}>
                <h8>{w.name}: {people.length}</h8>
                {people}
            </div>);
        });


        return (<Col md={2}>
            <div className="sticky-top">
                <h7>Participants: {list.length}</h7>
                {groups}
            </div>
        </Col>);

    }

}	