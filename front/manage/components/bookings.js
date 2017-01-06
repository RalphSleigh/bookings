import React from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'

//import bookings from '../bookings'
//import { manageEventCheck } from '../permission.js'

import W from '../../../shared/woodcraft.js'

export default class Bookings extends React.Component {
	
  constructor(props) {
    super(props);
  }

  render() {

	const event = this.props.Event.toJS();
	const bookings = this.props.Bookings.toJS();
	const participants = this.props.Participants.toJS();

	const brows = bookings.map(b => <tr key={b.id}><td>{b.userName}</td>
										<td>{b.userEmail}</td>
										<td>{b.userContact}</td>
										<td>{b.participants.length}</td>
										<td>{b.updatedAt}</td>
									</tr>)

	return (<div><h4>Total Bookings: {bookings.length}</h4>

							<table className="table">
								<thead>
									<tr>
										<th>Name</th>
										<th>e-mail</th>
										<th>Contact</th>
										<th>Participants booked</th>
										<th>Updated</th>
									</tr>
								</thead>
								<tbody>
								{brows}
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

