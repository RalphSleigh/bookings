const P = require('../shared/permissions.js');
const db = require('./orm.js');
const log = require('./logging.js');
const Op = db.Sequelize.Op;


//This file exports permission checks as express middlewares, in theory the client shouldn;t allow bad requests.

const permission = {};

permission.editEvent = (req, res, next) => {

    if (P.editEvent(req.user, req.body)) next();
    else {
        res.status(401).end();
        log.log("error", "Permission editEvent failed for %s on %s", req.user.email || "Guest", req.ip);
    }
};

permission.createEvent = (req, res, next) => {
    if (P.createEvent(req.user)) next();
    else {
        res.status(401).end();
        log.log("error", "Permission createEvent failed for %s on %s", req.user.email || "Guest", req.ip);
    }

};

//todo: make these actually check something

permission.bookEvent = (req, res, next) => {
    next();
};

permission.getEventBookings = (req, res, next) => {
    db.event.findOne({where: {id: {[Op.eq]: req.body.eventId}}})
        .then(e => {
            if (P.manageEvent(req.user, e)) next();
            else {
                res.status(401).end();
                log.log("error", "Permission getEventBookings failed for %s on %s", req.user.email || "Guest", req.ip);
            }
        });
};

permission.getBooking = (req, res, next) => {
    db.booking.findOne({where: {id: req.params.bookingId}})
        .then(b => {
            if (P.viewBooking(req.user, b)) next();
            else {
                res.status(401).end();
                log.log("error", "Permission getBooking failed for %s on %s", req.user.email || "Guest", req.ip);
            }
        })
};

permission.applyToBookEvent = (req, res, next) => {
    db.event.findOne({where: {id: {[Op.eq]: req.body.eventId}}})
        .then(e => {
            if (P.applyToBookEvent(req.user, e)) next();
            else {
                res.status(401).end();
                log.log("error", "Permission getBooking failed for %s on %s", req.user.email || "Guest", req.ip);
            }
        })
};

permission.decideApplication = (req, res, next) => {
    db.application.findOne({where: {id: {[Op.eq]: req.body.id}}})
        .then(a => {
            if (P.decideApplication(req.user, a.event)) next();
            else {
                res.status(401).end();
                log.log("error", "Permission decideApplication failed for %s on %s", req.user.email || "Guest", req.ip);
            }
        })
};


module.exports = permission;