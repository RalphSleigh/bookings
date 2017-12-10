var db = require('../orm.js')
var email = require('../email.js');
var log = require('../logging.js');
const config = require('../config.js');
var updateAssociation = require('./util.js').updateAssociation

var bookings = {}

bookings.getUserBookings = (req, res) => {

	db.booking.findAll({
		where:
		{
			$or:
			[{ guestUUID: req.cookies.guestUUID },
			{
				$and:
				[{ userId: req.user.id },
				{ userId: { $not: 1 } }
				]
			}]
		}, include: [{ model: db.participant }]
	})
		.then(bookings => {
			let data = {};
			bookings.map(b => data[b.id] = b);
			res.json(data);
		});
}

bookings.getEventBookings = (req, res) => {
	db.booking.findAll({
		where:
		{ eventId: req.params.eventId }, include: [{ model: db.participant }]
	})
		.then(bookings => {
			let data = {};
			bookings.map(b => data[b.id] = b);
			res.json(data);
		});
}

bookings.getBooking = (req, res) => {
	db.booking.findOne({ where: { id: req.params.bookingId }, include: [{ model: db.participant }, { model: Event }] })
		.then(booking => {
			let data = {};
			data[booking.id] = booking;
			res.json(data);
		});
}


bookings.createBooking = (req, res) => {

	let newBooking = req.body
	newBooking.guestUUID = req.cookies.guestUUID;
	newBooking.userId = newBooking.userId || req.user.id

	db.booking.create(newBooking, {
		include: [{
			association: 'participants'
		}]
	}).then((booking) => {
		return db.booking.findOne({ where: { id: booking.id }, include: [{ model: db.participant }, { model: db.event }] })
	}).then(booking => {
		log.log("debug", "Created new booking id %s for %s", booking.id, booking.userName);
		let data = {};
		data[booking.id] = booking;
		res.json(data);
		let emailData = booking.get({ plain: true });
		emailData.editURL = config.basePath + (emailData.userId === 1 ? "guestUUID/" + emailData.eventId + "/" + emailData.guestUUID : "event/"+ emailData.eventId + "/book");
		email(booking.userEmail, 'confirmation', emailData);
		return null;//Don't want the request to wait on e-amil promise
	}).catch(e => {
		console.log(e);
		res.status(500).end();
	});
}

/*
bookings.editBooking = (req, res) => {
	Booking.findOne({ where: { id: req.body.id } })
		.then(booking => {
			booking.userName = req.body.user.name;
			booking.userEmail = req.body.user.email;
			booking.userContact = req.body.user.phone;
			booking.paymentType = req.body.paymentType;
			booking.emergencyName = req.body.emergencyName;
			booking.emergencyPhone = req.body.emergencyPhone;
			booking.note = req.body.note;
			Participant.destroy({ where: { bookingId: req.body.id } })//delete previous partiticpants
				.then(() => Promise.all(
					req.body.participants.map(p => {
						p.bookingId = req.body.id;
						return Participant.upsert(p); //insert new ones
					})))
				.then(() => booking.save())
				.then(() => Booking.findOne({ where: { id: req.body.id }, include: [{ model: Participant }] }))
				.then((booking) => {
					let data = {};
					data[booking.id] = booking;
					res.json(data);
				});
		});
}
*/

bookings.editBooking = (req, res) => {
	db.booking.findOne({ where: { id: req.body.id } })
		.then(booking => 
			booking.update(req.body)//this ignores partitipants!
		)
		.then(booking => db.booking.findOne({ where: { id: booking.id }, include: [{ model: db.participant }] }))
		.then(booking => updateAssociation(booking, 'participants', db.participant, req.body.participants))
		.then(() => db.booking.findOne({ where: { id: req.body.id }, include: [{ model: Participant }] }))
		.then(booking => {
			log.log("debug", "Booking id %s for %s", booking.id, req.user.userName);
			let data = {};
			data[booking.id] = booking;
			res.json(data);
		});
}

bookings.togglePaid = (req, res) => {
	db.booking.findOne({ where: { id: req.body.id }, include: [{ model: db.participant }] })
		.then(booking => {
			booking.paid = !booking.paid;
			return booking.save()
		})
		.then((booking) => {
			let data = {};
			data[booking.id] = booking;
			res.json(data);
		});
}

bookings.deleteBooking = (req, res) => {
	db.booking.findOne({ where: { id: req.body.id } })
		.then(booking => booking.destroy())
		.then(() => db.booking.findAll({
			where:
			{
				$or:
				[{ guestUUID: req.cookies.guestUUID },
				{
					$and:
					[{ userId: req.user.id },
					{ userId: { $not: 1 } }
					]
				}]
			}, include: [{ model: db.participant }]
		}))
		.then(bookings => {
			let data = {};
			bookings.map(b => data[b.id] = b);
			res.json(data);
		});
}

/*

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

event.deleteEvent = (req, res) => {
	Event.findOne({where:{id:req.body.id}})
	.then(event => event.destroy())
	.then(() => res.json({}));
}
*/
module.exports = bookings;

