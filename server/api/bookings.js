var Booking = require('../models/booking.js');
var Participant = require('../models/participant.js');
var Event = require('../models/event.js')
var email = require('../email.js');
var log = require('../logging.js');

var bookings = {}

bookings.getUserBookings = (req, res) => {

	Booking.findAll({
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
		}, include: [{ model: Participant }]
	})
		.then(bookings => {
			let data = {};
			bookings.map(b => data[b.id] = b);
			res.json(data);
		});
}

bookings.getEventBookings = (req, res) => {
	Booking.findAll({
		where:
		{ eventId: req.params.eventId }, include: [{ model: Participant }]
	})
		.then(bookings => {
			let data = {};
			bookings.map(b => data[b.id] = b);
			res.json(data);
		});
}

bookings.getBooking = (req, res) => {
	Booking.findOne({ where: { id: req.params.bookingId }, include: [{ model: Participant }, { model: Event }] })
		.then(booking => {
			let data = {};
			data[booking.id] = booking;
			res.json(data);
		});
}


bookings.createBooking = (req, res) => {
	let newBooking = {}
	newBooking.userName = req.body.user.name;
	newBooking.userEmail = req.body.user.email;
	newBooking.userContact = req.body.user.phone;
	newBooking.paymentType = req.body.paymentType;
	newBooking.eventId = req.body.eventId;
	newBooking.userId = req.user.id
	newBooking.participants = req.body.participants;
	newBooking.guestUUID = req.cookies.guestUUID;

	Booking.create(newBooking, {
		include: [{
			association: Booking.Participant
		}]
	}).then((booking) => {
		return Booking.findOne({ where: { id: booking.id }, include: [{ model: Participant }, { model: Event }] })
	}).then(booking => {
		log.log("debug", "Created new booking id %s for %s", booking.id, booking.userName);
		let data = {};
		data[booking.id] = booking;
		res.json(data);
		email(booking.userEmail, 'confirmation', booking.get({ plain: true }));
	}).catch(e => {
		console.log(e);
		res.status(500).end();
	});
}

bookings.editBooking = (req, res) => {
	Booking.findOne({ where: { id: req.body.id } })
		.then(booking => {
			booking.userName = req.body.user.name;
			booking.userEmail = req.body.user.email;
			booking.userContact = req.body.user.phone;
			booking.paymentType = req.body.paymentType;

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

bookings.togglePaid = (req, res) => {
	Booking.findOne({ where: { id: req.body.id }, include: [{ model: Participant }] })
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
	Booking.findOne({ where: { id: req.body.id } })
		.then(booking => booking.destroy())
		.then(() => Booking.findAll({
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
			}, include: [{ model: Participant }]
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

