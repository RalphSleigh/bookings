import React from 'react'

export default class BookingUserDetails extends React.Component {

    constructor(props) {
        super(props);

        this.update = this.update.bind(this);
        this.valid = this.valid.bind(this);
        this.updateOrg = this.updateOrg.bind(this);
    }

    update(item) {
        return (e) => {
            this.props.update(item, e.target.value);
            e.preventDefault();
        }
    }

    updateOrg(e) {
        this.props.update('organisationId', parseInt(e.target.value));
        e.preventDefault();
    }

    valid(item) {
        const valid = "form-group";
        const invalid = "form-group has-error";

        if (this.props.validating && (!item || item === "")) return invalid;
        return valid;
    }

    render() {

        const district = this.props.event.bigCampMode ? <div className={this.valid(this.props.district)}>
            <label className="col-sm-2 control-label">Group/District:</label>
            <div className="col-sm-10">
                <input type="tel" className="form-control" placeholder="Group/District"
                       value={this.props.district || ''} onChange={this.update("district")}/>
            </div>
        </div> : null;

        let organisations = null;

        if (this.props.event.organisationsEnabled) {
            if (this.props.organisations.length === 1) {
                organisations = <div className="form-group">
                    <label className="col-sm-2 control-label">Organisation:</label>
                    <div className="col-sm-10">
                        <input className="form-control" disabled value={this.props.organisations[0].name}/>
                    </div>
                </div>
            } else {
                const options = this.props.organisations.map(o => <option key={o.id} value={o.id}>{o.name}</option>)
                organisations = <div className="form-group">
                    <label className="col-sm-2 control-label">Organisation:</label>
                    <div className="col-sm-10">
                        <select value={this.props.organisationId} onChange={this.updateOrg}
                                className="form-control">
                            {options}
                        </select>
                    </div>
                </div>
            }
        }

        let orgSection = null;

        if (district || organisations) orgSection = <div>
            <div className="col-sm-12">
                <h3>Your Group</h3>
            </div>
            <div className="col-sm-12">
                <form className="form-horizontal">
                    {district}
                    {organisations}
                </form>
            </div>
        </div>

        return (
            <div>
                <div className="col-sm-12">
                    <form className="form-horizontal">
                        <div className={this.valid(this.props.userName)}>
                            <label className="col-sm-2 control-label">Your Name:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" placeholder="Name"
                                       disabled={!this.props.guest} value={this.props.userName || ''}
                                       onChange={this.update("userName")}/>
                            </div>
                        </div>
                        <div className={this.valid(this.props.userEmail)}>
                            <label className="col-sm-2 control-label">Your e-mail:</label>
                            <div className="col-sm-10">
                                <input type="e-mail" className="form-control" placeholder="e-mail"
                                       disabled={!this.props.guest} value={this.props.userEmail}
                                       onChange={this.update("userEmail")}/>
                            </div>
                        </div>
                        <div className={this.valid(this.props.userContact)}>
                            <label className="col-sm-2 control-label">Phone Number:</label>
                            <div className="col-sm-10">
                                <input type="tel" className="form-control" placeholder="Phone"
                                       value={this.props.userContact || ''} onChange={this.update("userContact")}/>
                            </div>
                        </div>
                    </form>
                </div>
                {orgSection}
            </div>)
    }
};