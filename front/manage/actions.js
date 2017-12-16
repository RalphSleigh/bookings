import fetch from '../fetch.js'
import {updateBookings} from '../bookings/actions.js'

export const TOGGLE_PAID = "MANAGE_TOGGLE_PAID";

export const togglePaid = (id) => {
    return dispatch => {
        fetch('/api/booking/paid', "POST", {id: id})
            .then(j => {
                dispatch(updateBookings(j));
            })
    }
};
