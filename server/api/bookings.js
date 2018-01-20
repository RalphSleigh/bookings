const db = require('../orm.js');
const email = require('../email.js');
const log = require('../logging.js');
const updateAssociation = require('./util.js').updateAssociation;
const Op = db.Sequelize.Op;
const wrapper = require('../errors');

const bookings = {};

bookings.getUserBookings = (req, res) => {

    db.booking.findAll({
        where:
            {
                $or:
                    [{guestUUID: req.cookies.guestUUID},
                        {
                            $and:
                                [{userId: req.user.id},
                                    {userId: {$not: 1}}
                                ]
                        }]
            }, include: [{model: db.participant}]
    })
        .then(bookings => {
            let data = {bookings};
            res.json(data);
        });
};

bookings.getEventBookings = async function (req, res) {
    //need to loop over a users roles and assemble the data they are allowed to see
    event = await db.event.findOne({where: {id: {[Op.eq]: req.params.eventId}}});

    const scopes = [];

    if (req.user.roles.find(role => role.name === "admin") || req.user.id === event.userId) scopes.push({method: ['Limited', event.id, null, null, 'defaultScope']});

    req.user.roles.filter(r => r.eventId === event.id).forEach(r => {

        let participantScope = null;
        switch (r.name) {
            case "KP":
                participantScope = "KP";
                break;
            case "Money":
                participantScope = "Money";
                break;
            default:
                participantScope = "defaultScope";
        }

        scopes.push({method: ['Limited', event.id, r.villageId, r.organisationId, participantScope]})
    });

    const bookings = await db.booking.scope(scopes).findAll();

    const results = await Promise.all(scopes.map(s => db.booking.scope(s).findAll()));

    const flat = results.reduce((a, b) => a.concat(b), []);

    res.json({bookings: flat});

};

bookings.getBooking = (req, res) => {
    db.booking.findOne({where: {id: req.params.bookingId}, include: [{model: db.participant}, {model: db.event}]})
        .then(booking => {
            let data = {};
            data.bookings = [booking];
            res.json(data);
        });
};


bookings.createBooking = (req, res) => {

    let newBooking = req.body;
    newBooking.guestUUID = req.cookies.guestUUID;
    newBooking.userId = newBooking.userId || req.user.id;

    db.booking.create(newBooking, {
        include: [{
            association: 'participants'
        }]
    }).then((booking) => {
        return db.booking.findOne({where: {id: booking.id}, include: [{model: db.participant}, {model: db.event}]})
    }).then(booking => {
        log.log("debug", "Created new booking id %s for %s", booking.id, booking.userName);
        let data = {};
        data.bookings = [booking];
        res.json(data);

        let emailData = booking.get({plain: true});
        emailData.editURL = config.basePath + (emailData.userId === 1 ? "guestUUID/" + emailData.eventId + "/" + emailData.guestUUID : "event/" + emailData.eventId + "/book");
        email(booking.userEmail, 'confirmation', emailData);
        return null;//Don't want the request to wait on e-amil promise
    }).catch(e => {
        console.log(e);
        res.status(500).end();
    });
};

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
    db.booking.findOne({where: {id: req.body.id}})
        .then(booking =>
            booking.update(req.body)//this ignores partitipants!
        )
        .then(booking => db.booking.findOne({where: {id: booking.id}, include: [{model: db.participant}]}))
        .then(booking => updateAssociation(booking, 'participants', db.participant, req.body.participants))
        .then(() => db.booking.findOne({where: {id: req.body.id}, include: [{model: db.participant}]}))
        .then(booking => {
            log.log("debug", "User %s Editing Booking id %s", req.user.userName, booking.id);
            let data = {};
            data.bookings = [booking];
            res.json(data);
        });
};

bookings.togglePaid = (req, res) => {
    db.booking.findOne({where: {id: req.body.id}, include: [{model: db.participant}]})
        .then(booking => {
            booking.paid = !booking.paid;
            return booking.save()
        })
        .then((booking) => {
            let data = {};
            data.bookings = [booking];
            res.json(data);
        });
};

bookings.deleteBooking = (req, res) => {
    db.booking.findOne({where: {id: req.body.id}})
        .then(booking => booking.destroy())
        .then(() => db.booking.findAll({
            where:
                {
                    $or:
                        [{guestUUID: req.cookies.guestUUID},
                            {
                                $and:
                                    [{userId: req.user.id},
                                        {userId: {$not: 1}}
                                    ]
                            }]
                }, include: [{model: db.participant}]
        }))
        .then(bookings => {
            let data = {bookings};
            res.json(data);
        });
};

bookings.assignVillage = async function (req, res) {
    booking = await db.booking.findOne({where: {id: req.body.bookingId}, include: [{model: db.participant}]});
    booking.villageId = req.body.villageId;
    await booking.save();
    const data = {};
    data.bookings = [booking];
    res.json(data);
};

module.exports = wrapper(bookings);



