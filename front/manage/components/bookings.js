import React from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import Reactable from 'reactable'
import Moment from 'moment'

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

	/*const brows = bookings.map(b => <tr key={b.id}><td>{b.userName}</td>
										<td>{b.userEmail}</td>
										<td>{b.userContact}</td>
										<td>{b.participants.length}</td>
										<td>{b.paymentType}</td>
										<td>{b.updatedAt}</td>
									</tr>)
*/
	const data = bookings.map(b => {
		let result = {userName:b.userName,
			userEmail:b.userEmail,
			userContact:b.userContact,
			paymentType:b.paymentType};

		result.participants = b.participants.length;
		result.updatedAt = Moment(b.updatedAt).format('L');


		return result
	});
	const columns = [{key:"userName", label:"Name"},
					{key:"userEmail", label:"e-mail"},
					{key:"userContact", label:"Contact"},
					{key:"participants", label:"Booked"},
					{key:"paymentType", label:"Payment Method"},
					{key:"updatedAt", label:"Updated"}
	]
	const sortables=[{column:"userName", sortFunction:nameSort},"userEmail","userContact","participants","paymentType","updatedAt"];

	return (<div><h4>Total Bookings: {bookings.length}</h4>
		 
		 		<Reactable.Table className="table sortArrows" data={data} sortable={sortables} columns={columns}/>
							{/*<table className="table">
								<thead>
									<tr>
										<th>Name</th>
										<th>e-mail</th>
										<th>Contact</th>
										<th>Participants booked</th>
										<th>Payment Method</th>
										<th>Updated</th>
									</tr>
								</thead>
								<tbody>
								{brows}
								</tbody>
							</table>}*/}
	</div>)
  }
}





const nameSort = (a, b) => {
    var splitA = a.split(" ");
    var splitB = b.split(" ");
    var lastA = splitA[splitA.length - 1];
    var lastB = splitB[splitB.length - 1];

    if (lastA < lastB) return -1;
    if (lastA > lastB) return 1;
    return 0;
};

