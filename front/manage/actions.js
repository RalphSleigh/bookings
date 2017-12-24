import fetch from '../fetch.js'
import {updateBookings} from '../bookings/actions.js'
import {updateEvents} from '../events/actions.js'

export const TOGGLE_PAID = "MANAGE_TOGGLE_PAID";

export const togglePaid = (id) => {
    return dispatch => {
        fetch('/api/booking/paid', "POST", {id: id})
            .then(j => {
                dispatch(updateBookings(j));
            })
    }
};

export const approve = (id, org) => {
    return dispatch => {
        fetch('/api/application/approve', "POST", {id: id, org: org})
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
