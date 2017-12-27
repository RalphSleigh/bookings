import React from 'react'

export default class PermissionForm extends React.Component {

    constructor(props) {
        super(props);

        this.updatePermission = this.updatePermission.bind(this);
        this.updateEmergency = this.updateEmergency.bind(this);
        this.updateNote = this.updateNote.bind(this);
        this.updateCampWith = this.updateCampWith.bind(this);
    }

    updatePermission() {
        this.props.updateValidation();
        this.props.update('permission', !this.props.permission);
    }

    updateEmergency(item) {
        return (e) => {
            this.props.updateValidation();
            this.props.update(item, e.target.value)
            e.preventDefault();
        }
    }

    updateCampWith(e) {
        this.props.updateValidation();
        this.props.update('campWith', e.target.value);
        e.preventDefault();
    }

    updateNote(e) {
        this.props.updateValidation();
        this.props.update('note', e.target.value);
        e.preventDefault();
    }

    render() {

        const valid = "form-group";
        const invalid = "form-group has-error";

        const emergency = this.props.event.bigCampMode ? null : <div>
            <div className="col-sm-12">
                <h4>Emergency Contact</h4>
                <p>Please provide details of someone we can contact in case of an emergency during the event (a second
                    person is better even if you are not attending yourself)</p>
            </div>
            <div className={this.props.validating ? this.props.emergencyName === "" ? invalid : valid : valid}>
                <label className="col-sm-2 control-label">Name:</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder="Name"
                           value={this.props.emergencyName || ''} onChange={this.updateEmergency("emergencyName")}/>
                </div>
            </div>
            <div className={this.props.validating ? this.props.emergencyPhone === "" ? invalid : valid : valid}>
                <label className="col-sm-2 control-label">Phone Number:</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder="Name"
                           value={this.props.emergencyPhone || ''} onChange={this.updateEmergency("emergencyPhone")}/>
                </div>
            </div>
        </div>;

        const campWith = this.props.event.bigCampMode ? <div className="form-group">
            <label className="col-sm-2 control-label">Are there any Groups/Districts you would like to camp
                with?:</label>
            <div className="col-sm-10">
                            <textarea value={this.props.campWith || ''} onChange={this.updateCampWith}
                                      className="form-control"
                                      rows="2"></textarea>
            </div>
        </div> : null;

        return (<div className="col-sm-12">
                <form className="form-horizontal">
                    {emergency}
                    <div className="col-sm-12">
                        <h4>Additional Infromation</h4>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Anything else we need to know?:<br/></label>
                        <div className="col-sm-10">
                            <textarea value={this.props.note || ''} onChange={this.updateNote} className="form-control"
                                      rows="2"></textarea>
                        </div>
                    </div>
                    {campWith}
                    <div className="col-sm-12">
                        <h4>Permission</h4>
                    </div>
                    <div className="form-group">
                        <div className="checkbox col-sm-11 col-sm-offset-1">
                            <label>
                                <input type="checkbox" checked={!!this.props.permission}
                                       onChange={this.updatePermission}/>I give permission for the people named above to
                                attend {this.props.event.name}<br/>######### TODO: Data protection statement
                                ############
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}