import React from 'react'
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'

//import bookings from '../bookings'
//import { manageEventCheck } from '../permission.js'

//import W from '../../../shared/woodcraft.js'

export default class Villages extends React.Component {

    constructor(props) {
        super(props);
    };

    static panelClass(total) {
        if (total < 80) return "panel panel-success";
        if (total < 100) return "panel panel-warning";
        return "panel panel-danger";
    };

    onDragEnd(result) {
        debugger;
    }

    render() {

        const event = this.props.Event.toJS();
        const bookings = this.props.Bookings.toJS();
        const participants = this.props.Participants.toJS();

        const villages = (event.villages || []).map(v => {

            v.participants = bookings.reduce((a, b) =>
                    b.villageId === v.id ? a + participants.filter(p => p.bookingId === b.id).length : a
                , 0);
            v.bookings = bookings.filter(b => b.villageId === v.id).map(b => {
                return {...b, size: participants.filter(p => p.bookingId === b.id).length}
            });
            return v;
        });

        const unassignedBookings = bookings.filter(b => b.villageId === null).map(b => {
            return {...b, size: participants.filter(p => p.bookingId === b.id).length}
        });

        const unassignedBoxes = unassignedBookings.map(b =>
            <Draggable key={b.id} draggableId={'b' + b.id}>
                {(provided, snapshot) => (
                    <div ref={provided.innerRef}
                         style={provided.draggableStyle}
                         {...provided.dragHandleProps}>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">{(event.bigCampMode ? b.district : b.userName) + " (" + b.size + ")"}</h3>
                            </div>
                            <div className="panel-body">
                                <p>{b.campWith}</p>
                            </div>
                        </div>
                    </div>)}
            </Draggable>);

        const villageBoxes = villages.map(v => {

            const bookings = v.bookings.map(b =>

                <Draggable key={b.id} draggableId={'b' + b.id}>
                    {(provided, snapshot) => (
                        <p ref={provided.innerRef}
                           style={provided.draggableStyle}
                           {...provided.dragHandleProps}>{event.bigCampMode ? b.district : b.userName}</p>)}
                </Draggable>
            );
            return <Droppable key={v.id} droppableId={'v' + v.id}>
                {(provided, snapshot) => (
                    <div>
                        <div className="col-sm-3">
                            <div className={Villages.panelClass(v.participants)}>
                                <div className="panel-heading">
                                    <h3 className="panel-title">{v.name}</h3>
                                </div>
                                <div ref={provided.innerRef} className="panel-body">
                                    {bookings}
                                    {provided.placeholder}
                                    <p>Total: {v.participants}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </Droppable>
        });

        return (<DragDropContext onDragEnd={this.onDragEnd}>
            <div className="row">
                <div className="col-md-12">
                    <h4>Drag and drop to configure villages</h4>
                </div>
                <div className="col-md-3">
                    <Droppable droppableId="empty">
                        {(provided, snapshot) => (
                            <div ref={provided.innerRef}>
                                {unassignedBoxes}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        {villageBoxes}
                    </div>
                </div>
            </div>
        </DragDropContext>)
    }
}

