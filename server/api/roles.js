module.exports = (async () => {
    const db = await require('../orm.js');
    const log = require('../logging.js');
    const Op = db.Sequelize.Op;
    const wrapper = require('../errors');

    const role = {};

    role.createRole = async function (req, res) {
        log.info("Creating role %s for user %s event %s village %s organisation %s", req.body.name, req.body.userId, req.body.eventId, req.body.villageId, req.body.organisationId);

        await db.role.create(req.body);

        const event = await db.event.scope('details').findOne({where: {id: {[Op.eq]: req.body.eventId}}});
        res.json({events: [event]});
    };

    role.deleteRole = async function (req, res) {

        const role = await db.role.findOne({where: {id: {[Op.eq]: req.body.id}}});

        log.info("Deleting role %s", role.id);

        await role.destroy();

        const event = await db.event.scope('details').findOne({where: {id: {[Op.eq]: role.eventId}}});
        res.json({events: [event]});
    };

    return wrapper(role);

})();

