var P = require('../shared/permissions.js');
var Booking = require('./models/booking.js');
var log = require('./logging.js');


//This file exports permission checks as express middlewares, in theory the client shouldnt allow bad requests.

var permission = {};

permission.editEvent = (req, res, next) => {

	if(P.editEvent(req.user, req.body))next();
	else {
		res.status(401).end();
		log.log("error","Permission editEvent failed for %s on %s", req.user.email || "Guest", req.ip);
	}
}

permission.createEvent = (req, res, next) => {
	if(P.createEvent(req.user))next();
	else {
		res.status(401).end();
		log.log("error","Permission createEvent failed for %s on %s", req.user.email || "Guest", req.ip);
	}

}
 
//todo: make these actually check something

permission.bookEvent = (req, res, next) => {
	next();
}

permission.getEventBookings = (req, res, next) => {
	if(P.manageEvent(req.user))next();
	else {
		res.status(401).end();
		log.log("error","Permission getEventBookings failed for %s on %s", req.user.email || "Guest", req.ip);
	}
}

permission.getBooking = (req, res, next) => {
	Booking.findOne({where:{id:req.params.bookingId}})
	.then(b => {
		if(P.viewBooking(req.user, b))next();
		else {
		res.status(401).end();
		log.log("error","Permission getBooking failed for %s on %s", req.user.email || "Guest", req.ip);
	}
	})	
}

module.exports = permission;