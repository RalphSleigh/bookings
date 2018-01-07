import React from 'react'
import csv from 'csv-file-creator'
import ReactTable from 'react-table'
import Moment from 'moment'
import update from 'immutability-helper';

//import bookings from '../bookings'
//import { manageEventCheck } from '../permission.js'

import W from '../../../shared/woodcraft.js'

export default class Participants extends React.Component {

    constructor(props) {
        super(props);

        this.state = {expanded: null};

        this.exportCSV = this.exportCSV.bind(this);
        this.updateExpanded = this.updateExpanded.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        //rerendering the tables suck, lets not do it.
        if (this.state !== nextState) return true;
        return !this.props.Bookings.equals(nextProps.Bookings);
    }

    componentWillReceiveProps() {
        this.setState(update(this.state, {expanded: {$set: null}}));
    }

    exportCSV() {
        const data = this.props.Participants.toJS();
        const exportedData = data.map(p => [p.id,
            p.name,
            p.age,
            p.diet,
            p.dietExtra,
            p.medical]);
        const fileName = this.props.Event.get('name') + "-Participants-" + Moment().format('YYYY-MM-DD') + ".csv";
        csv(fileName, [['id', 'Name', 'Age', 'Diet', 'Requirements &  Allergies', 'Medical'], ...exportedData]);
    }

    updateExpanded(id) {
        return e => {
            if (id === this.state.expanded) this.setState(update(this.state, {expanded: {$set: null}}));
            else this.setState(update(this.state, {expanded: {$set: id}}));
        }
    }

    render() {

        //const event = this.props.Event.toJS();
        const bookings = this.props.Bookings.toJS();
        const participants = this.props.Participants.toJS();


        const groups = W.map(w => {
            const people = participants.filter((p) => p.age === '' ? false : w.filter(p.age));
            if (people.length === 0) return null;
            return (<h5 key={w.name}>{w.name}: {people.length}</h5>);
        });

        //const prows = participants.sort(nameSort).map(p => <tr key={p.id}><td>{p.name}</td><td>{p.age}</td><td>{p.diet}</td><td>{bookings.find(b => b.id === p.bookingId).userName}</td></tr>)

        const data = participants.sort(nameSort).map(p => {
            const b = bookings.find(b => b.id === p.bookingId);
            return {
                name: p.name,
                age: p.age ? parseInt(p.age) : "", //hack for now
                diet: p.diet,
                booked: b.userName,
                district: b.district,
                p: p,
                b: b,
                E: this.props.Event
            };
        });

        const columns = [{
            id: "name",
            accessor: row => row,
            Header: "Name",
            sortable: true,
            sortMethod: nameSort,
            Cell: row => row.value.name
        },
            {accessor: "district", Header: "District", sortable: true},
            {accessor: "age", Header: "Age", sortable: true},
            {accessor: "diet", Header: "Diet", sortable: true, minWidth: 70},
            {accessor: "booked", Header: "Booked By", sortable: true, minWidth: 50}];

        const expanded = {[this.state.expanded]: true};

        return (<div>
            <button className="button pull-right" onClick={this.exportCSV}>Export CSV</button>
            <h4>Total Participants: {participants.length}</h4>
            {groups}
            <ReactTable
                expanded={expanded}
                getTrProps={(state, rowInfo, column) => {
                    if (rowInfo) return {onClick: this.updateExpanded(rowInfo.viewIndex)};
                    return {}
                }}
                onSortedChange={this.updateExpanded(null)}
                onPageChange={this.updateExpanded(null)}
                SubComponent={subRow}
                data={data}
                columns={columns}
                showPageSizeOption={false}
                showPagination={true}/>
        </div>)
    }
}

const subRow = row => {

    const event = row.original.E.toJS();

    const village = event.villages.find(v => row.original.b.villageId === v.id);
    const organisation = event.organisations.find(o => row.original.b.organisationId === o.id);
    const attendance = event.partialDates === "presets" ? event.partialDatesData.find(d => d.mask === row.original.p.days) : null;

    return <div className="panel panel-success">
        <div className="panel-heading"><h3 className="panel-title">{row.original.name}</h3></div>
        <div className="panel-body">
            <div className="row">
                <div className="col-md-4">
                    {row.original.b.district ? <p><b>Group/District:</b> {row.original.b.district}</p> : null}
                    <p><b>Booking Contact:</b> {row.original.b.userName}</p>
                    <p><b>Booking Contact Phone:</b> {row.original.b.userContact}</p>
                    {village ? <p><b>Village:</b> {village.name}</p> : null}
                    {organisation ? <p><b>Organisation:</b> {organisation.name}</p> : null}
                    {attendance ? <p><b>Attendance:</b> {attendance.name}</p> : null}
                </div>
                <div className="col-md-4">
                    <p><b>Diet:</b> {row.original.diet} </p>
                    <p><b>Diet Info:</b></p><p>{row.original.p.dietExtra}</p>
                </div>
                <div className="col-md-4">
                    <p><b>Medical:</b></p><p>{row.original.p.medical}</p>
                </div>
            </div>
        </div>
    </div>
};


const nameSort = (a, b) => {
    var splitA = a.name.split(" ");
    var splitB = b.name.split(" ");
    var lastA = splitA[splitA.length - 1];
    var lastB = splitB[splitB.length - 1];

    if (lastA < lastB) return -1;
    if (lastA > lastB) return 1;
    return 0;
};

