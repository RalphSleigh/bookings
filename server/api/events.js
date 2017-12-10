var db = require('../orm.js')
var log = require('../logging.js');
var updateAssociation = require('./util.js').updateAssociation

var event = {}

event.getEvents = (req, res) => {
	db.event.findAll().then(events => {
			let data = {};
			events.map(e => data[e.id] = e)
			res.json(data)}
			);
}

event.getEvent = (req, res) => {
	db.event.findOne({where:{id:req.params.eventId}, include: [{ model: db.organisation }]})
	.then(event => {
		if(event ===  null) res.status(404).end();
		else res.json(event);
	});
}

event.editEvent = (req, res) => {
	log.log("debug","Edited event %s", req.body.id);
	db.event.findOne({where:{id:req.body.id}})
	.then(event =>{
		if(event ===  null)return res.status(404).end();
		return event.update(req.body)		
	})
	.then(() => db.event.findOne({where:{id:req.body.id}, include: [{ model: db.organisation }]}))
	.then(event => updateAssociation(event, 'organisations', db.organisation, req.body.organisations))
	.then(() => db.event.findOne({where:{id:req.body.id}, include: [{ model: db.organisation }]}))
	.then(event => {
		res.json(event);
	});
}

event.createEvent = (req, res) => {
	db.event.create(req.body, {
		include: [{
			association: db.event.organisation
		}]})
	.then((e) => {
		log.log("debug","Created event %s", e.id);
		return db.event.findAll({include: {model:db.organisation}})})
	.then(events => {
			let data = {};
			events.map(e => data[e.id] = e);
			res.json(data);
		});
}

event.deleteEvent = (req, res) => {
	log.log("debug","Deleting event %s", req.body.id);
	db.event.findOne({where:{id:req.body.id}})
	.then(event => event.destroy())
	.then(() => res.json({}));
}

module.exports = event;

