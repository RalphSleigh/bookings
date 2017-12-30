import React from 'react'
import update from 'immutability-helper';
import {Typeahead} from 'react-bootstrap-typeahead';

//import bookings from '../bookings'
//import { manageEventCheck } from '../permission.js'

import W from '../../../shared/woodcraft.js'

export default class Roles extends React.Component {

    constructor(props) {
        super(props);
        this.state = {org: null, village: null, user: ''};

        this.updateOption = this.updateOption.bind(this);
    }

    componentWillMount() {
        this.props.getUserList();
    }

    updateOption(section) {
        return e => {
            this.setState(update(this.state, {[section]: {$set: e.target.value}}));
            e.preventDefault()
        }
    }

    render() {

        const event = this.props.Event.toJS();

        const globalRoles = event.roles.filter(r => r.villageId === null && r.organisationId === null);

        globalRoles.unshift({id: 0, name: "Owner", user: event.user});

        const globalRows = globalRoles.map(r => <tr key={r.id}>
            <td>{r.user.userName}</td>
            <td>{r.name}</td>
        </tr>);

        const orgRoles = event.roles.filter(r => r.organisationId !== null);
        const orgRows = orgRoles.map(r => <tr key={r.id}>
            <td>{r.user.userName}</td>
            <td>{r.name}</td>
            <td>{r.organisation.name}</td>
        </tr>);

        const villageRoles = event.roles.filter(r => r.villageId !== null);
        const villageRows = villageRoles.map(r => <tr key={r.id}>
            <td>{r.user.userName}</td>
            <td>{r.name}</td>
            <td>{r.village.name}</td>
        </tr>);

        const orgOptions = event.organisations.map(o => <option key={o.id} value={o.id}>{o.name}</option>);
        const villageOptions = event.villages.map(v => <option key={v.id} value={v.id}>{v.name}</option>);

        return (<div>
            <h3>Event Roles</h3>
            <p>Here you can assign roles to other users so they can help you administer the event</p>
            <form className="form-horizontal">
                <div className="form-group">

                    <div className="col-sm-4">
                        <label className="control-label">User:</label>
                        <input type="text"
                               value={this.state.user}
                               onChange={this.updateOption("name")}
                               className="form-control"
                               placeholder="Name"/>
                    </div>

                    <div className="col-sm-3">
                        <label className="control-label">Organisation:</label>
                        <select value={this.state.org} onChange={this.updateOption("org")} className="form-control">
                            <option value={null}>All</option>
                            {orgOptions}
                        </select>
                    </div>

                    <div className="col-sm-3">
                        <label className="control-label">Village:</label>
                        <select value={this.state.village} onChange={this.updateOption("village")}
                                className="form-control">
                            <option value={null}>All</option>
                            {villageOptions}
                        </select>
                    </div>

                    <div className="col-sm-1">
                        <label className="control-label">&nbsp;</label>
                        <button type="submit" onClick={this.updateOption("village")} className="btn btn-success"><span
                            className="glyphicon glyphicon-plus" aria-hidden="true"></span> Add
                        </button>
                    </div>
                </div>
            </form>

            <h4>Global Roles</h4>
            <p>These apply to the whole event</p>
            <table className="table table-striped table-compact">
                <thead>
                <tr>
                    <th>User</th>
                    <th>Role</th>
                </tr>
                </thead>
                <tbody>
                {globalRows}
                </tbody>
            </table>
            <h4>Organisation Roles</h4>
            <p>These apply to the selected Organisation only event</p>
            <table className="table table-striped table-compact">
                <thead>
                <tr>
                    <th>User</th>
                    <th>Role</th>
                    <th>Organisation</th>
                </tr>
                </thead>
                <tbody>
                {orgRows}
                </tbody>
            </table>
            <h4>Village Roles</h4>
            <p>These apply to the selected Village only event</p>
            <table className="table table-striped table-compact">
                <thead>
                <tr>
                    <th>User</th>
                    <th>Role</th>
                    <th>Organisation</th>
                </tr>
                </thead>
                <tbody>
                {villageRows}
                </tbody>
            </table>
        </div>)
    }
}
