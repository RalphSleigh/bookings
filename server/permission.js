module.exports = (async () => {
    const P = require('../shared/permissions.js');
    const db = await require('./orm.js');
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

    permission.bookEvent = async function (req, res, next) {
        const event = await db.event.findOne({where: {id: {[Op.eq]: req.body.eventId}}});
        const booking = req.body.id ? await db.booking.findOne({where: {id: {[Op.eq]: req.body.id}}}) : null;
        const organisation = await db.organisation.findOne({where: {id: {[Op.eq]: req.body.organisationId}}});

        if (P.bookIntoOrganisation(req.user, event, booking, organisation)) {
            next();
        } else {
            res.status(401).end();
            log.log("error", "Permission bookEvent failed for %s on %s", req.user.email || "Guest", req.ip);
        }
    };

    permission.editBooking = async function (req, res, next) {
        const event = await db.event.findOne({where: {id: {[Op.eq]: req.body.eventId}}});
        const booking = await db.booking.findOne({where: {id: {[Op.eq]: req.body.id}}});

        if (P.editBooking(req.user, event, booking)) {
            next();
        } else {
            res.status(401).end();
            log.log("error", "Permission editEvent failed for %s on %s", req.user.email || "Guest", req.ip);
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
            log.log("error", "Permission bookIntoOrganisation failed for %s on %s", req.user.email || "Guest", req.ip);
        }
    };

    permission.getEventBookings = (req, res, next) => {
        db.event.findOne({where: {id: {[Op.eq]: req.params.eventId}}})
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

    permission.assignVillage = async function (req, res, next) {
        const booking = await db.booking.findOne({
            where: {id: {[Op.eq]: req.body.bookingId}},
            include: [{model: db.event}]
        });

        if (P.assignVillage(req.user, booking.event)) next();
        else {
            res.status(401).end();
            log.log("error", "Permission assignVillage failed for %s on %s", req.user.email || "Guest", req.ip);
        }
    };

    permission.addVillage = async function (req, res, next) {
        const event = await db.event.findOne({
            where: {id: {[Op.eq]: req.body.eventId}}
        });

        if (P.addVillage(req.user, event)) next();
        else {
            res.status(401).end();
            log.log("error", "Permission addVillage failed for %s on %s", req.user.email || "Guest", req.ip);
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
            log.log("error", "Permission deleteVillage failed for %s on %s", req.user.email || "Guest", req.ip);
        }
    };

    permission.getUserList = async function (req, res, next) {
        if (P.getUserList(req.user)) next();
        else {
            res.status(401).end();
            log.log("error", "Permission getUserList failed for %s on %s", req.user.email || "Guest", req.ip);
        }
    };

    permission.createRole = async function (req, res, next) {
        const event = await db.event.findOne({
            where: {id: {[Op.eq]: req.body.eventId}}
        });
        if (P.createRole(req.user, event)) next();
        else {
            res.status(401).end();
            log.log("error", "Permission createRole failed for %s on %s", req.user.email || "Guest", req.ip);
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
            log.log("error", "Permission deleteRole failed for %s on %s", req.user.email || "Guest", req.ip);
        }
    };

    return permission;

})();