const db = require('../orm.js');
    const log = require('../logging.js');
    const updateAssociation = require('./util.js').updateAssociation;
    const getEventDetails = require('./util.js').getEventDetails;
    const Op = db.Sequelize.Op;
    const wrapper = require('../errors');

    const event = {};

    event.getEvents = (req, res) => {
        db.event.findAll({include: [{model: db.organisation}]}).then(events => {
                let data = {events};
                res.json(data)
            }
        );
    };

    event.getEvent = (req, res) => {
        db.event.findOne({where: {id: req.params.eventId}, include: [{model: db.organisation}]})
            .then(event => {
                if (event === null) res.status(404).end();
                else res.json({events: [event]});
            });
    };

    event.getDetails = async (req, res) => {
        const event = await getEventDetails(req.params.eventId)
        if (event === null) res.status(404).end();
        else res.json({events: [event]});
    };


    event.editEvent = (req, res) => {
        log.log("debug", "Edited event %s", req.body.id);
        db.event.findOne({where: {id: req.body.id}})
            .then(event => {
                if (event === null) return res.status(404).end();
                return event.update(req.body)
            })
            .then(() => db.event.findOne({where: {id: req.body.id}, include: [{model: db.organisation}]}))
            .then(event => updateAssociation(event, 'organisations', db.organisation, req.body.organisations))
            .then(() => db.event.findOne({where: {id: req.body.id}, include: [{model: db.organisation}]}))
            .then(event => {
                res.json({events: [event]});
            });
    };

    event.createEvent = (req, res) => {
        req.body.userId = req.user.id;
        db.event.create(req.body, {
            include: [{
                association: 'organisations'
            }]
        })
            .then((e) => {
                log.log("debug", "Created event %s", e.id);
                return db.event.findAll({include: {model: db.organisation}})
            })
            .then(events => {
                let data = {events};
                res.json(data);
            });
    };
    event.deleteEvent = (req, res) => {
        log.log("debug", "Deleting event %s", req.body.id);
        db.event.findOne({where: {id: req.body.id}})
            .then(event => event.destroy())
            .then(() => res.json({}));
    };

    event.addVillage = async function (req, res) {
        const village = await db.village.create(req.body);
        const event = await getEventDetails(village.eventId)
        res.json({events: [event]});
    };

    event.deleteVillage = async function (req, res) {
        const village = await db.village.findOne({where: {id: {[Op.eq]: req.body.id}}});
        await village.destroy();

        const event = await getEventDetails(village.eventId)
        const bookings = await db.booking.findAll({
            where:
                {eventId: {[Op.eq]: event.id}}, include: [{model: db.participant}]
        });
        res.json({events: [event], bookings: bookings});
    };

event.renameVillage = async function (req, res) {
    const village = await db.village.findOne({where: {id: {[Op.eq]: req.body.id}}});
    village.name = req.body.name
    await village.save();

    const event = await getEventDetails(village.eventId)
    res.json({events: [event]});
};

event.transfer = async function (req, res) {
    const event = await db.event.findOne({where: {id: req.params.eventId}});
    event.userId = req.params.userId
    event.save();
    res.json(event);
};


module.exports = wrapper(event);


//SELECT "event"."id", "event"."name", "event"."description", "event"."startDate", "event"."endDate", "event"."bookingDeadline", "event"."bigCampMode", "event"."organisationsEnabled", "event"."partialDates", "event"."partialDatesData", "event"."bookingPolicy", "event"."feeModel", "event"."feeData", "event"."paymentTypes", "event"."paymentInfo", "event"."customQuestions", "event"."createdAt", "event"."updatedAt", "event"."userId", "roles"."id" AS "roles.id", "roles"."name" AS "roles.name", "roles"."note" AS "roles.note", "roles"."createdAt" AS "roles.createdAt", "roles"."updatedAt" AS "roles.updatedAt", "roles"."eventId" AS "roles.eventId", "roles"."organisationId" AS "roles.organisationId", "roles"."userId" AS "roles.userId", "roles"."villageId" AS "roles.villageId", "villages"."id" AS "villages.id", "villages"."name" AS "villages.name", "villages"."createdAt" AS "villages.createdAt", "villages"."updatedAt" AS "villages.updatedAt", "villages"."eventId" AS "villages.eventId", "organisations"."id" AS "organisations.id", "organisations"."name" AS "organisations.name", "organisations"."createdAt" AS "organisations.createdAt", "organisations"."updatedAt" AS "organisations.updatedAt", "organisations"."eventId" AS "organisations.eventId", "applications"."id" AS "applications.id", "applications"."message" AS "applications.message", "applications"."createdAt" AS "applications.createdAt", "applications"."updatedAt" AS "applications.updatedAt", "applications"."userId" AS "applications.userId", "applications"."eventId" AS "applications.eventId", "applications->event"."id" AS "applications.event.id", "applications->event"."name" AS "applications.event.name", "applications->event"."description" AS "applications.event.description", "applications->event"."startDate" AS "applications.event.startDate", "applications->event"."endDate" AS "applications.event.endDate", "applications->event"."bookingDeadline" AS "applications.event.bookingDeadline", "applications->event"."bigCampMode" AS "applications.event.bigCampMode", "applications->event"."organisationsEnabled" AS "applications.event.organisationsEnabled", "applications->event"."partialDates" AS "applications.event.partialDates", "applications->event"."partialDatesData" AS "applications.event.partialDatesData", "applications->event"."bookingPolicy" AS "applications.event.bookingPolicy", "applications->event"."feeModel" AS "applications.event.feeModel", "applications->event"."feeData" AS "applications.event.feeData", "applications->event"."paymentTypes" AS "applications.event.paymentTypes", "applications->event"."paymentInfo" AS "applications.event.paymentInfo", "applications->event"."customQuestions" AS "applications.event.customQuestions", "applications->event"."createdAt" AS "applications.event.createdAt", "applications->event"."updatedAt" AS "applications.event.updatedAt", "applications->event"."userId" AS "applications.event.userId", "applications->user"."id" AS "applications.user.id", "applications->user"."userName" AS "applications.user.userName", "applications->user"."email" AS "applications.user.email", "applications->user"."remoteId" AS "applications.user.remoteId", "user"."id" AS "user.id", "user"."userName" AS "user.userName", "user"."email" AS "user.email", "user"."remoteId" AS "user.remoteId" FROM "events" AS "event" LEFT OUTER JOIN "roles" AS "roles" ON "event"."id" = "roles"."eventId" LEFT OUTER JOIN "villages" AS "villages" ON "event"."id" = "villages"."eventId" LEFT OUTER JOIN "organisations" AS "organisations" ON "event"."id" = "organisations"."eventId" LEFT OUTER JOIN "applications" AS "applications" ON "event"."id" = "applications"."eventId" LEFT OUTER JOIN "events" AS "applications->event" ON "applications"."eventId" = "applications->event"."id" LEFT OUTER JOIN "users" AS "applications->user" ON "applications"."userId" = "applications->user"."id" LEFT OUTER JOIN "users" AS "user" ON "event"."userId" = "user"."id" WHERE "event"."id" = '1';




