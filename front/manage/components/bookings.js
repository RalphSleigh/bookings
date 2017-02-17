import React from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import ReactTable from 'react-table'
import Moment from 'moment'
import Switch from 'react-toggle'

//import bookings from '../bookings'
//import { manageEventCheck } from '../permission.js'


import W from '../../../shared/woodcraft.js'

export default class Bookings extends React.Component {
	
  constructor(props) {
    super(props);

	this.markPaid = this.markPaid.bind(this);
  }

  markPaid(id) {
  return (e) => {
	this.props.togglePaid(id);
  	}
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
		let result = {
			userName:b.userName,
			userEmail:b.userEmail,
			userContact:b.userContact,
			paymentType:b.paymentType,
			paid:b.paid,
			id:b.id};

			result.participants = b.participants.length;
			result.updatedAt = Moment(b.updatedAt).format('L');


		return result
	});

	const columns = [{accessor:"userName", header:"Name", sortable:true},
					{accessor:"userEmail", header:"e-mail", sortable:true},
					{accessor:"userContact", header:"Contact", sortable:true},
					{accessor:"participants", header:"Booked", sortable:true},
					{accessor:"paymentType", header:"Payment Method", sortable:true},
					{id:"paidToggle",
					 accessor:b => {return {id:b.id, paid:b.paid}},
					 header:"Mark Paid",
					 render: props =>{
						 return(<input type="checkbox" checked={props.value.paid} onChange={this.markPaid(props.value.id)}/>)}
					},
					{accessor:"updatedAt", header:"Updated", sortable:true}
	]
	//const sortables=[{column:"userName", sortFunction:nameSort},"userEmail","userContact","participants","paymentType","updatedAt"];

	return (<div><h4>Total Bookings: {bookings.length}</h4>

		 		<ReactTable 
				 data={data}
				 columns={columns}
				 showPagination={false}/>
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

