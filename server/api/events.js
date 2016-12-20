var Event = require('../models/event.js');

var event = {}

event.getEvents = (req, res) => {
	Event.findAll().then(events => {
			let data = {};
			events.map(e => data[e.id] = e)
			res.json(data)}
			);
}

event.getEvent = (req, res) => {
	Event.findOne({where:{id:req.params.eventId}})
	.then(event => {
		if(event ===  null) res.status(404).end();
		else res.json(event);
	});
}

event.editEvent = (req, res) => {
	Event.findOne({where:{id:req.body.id}})
	.then(event =>{
		if(event ===  null)return res.status(404).end();
		event.update(req.body)
		.then(event => {
			res.json(event);
		});
	})
}

event.createEvent = (req, res) => {
	Event.create(req.body)
	.then(() => Event.findAll())
	.then(events => {
			let data = {};
			events.map(e => data[e.id] = e);
			res.json(data);
		});
}

event.deleteEvent = (req, res) => {
	Event.findOne({where:{id:req.body.id}})
	.then(event => event.destroy())
	.then(() => res.json({}));
}

module.exports = event;

