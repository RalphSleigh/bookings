const P = require('../shared/permissions.js');
const db = require('./orm.js');
const log = require('./logging.js');
const Op = db.Sequelize.Op;
const wrapper = require('./errors');

//This file exports permission checks as express middlewares, in theory the client shouldn't allow bad requests.

const permission = {};

permission.editEvent = (req, res, next) => {

    if (P.editEvent(req.user, req.body)) next();
    else {
        res.status(401).end();
        logError(req);
    }
};

permission.createEvent = (req, res, next) => {
    if (P.createEvent(req.user)) next();
    else {
        res.status(401).end();
        logError(req);
    }

};

permission.bookEvent = async function (req, res, next) {
    const event = await db.event.findOne({where: {id: {[Op.eq]: req.body.eventId}}});
    const booking = req.body.id ? await db.booking.findOne({where: {id: {[Op.eq]: req.body.id}}}) : null;
    const organisation = await db.organisation.findOne({where: {id: {[Op.eq]: req.body.organisationId}}});

    if (P.bookIntoOrganisation(req.user, event, booking, organisation)) {
        next();
    } else {
        res.status(401).end();
        logError(req);
    }
};

permission.editBooking = async function (req, res, next) {
    const event = await db.event.findOne({where: {id: {[Op.eq]: req.body.eventId}}});
    const booking = await db.booking.findOne({where: {id: {[Op.eq]: req.body.id}}});

    if (P.editBooking(req.user, event, booking)) {
        next();
    } else {
        res.status(401).end();
        logError(req);
    }
};

permission.deleteBooking = async function (req, res, next) {
    const booking = await db.booking.findOne({where: {id: {[Op.eq]: req.body.id}}});
    const event = await db.event.findOne({where: {id: {[Op.eq]: booking.eventId}}});

    if (P.deleteBooking(req.user, event, booking)) {
        next();
    } else {
        res.status(401).end();
        logError(req);
    }
};

permission.bookIntoOrganisation = async function (req, res, next) {
    const event = await db.event.findOne({where: {id: {[Op.eq]: req.body.eventId}}});

    if (event.organisationsEnabled === false) return next();
    const organisation = await db.organisation.findOne({where: {id: {[Op.eq]: req.body.organisationId}}});
    const booking = req.body.id ? await db.booking.findOne({where: {id: {[Op.eq]: req.body.id}}}) : null;

    if (P.bookIntoOrganisation(req.user, event, booking, organisation)) {
        next();
    } else {
        res.status(401).end();
        logError(req);
    }
};
//TODO: rewrite these as async
permission.getEventBookings = (req, res, next) => {
    db.event.findOne({where: {id: {[Op.eq]: req.params.eventId}}})
        .then(e => {
            if (P.manageEvent(req.user, e)) next();
            else {
                res.status(401).end();
                logError(req);
            }
        });
};

permission.getBooking = (req, res, next) => {
    db.booking.findOne({where: {id: req.params.bookingId}})
        .then(b => {
            if (P.viewBooking(req.user, b)) next();
            else {
                res.status(401).end();
                logError(req);
            }
        })
};

permission.applyToBookEvent = (req, res, next) => {
    db.event.findOne({where: {id: {[Op.eq]: req.body.eventId}}})
        .then(e => {
            if (P.applyToBookEvent(req.user, e)) next();
            else {
                res.status(401).end();
                logError(req);
            }
        })
};

permission.decideApplication = (req, res, next) => {
    db.application.findOne({where: {id: {[Op.eq]: req.body.id}}})
        .then(a => {
            if (P.decideApplication(req.user, a.event)) next();
            else {
                res.status(401).end();
                logError(req);
            }
        })
};

permission.assignVillage = async function (req, res, next) {
    const booking = await db.booking.findOne({
        where: {id: {[Op.eq]: req.body.bookingId}},
        include: [{model: db.event}]
    });

    if (P.assignVillage(req.user, booking.event)) next();
    else {
        res.status(401).end();
        logError(req);
    }
};

permission.addVillage = async function (req, res, next) {
    const event = await db.event.findOne({
        where: {id: {[Op.eq]: req.body.eventId}}
    });

    if (P.addVillage(req.user, event)) next();
    else {
        res.status(401).end();
        logError(req);
    }
};

permission.deleteVillage = async function (req, res, next) {
    const village = await db.village.findOne({
        where: {id: {[Op.eq]: req.body.id}},
        include: [{model: db.event}]
    });

    if (P.addVillage(req.user, village.event)) next();
    else {
        res.status(401).end();
        logError(req);
    }
};

permission.getUserList = async function (req, res, next) {
    if (P.getUserList(req.user)) next();
    else {
        res.status(401).end();
        logError(req);
    }
};

permission.createRole = async function (req, res, next) {
    const event = await db.event.findOne({
        where: {id: {[Op.eq]: req.body.eventId}}
    });
    if (P.createRole(req.user, event)) next();
    else {
        res.status(401).end();
        logError(req);
    }
};

permission.deleteRole = async function (req, res, next) {
    const role = await db.role.findOne({
        where: {id: {[Op.eq]: req.body.id}},
        include: [{model: db.event}]
    });

    if (P.createRole(req.user, role.event)) next();
    else {
        res.status(401).end();
        logError(req);
    }
};

permission.addPayment = async function (req, res, next) {
    const booking = await db.booking.findOne({
        where: {id: {[Op.eq]: req.body.bookingId}},
        include: [{model: db.event}]
    });

    if (P.addPayment(req.user, booking)) next();
    else {
        res.status(401).end();
        logError(req);
    }
};

module.exports = wrapper(permission);

const logError = (req) => {
    const stack = new Error().stack, caller = stack.split('\n')[2].trim();
    log.warn({
        message: "Permission {permission} failed for {user}",
        permission: caller,
        user: req.user.email || "Guest"
    })
};
