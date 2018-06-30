const db = require('../orm.js');
const log = require('../logging.js');
const updateAssociation = require('./util.js').updateAssociation;
const Op = db.Sequelize.Op;
const wrapper = require('../errors');
const email = require('../email.js');


const application = {};

application.addApplication = (req, res) => {
    log.info("Adding Application to event %s for user %s", req.body.eventId, req.user.userName);
    req.body.userId = req.user.id;
    db.application.create(req.body)
    .then(() => db.user.scope('withData').findOne({where: {id: {[Op.eq]: req.user.id}}}))
    .then(user => {
        req.login(user, (err) => res.json(user))
        return db.event.findOne({where: {id: {[Op.eq]: req.body.eventId}}})
    })
    .then(e => {
        //send an e-mail
        const emailData = e.get({plain: true});
        emailData.user = req.user;
        emailData.event = emailData;//todo fix this
        email.single(req.user.email, 'applicationReceived', emailData);
        email.toManagers('managerApplicationReceived', emailData);
    })
    .catch(e => {
        console.log(e);
        res.status(500).end();
    });
};

//lets try async/await

application.approveApplication = async function (req, res) {

    const application = await db.application.findOne({where: {id: {[Op.eq]: req.body.id}}});

    log.info("User %s Approving User %s to book for event %s", req.user.userName, application.user.userName, application.event.name);

    await db.role.create({
                             name:           "book",
                             userId:         application.userId,
                             eventId:        application.event.id,
                             organisationId: req.body.org
                         });
    const user = await db.user.scope('withData').findOne({where: {id: {[Op.eq]: application.userId}}});
    await application.destroy();
    const event = await db.event.scope('details').findOne({where: {id: {[Op.eq]: application.eventId}}});

    const values = {event: event, user: user};
    email.single(user.email, 'applicationApproved', values);

    res.json({events: [event]});
};

application.declineApplication = (req, res) => {
    let eventId = null;
    db.application.findOne({where: {id: {[Op.eq]: req.body.id}}})
    .then(a => {
        log.info("User %s Declining Application to event %s", req.user.userName, eventId);
        eventId = a.eventId;
        return a.destroy();
    })
    .then(() => db.event.scope('details').findOne({where: {id: {[Op.eq]: eventId}}}))
    .then(event => {
        if (event === null) res.status(404).end();
        else res.json({events: [event]});
    });
};


module.exports = wrapper(application);

