var P = require('../shared/permissions.js');

//This file exports permission checks as express middlewares, in theory the client shouldnt allow bad requests.

var permission = {};

permission.editEvent = (req, res, next) => {

	if(P.editEvent(req.session.user, req.body))next();
	else res.status(401).end();

}

permission.createEvent = (req, res, next) => {
	if(P.createEvent(req.session.user))next();
	else res.status(401).end();

}

//todo: make these actually check something

permission.bookEvent = (req, res, next) => {
	next();
}

permission.getEventBookings = (req, res, next) => {
	if(P.manageEvent(req.session.user))next();
	else res.status(401).end();
}

permission.getBooking = (req, res, next) => {
	next();
}

module.exports = permission;