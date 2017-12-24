import React from 'react'
import Moment from 'moment'
import update from 'immutability-helper';

//import bookings from '../bookings'
//import { manageEventCheck } from '../permission.js'

import W from '../../../shared/woodcraft.js'

export default class Applications extends React.Component {

    constructor(props) {
        super(props);
        this.state = {organisations: {}};

        this.approve = this.approve.bind(this);
        this.decline = this.decline.bind(this);
        this.setOrganisation = this.setOrganisation.bind(this);
    }

    approve(id) {
        return e => {

        }
    }

    decline(id) {
        return e => {

        }
    }

    setOrganisation(id) {
        return e => {
            this.setState(update(this.state, {organisations: {[id]: {$set: e.target.value}}}));
            e.preventDefault()
        }
    }

    render() {

        const event = this.props.Event.toJS();

        const apps = (event.applications || []).map(a => <ApplicationRow
            key={a.id}
            application={a}
            event={event}
            organisation={this.state.organisations[a.id]}
            approve={this.approve(a.id)}
            decline={this.decline(a.id)}
            setOrgainsation={this.setOrganisation(a.id)}
        />);

        return (<div>
            <h4>Approve or decline applications to book:</h4>
            {apps}
        </div>)
    }
}

const ApplicationRow = props => {

    let approveText = null;

    if (props.event.organisationsEnabled) {

        const options = props.event.organisations.map(o => <option key={o.id} value={o.id}>{o.name}</option>);

        approveText = <div className="form-group">
            <label htmlFor="orgSelect">Approve user to book into Organisation:</label>
            <select className="form-control" id="orgSelect" onChange={props.setOrganisation}>
                <option key={0} value={null}>Any</option>
                {options}
            </select>
        </div>;

    } else {
        approveText = <p>Approve user to book into this event:</p>
    }

    return (<div className="col-sm-12">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title"><b>{props.application.user.userName}</b> ({props.application.user.email})
                        - {Moment(props.application.createdAt).fromNow()}</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-7"><p>{props.application.message}</p></div>
                        <div className="col-sm-5">
                            {approveText}
                            <div className="btn-toolbar float-right">
                                <button type="submit" className="btn btn-success" onClick={props.approve}>Approve
                                </button>
                                <button type="submit" className="btn btn-danger" onClick={props.decline}>Decline
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


