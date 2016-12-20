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

module.exports = permission;