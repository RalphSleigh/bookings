import React from 'react'
import update from 'immutability-helper';
import {Typeahead} from 'react-bootstrap-typeahead';

import {manageWholeEventCheck} from '../permission.js'


class Roles extends React.Component {

    constructor(props) {
        super(props);
        this.state = {role: 'Manage', org: '', village: '', user: []};

        this.updateOption = this.updateOption.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.addRole = this.addRole.bind(this);
        this.deleteRole = this.deleteRole.bind(this);
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

    updateUser(user) {
        this.setState(update(this.state, {user: {$set: user}}));
    }

    addRole(e) {

        const role = {
            userId: this.state.user[0].id,
            eventId: this.props.Event.get('id'),
            name: this.state.role
        };

        if (this.state.org !== '') role.organisationId = parseInt(this.state.org);
        if (this.state.village !== '') role.villageId = parseInt(this.state.village);

        this.props.addRole(role);

        this.setState({role: 'Manage', org: '', village: '', user: []});
        this.refs.typeahead.getInstance().clear();
        e.preventDefault()
    }

    deleteRole(id) {
        return e => {
            this.props.deleteRole(id);
            e.preventDefault()
        }
    }

    render() {

        const event = this.props.Event.toJS();
        const userList = this.props.UserList.toJS().map(u => {
            u.search = u.userName + ' <' + (u.email || '') + '>';
            return u;
        }).sort((a, b) => nameSort(a.userName, b.userName));

        const globalRoles = event.roles.filter(r => r.villageId === null && r.organisationId === null);

        globalRoles.unshift({id: 0, name: "Owner", user: event.user});

        const globalRows = globalRoles.map(r => <tr key={r.id}>
            <td>{r.user.userName}</td>
            <td>{r.name}</td>
            <td>{r.name === "Owner" ? null :
                <button type="button" onClick={this.deleteRole(r.id)} className="close float-right"
                        aria-label="Delete">
                    <span aria-hidden="true">&times;</span>
                </button>
            }</td>
        </tr>);

        const orgRoles = event.roles.filter(r => r.organisationId !== null);
        const orgRows = orgRoles.map(r => <tr key={r.id}>
            <td>{r.user.userName}</td>
            <td>{r.name}</td>
            <td>{r.organisation.name}</td>
            <td>
                <button type="button" onClick={this.deleteRole(r.id)} className="close float-right"
                        aria-label="Delete">
                    <span aria-hidden="true">&times;</span>
                </button>
            </td>
        </tr>);

        const villageRoles = event.roles.filter(r => r.villageId !== null);
        const villageRows = villageRoles.map(r => <tr key={r.id}>
            <td>{r.user.userName}</td>
            <td>{r.name}</td>
            <td>{r.village.name}</td>
            <td>
                <button type="button" onClick={this.deleteRole(r.id)} className="close float-right"
                        aria-label="Delete">
                    <span aria-hidden="true">&times;</span>
                </button>
            </td>
        </tr>);

        const orgOptions = event.organisations.map(o => <option key={o.id} value={o.id}>{o.name}</option>);
        const villageOptions = event.villages.map(v => <option key={v.id} value={v.id}>{v.name}</option>);

        return (<div>
            <h6>Here you can assign roles to other users so they can help you administer the event</h6>
            <form className="form-horizontal">
                <div className="form-group">

                    <div className="col-sm-5">
                        <label className="control-label">User:</label>
                        <Typeahead
                            ref="typeahead"
                            options={userList}
                            labelKey="search"
                            onChange={this.updateUser}
                            placeholder="Name"/>
                    </div>

                    <div className="col-sm-2">
                        <label className="control-label">Role:</label>
                        <select value={this.state.org} onChange={this.updateOption("role")} className="form-control">
                            <option value="Manage">Manage</option>
                            <option value="View">View</option>
                            <option value="KP">KP</option>
                            <option value="Money">Money</option>
                        </select>
                    </div>

                    <div className="col-sm-2">
                        <label className="control-label">Organisation:</label>
                        <select value={this.state.org} onChange={this.updateOption("org")} className="form-control">
                            <option value={''}>All</option>
                            {orgOptions}
                        </select>
                    </div>

                    <div className="col-sm-2">
                        <label className="control-label">Village:</label>
                        <select value={this.state.village} onChange={this.updateOption("village")}
                                className="form-control">
                            <option value={''}>All</option>
                            {villageOptions}
                        </select>
                    </div>

                    <div className="col-sm-1">
                        <label className="control-label">&nbsp;</label>
                        <button disabled={this.state.user.length !== 1} type="submit" onClick={this.addRole}
                                className="btn btn-success"><span
                            className="glyphicon glyphicon-plus" aria-hidden="true"></span> Add
                        </button>
                    </div>
                </div>
            </form>

            <h4>Event Roles</h4>
            <p>These roles grant access to the whole event, Managers here can also assign Villages and Roles.</p>
            <table className="table table-striped table-compact">
                <thead>
                <tr>
                    <th>User</th>
                    <th>Role</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {globalRows}
                </tbody>
            </table>
            <h4>Organisation Roles</h4>
            <p>These grant access to bookings within the specified organisation only</p>
            <table className="table table-striped table-compact">
                <thead>
                <tr>
                    <th>User</th>
                    <th>Role</th>
                    <th>Organisation</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {orgRows}
                </tbody>
            </table>
            <h4>Village Roles</h4>
            <p>These grant access to bookings within the specified Village only</p>
            <table className="table table-striped table-compact">
                <thead>
                <tr>
                    <th>User</th>
                    <th>Role</th>
                    <th>Organisation</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {villageRows}
                </tbody>
            </table>
        </div>)
    }
}

export default manageWholeEventCheck(Roles);

const nameSort = (a, b) => {
    var splitA = a.split(" ");
    var splitB = b.split(" ");
    var lastA = splitA[splitA.length - 1];
    var lastB = splitB[splitB.length - 1];

    if (lastA < lastB) return -1;
    if (lastA > lastB) return 1;
    return 0;
};