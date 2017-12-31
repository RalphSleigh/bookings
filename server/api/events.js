const db = require('../orm.js');
const log = require('../logging.js');
const updateAssociation = require('./util.js').updateAssociation;
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

event.getDetails = (req, res) => {
    db.event.scope('details').findOne({where: {id: req.params.eventId}})
        .then(event => {
            if (event === null) res.status(404).end();
            else res.json({events: [event]});
        });
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
    const event = await db.event.scope('details').findOne({where: {id: {[Op.eq]: village.eventId}}});
    res.json({events: [event]});
};

event.deleteVillage = async function (req, res) {
    const village = await db.village.findOne({where: {id: {[Op.eq]: req.body.id}}});
    await village.destroy();

    const event = await db.event.scope('details').findOne({where: {id: {[Op.eq]: village.eventId}}});
    const bookings = await db.booking.findAll({
        where:
            {eventId: {[Op.eq]: event.id}}, include: [{model: db.participant}]
    });
    res.json({events: [event], bookings: bookings});
};


module.exports = wrapper(event);

