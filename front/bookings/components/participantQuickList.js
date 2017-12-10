import React from 'react'
//import { StickyContainer, Sticky } from 'react-sticky';
import W from '../../../shared/woodcraft.js'

W.reverse();

export default class ParticipantsList extends React.Component {

	render() {

		const list = this.props.booking.participants
		const groups = W.map(w => {
			const people = list.filter((p) => p.age === '' ? false : w.filter(p.age)).map((p, k) => <p key={k}>{p.name}</p>);
			if (people.length === 0) return null;
			return (<div className="participantQuickList" key={w.name}>
				<h4>{w.name}: {people.length}</h4>
				{people}
			</div>);
		});

		return (<div className="hidden-sm-down col-md-2" style={{ alignItems: "stretch" }}>
				<div style={{ position:'sticky', top: '20px'}}>
					<h3>Participants Added: {list.length}</h3>
					{groups}
			</div>
		</div>)
	}

}	