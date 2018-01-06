import React from 'react'
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'
import update from 'immutability-helper';

//import bookings from '../bookings'
import {manageWholeEventCheck} from '../permission.js'
import Immutable from "immutable";

//import W from '../../../shared/woodcraft.js'

class Villages extends React.Component {

    constructor(props) {
        super(props);

        this.state = {newVillageName: ''};

        this.onDragEnd = this.onDragEnd.bind(this);
        this.updateVillageName = this.updateVillageName.bind(this);
        this.addVillage = this.addVillage.bind(this);
    };

    static panelClass(total) {
        if (total < 80) return "panel panel-success";
        if (total < 100) return "panel panel-warning";
        return "panel panel-danger";
    };

    updateVillageName(e) {

        this.setState(update(this.state, {newVillageName: {$set: e.target.value}}));

        e.preventDefault()
    }

    addVillage(e) {
        this.props.addVillage({
            name: this.state.newVillageName,
            eventId: this.props.Event.get("id")
        });
        e.preventDefault();
        this.setState(update(this.state, {newVillageName: {$set: ''}}));
    }

    deleteVillage(id) {
        return e => {
            if (confirm("Are you sure you want to delete this village?")) {
                this.props.deleteVillage(id);
            }
            e.preventDefault();
        }
    }

    onDragEnd(result) {
        if (result.destination === null) return;
        const bookingId = parseInt(/b([\d]+)/.exec(result.draggableId)[1]);
        const villageId = result.destination.droppableId === "empty" ? null : parseInt(/v([\d]+)/.exec(result.destination.droppableId)[1]);

        this.props.assignVillage(bookingId, villageId);
    }

    render() {

        const event = this.props.Event.toJS();
        const bookings = this.props.Bookings.toJS();
        const participants = this.props.Bookings.reduce((r, b) => r.concat(b.get("participants")), Immutable.List()).toJS();

        const villages = (event.villages || []).map(v => {

            v.participants = bookings.reduce((a, b) =>
                    b.villageId === v.id ? a + participants.filter(p => p.bookingId === b.id).length : a
                , 0);
            v.bookings = bookings.filter(b => b.villageId === v.id).map(b => {
                return {...b, size: participants.filter(p => p.bookingId === b.id).length}
            }).sort((a, b) => b.size - a.size);
            return v;
        });

        const unassignedBookings = bookings.filter(b => b.villageId === null).map(b => {
            return {...b, size: participants.filter(p => p.bookingId === b.id).length}
        }).sort((a, b) => b.size - a.size);

        const unassignedBoxes = unassignedBookings.map(b =>
            <Draggable key={b.id} draggableId={'b' + b.id}>
                {(provided, snapshot) => {
                    const style = {
                        ...provided.draggableStyle,
                        cursor: 'pointer'
                    };

                    return (
                        <div ref={provided.innerRef}
                             style={style}
                             {...provided.dragHandleProps}>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">{(event.bigCampMode ? b.district : b.userName) + " (" + b.size + ")"}</h3>
                                </div>
                                <div className="panel-body">
                                    <p>{b.campWith}</p>
                                </div>
                            </div>
                        </div>)
                }}
            </Draggable>);

        const villageBoxes = villages.map(v => {

            const bookings = v.bookings.map(b =>

                <Draggable key={b.id} draggableId={'b' + b.id}>
                    {(provided, snapshot) => {

                        const style = {
                            ...provided.draggableStyle,
                            cursor: 'pointer'
                        };

                        return (
                            <div ref={provided.innerRef}
                                 style={style}
                                 {...provided.dragHandleProps}>
                                {(event.bigCampMode ? b.district : b.userName) + ' (' + b.size + ')'}
                            </div>)
                    }}
                </Draggable>
            );
            return <Droppable key={v.id} droppableId={'v' + v.id}>
                {(provided, snapshot) => (
                    <div className={Villages.panelClass(v.participants)}>
                        <div className="panel-heading">
                            <button type="button" onClick={this.deleteVillage(v.id)} className="close float-right"
                                    aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h3 className="panel-title">{v.name}</h3>
                        </div>
                        <div ref={provided.innerRef} className="panel-body">
                            {bookings}
                            {provided.placeholder}
                            <div>
                                <p>
                                    <b>Total: {v.participants}</b>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </Droppable>
        });

        villageBoxes.push(<div key="new" className="panel panel-info">
            <div className="panel-heading">
                <h3 className="panel-title">Add Village</h3>
            </div>
            <div className="panel-body">
                <form className="form-horizontal">
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text"
                                   className="form-control"
                                   placeholder="Name"
                                   value={this.state.newVillageName}
                                   onChange={this.updateVillageName}/>
                        </div>
                    </div>
                    <button disabled={this.state.newVillageName === ''}
                            className="btn"
                            onClick={this.addVillage}>
                        <span
                            className="glyphicon glyphicon-plus"></span> Add
                    </button>
                </form>
            </div>
        </div>);

        const villageColumns = villageBoxes.reduce((a, c, i) => {
            a[i % 4].push(c);
            return a
        }, [[], [], [], []]).map((l, i) => <div key={i} className="col-sm-3">{l}</div>);

        return (<DragDropContext onDragEnd={this.onDragEnd}>
            <div className="row">
                <div className="col-md-12">
                    <h4>Drag and drop to configure villages</h4>
                </div>
                <div className="col-md-3">
                    <h5>Unassigned:</h5>
                    <Droppable droppableId="empty">
                        {(provided, snapshot) => (
                            <div ref={provided.innerRef} className="unassignedVillages">
                                {unassignedBoxes}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        {villageColumns}
                    </div>
                </div>
            </div>
        </DragDropContext>)
    }
}

export default manageWholeEventCheck(Villages);