import React from 'react'
import cloneDeep from 'lodash/cloneDeep'

export const name = "presets";
export const selection = "Predefined options";

export class Config extends React.Component {

    constructor() {
        super();

        this.update = this.update.bind(this);
        this.add = this.add.bind(this);
        this.delete = this.delete.bind(this);
        this.updateMask = this.updateMask.bind(this);
    }

    update(id) {
        return key => e => {
            const out = cloneDeep(this.props.data);
            out.find(o => o.id === id)[key] = e.target.value;
            this.props.update(out);
            e.preventDefault()
        }
    }

    updateMask(id) {
        return e => {
            const out = cloneDeep(this.props.data);
            out.find(o => o.id === id).mask = parseInt(e.target.value);
            this.props.update(out);
            e.preventDefault()
        }
    }

    add(e) {
        const out = cloneDeep(this.props.data) || [];
        out.push({id: Math.round((Math.random() * 100000))});//TODO: Holy f*** fix this
        this.props.update(out);
        e.preventDefault()
    }

    delete(id) {
        return e => {
            const out = cloneDeep(this.props.data) || [];
            this.props.update(out.filter(o => o.id !== id));
            e.preventDefault()
        }
    }

    render() {
        //<AttendanceConfig data={this.state.event.partialDatesData} update={this.updateData('partialDatesData')} />
        const options = this.props.data || [];

        const optionRows = options.map(o => <Row key={o.id} name={o.name} mask={o.mask} update={this.update(o.id)}
                                                 delete={this.delete(o.id)} updateMask={this.updateMask(o.id)}/>);

        return <div className="row">
            <div className="col-sm-7"><h4>Description</h4></div>
            <div className="col-sm-5"><h4>Day Mask</h4></div>
            {optionRows}
            <div className="col-sm-12">
                <div className="form-horizontal">
                    <div className="form-group">
                        <div className="col-sm-12">
                            <div className="btn-toolbar">
                                <button type="submit" className="btn btn-success" onClick={this.add}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

const Row = props => <div className="col-sm-12">
    <div className="form-horizontal">
        <div className="form-group">
            <div className="col-sm-7">
                <input type="text" value={props.name || ''} onChange={props.update('name')}
                       className="form-control" placeholder="Option name"/>
            </div>
            <div className="col-sm-4">
                <input type="number" value={props.mask || 0} onChange={props.updateMask}
                       className="form-control" placeholder="0"/>
            </div>
            <div className="col-sm-1">
                <button type="submit" onClick={props.delete} className="btn btn-warning">
                    <span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
            </div>
        </div>
    </div>
</div>;