import fetch            from '../fetch.js'
import {updateBookings} from '../bookings/actions.js'
import {updateEvents}   from '../events/actions.js'

export const TOGGLE_PAID = "MANAGE_TOGGLE_PAID";

export const togglePaid = (id) => {
    return dispatch => {
        fetch('/api/booking/paid', "POST", {id: id})
        .then(j => {
            dispatch(updateBookings(j));
        })
    }
};

export const approve = (id, org, note) => {
    return dispatch => {
        fetch('/api/application/approve', "POST", {id: id, org: org, note: note})
        .then(j => {
            dispatch(updateEvents(j));
        })
    }
};

export const decline = (id) => {
    return dispatch => {
        fetch('/api/application/decline', "POST", {id: id})
        .then(j => {
            dispatch(updateEvents(j));
        })
    }
};

export const LOCAL_ASSIGN_VILLAGE = "MANAGE_LOCAL_ASSIGN_VILLAGE";

const localAssignVillage = (bookingId, villageId) => {
    return {
        type:      LOCAL_ASSIGN_VILLAGE,
        bookingId: bookingId,
        villageId: villageId
    }
};

export const addVillage = data => dispatch => {
    fetch('/api/village/create', "POST", data)
    .then(j => {
        dispatch(updateEvents(j));
    });
};

export const deleteVillage = id => dispatch => {
    fetch('/api/village/delete', "POST", {id: id})
    .then(j => {
        dispatch(updateEvents(j));
        dispatch(updateBookings(j));
    });
};

export const assignVillage = (bookingId, villageId) => dispatch => {
    fetch('/api/village/assign', "POST", {bookingId: bookingId, villageId: villageId})
    .then(j => {
        dispatch(updateBookings(j));
    });
    dispatch(localAssignVillage(bookingId, villageId))
};

export const addRole = role => dispatch => {
    fetch('/api/role/create', "POST", role)
    .then(j => dispatch(updateEvents(j)))
};

export const deleteRole = id => dispatch => {
    fetch('/api/role/delete', "POST", {id: id})
    .then(j => dispatch(updateEvents(j)))
};

export const addPayment = payment => dispatch => {
    fetch('/api/payment/add', 'POST', payment)
    .then(j => dispatch(updateBookings(j)))
};

export const deletePayment = payment => dispatch => {
    fetch('/api/payment/delete', 'POST', payment)
    .then(j => dispatch(updateBookings(j)))
};
