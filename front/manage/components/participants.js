import React from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'

//import bookings from '../bookings'
//import { manageEventCheck } from '../permission.js'

import W from '../../../shared/woodcraft.js'

export default class Participants extends React.Component {
	
  constructor(props) {
    super(props);
  }

  render() {

	const event = this.props.Event.toJS();
	const bookings = this.props.Bookings.toJS();
	const participants = this.props.Participants.toJS();


	const groups = W.map(w => {
			const people = participants.filter((p) => p.age === ''? false : w.filter(p.age));
			if(people.length === 0)return null;
			return (<h5 key ={w.name}>{w.name}: {people.length}</h5>);
		});

	const prows = participants.sort(nameSort).map(p => <tr key={p.id}><td>{p.name}</td><td>{p.age}</td><td>{bookings.find(b => b.id === p.bookingId).userName}</td></tr>)

	return (<div><h4>Total Participants: {participants.length}</h4>
							{groups}
							<table className="table">
								<thead>
									<tr>
										<th>Name</th>
										<th>Age</th>
										<th>Booked By:</th>
									</tr>
								</thead>
								<tbody>
								{prows}
								</tbody>
							</table>
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

