const db = require('../orm.js');
const log = require('../logging.js');
const updateAssociation = require('./util.js').updateAssociation;
const Op = db.Sequelize.Op;

const application = {};

application.addApplication = (req, res) => {
    log.info("Adding Application to event %s for user %s", req.body.eventId, req.user.userName);
    req.body.userId = req.user.id;
    db.application.create(req.body)
        .then(() => db.user.scope('withData').findOne({where: {id: {[Op.eq]: req.user.id}}}))
        .then(user => {
            req.login(user, (err) => res.json(user))
        })
        .catch(e => {
            console.log(e);
            res.status(500).end();
        });
};

module.exports = application;

