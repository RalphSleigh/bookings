import React from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import csv from 'csv-file-creator'
import ReactTable from 'react-table'

//import bookings from '../bookings'
//import { manageEventCheck } from '../permission.js'

import W from '../../../shared/woodcraft.js'

export default class Participants extends React.Component {

	constructor(props) {
		super(props);

		this.exportCSV = this.exportCSV.bind(this);
	}

	exportCSV() {
		const data = this.props.Participants.toJS();
		const exportedData = data.map(p => [p.id,
		p.name,
		p.age,
		p.diet,
		p.dietExtra,
		p.medical]);
		csv("test.csv", exportedData);
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
			let result = {
				name: p.name,
				age: parseInt(p.age), //hack for now
				diet: p.diet,
				booked: bookings.find(b => b.id === p.bookingId).userName
			};
			return result;
		});

		const columns = [{ accessor: "name", header: "Name", sortable: true },
		{ accessor: "age", header: "Age", sortable: true },
		{ accessor: "diet", header: "Diet", sortable: true, minWidth: 70 },
		{ accessor: "booked", header: "Booked By", sortable: true, minWidth: 50 }];

		return (<div>
			<button className="button pull-right" onClick={this.exportCSV}>Export CSV</button>
			<h4>Total Participants: {participants.length}</h4>
			{groups}
			<ReactTable
				data={data}
				columns={columns}
				defaultPageSize={-1}
				showPageSizeOption={false}
				showPagination={false} />
		</div>)
	}
}



const nameSort = (a, b) => {
	var splitA = a.name.split(" ");
	var splitB = b.name.split(" ");
	var lastA = splitA[splitA.length - 1];
	var lastB = splitB[splitB.length - 1];

	if (lastA < lastB) return -1;
	if (lastA > lastB) return 1;
	return 0;
};

