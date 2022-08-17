const moment = require('moment');

const db = require('../orm.js');
const config = require('../../config');
const email = require('../email.js');
const log = require('../logging.js');
const updateAssociation = require('./util.js').updateAssociation;
const Op = db.Sequelize.Op;
const wrapper = require('../errors');
const _ = require('lodash');


import feeFactory from '../../shared/fee/feeFactory';

const bookings = {};

bookings.getUserBookings = (req, res) => {

    db.booking.findAll({
                           where:
                               {
                                   [Op.or]:
                                       [{guestUUID: {[Op.eq]:req.cookies.guestUUID}},
                                           {
                                               [Op.and]:
                                                   [{userId: {[Op.eq]: req.user.id}},
                                                       {userId: {[Op.not]: 1}}
                                                   ]
                                           }]
                               }, include: [{model: db.participant}, {model: db.payment}]
                       })
    .then(bookings => {
        let data = {bookings};
        res.json(data);
    });
};

const getUserScopes = (user, event, participants = true) => {

    const scopes = [];

    if (user.roles.find(role => role.name === "admin") || user.id === event.userId) scopes.push({method: ['Limited', event.id, null, null, participants ? 'defaultScope': null, true]});

    user.roles.filter(r => r.eventId === event.id && r.name !== 'book').forEach(r => {

        let participantScope = null;
        let includePayments = false;
        switch (r.name) {
            case "KP":
                participantScope = "KP";
                break;
            case "Money":
                participantScope = "Money";
                includePayments = true;
                break;
            default:
                participantScope = "defaultScope";
        }

        scopes.push({method: ['Limited', event.id, r.villageId, r.organisationId, participants ? participantScope : null, includePayments]})
    });

    return scopes;

};

bookings.getEventBookings = async function (req, res) {
    //need to loop over a users roles and assemble the data they are allowed to see
    const event = await db.event.findOne({where: {id: {[Op.eq]: req.params.eventId}}});

    const flat = await getBookingsAndCombineScopes(req.user, event)

    res.json({bookings: flat});

};

bookings.getBooking = (req, res) => {
    db.booking.findOne({where: {id: req.params.bookingId}, include: [{model: db.participant}, {model: db.event}, {model: db.payment}]})
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
    newBooking.maxParticipants = newBooking.participants.length;
    newBooking.participants.forEach(p => {
        delete p.internalExtra
    });

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


        //send an e-mail
        const fees = feeFactory(booking.event);
        const emailData = booking.get({plain: true});
        emailData.editURL = config.BASE_PATH + '/' + (emailData.userId === 1 ? "guestUUID/" + emailData.eventId + "/" + emailData.guestUUID : "event/" + emailData.eventId + "/book");
        emailData.user = req.user;
        email.single(booking.userEmail, 'confirmation', emailData);
        email.toManagers('managerBookingCreated', emailData);

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

    delete req.body.internalExtra; //delete the internal extra so user can't update.
    delete req.body.payments
    req.body.participants.forEach(p => {
        delete p.internalExtra
    });
    db.booking.findOne({where: {id: req.body.id}, include: [{model:db.event}]})
    .then(booking => {
        if(moment().isBefore(booking.event.bookingDeadline)) {
            req.body.maxParticipants = req.body.participants.length
        } else {
            req.body.maxParticipants = Math.max(booking.maxParticipants || 0, req.body.participants.length);
        }
        return booking.update(req.body)//this ignores partitipants!
    })
    .then(booking => db.booking.findOne({where: {id: booking.id}, include: [{model: db.participant}]}))
    .then(booking => updateAssociation(booking, 'participants', db.participant, req.body.participants))
    .then(() => db.booking.findOne({where: {id: req.body.id}, include: [{model: db.participant}, {model: db.payment}, {model:db.event}]}))
    .then(booking => {
        log.log("debug", "User %s Editing Booking id %s", req.user.userName, booking.id);
        let data = {};
        data.bookings = [booking];
        res.json(data);

        if(req.user.id === booking.userId) {
            const fees = feeFactory(booking.event);
            const emailData = booking.get({plain: true});
            emailData.editURL = config.BASE_PATH + '/' + (emailData.userId === 1 ? "guestUUID/" + emailData.eventId + "/" + emailData.guestUUID : "event/" + emailData.eventId + "/book");
            emailData.user = req.user;
            email.single(booking.userEmail, 'updated', emailData);
            email.toManagers('managerBookingUpdated', emailData);
        }
    })
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
    db.booking.findOne({where: {id: req.body.id},include: [{model:db.event}, {model: db.participant}]})
    .then(booking => {
        const emailData = booking.get({plain: true});
        emailData.user = req.user;
        //email.single(booking.userEmail, 'updated', emailData);
        email.toManagers('managerBookingDeleted', emailData);
        return booking.destroy()
    })
    .then(() => db.booking.findAll({
                                       where:
                                           {
                                               [Op.or]:
                                                   [{guestUUID: {[Op.eq]: req.cookies.guestUUID}},
                                                       {
                                                           [Op.and]:
                                                               [{userId: {[Op.eq]: req.user.id}},
                                                                   {userId: {[Op.not]: 1}}
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
    const booking = await db.booking.findOne({where: {id: req.body.bookingId}, include: [{model: db.participant}]});
    booking.villageId = req.body.villageId;
    await booking.save();
    const data = {};
    data.bookings = [booking];
    res.json(data);
};

bookings.addPayment = async function (req, res, next) {

    await db.payment.create(req.body);

    const booking = await db.booking.findOne({
        where:   {id: {[Op.eq]: req.body.bookingId}},
        include: [{model: db.event}]
    }); //get the booking, but we can't send this as dangerous scope.

    const bookings = await getBookingAndCombineScopes(req.user, booking)

    res.json({bookings: bookings});
};

bookings.syncMax = async function (req, res, next) {
    const booking = await db.booking.findOne({
                                                 where:   {id: {[Op.eq]: req.body.bookingId}},
                                                 include: [{model: db.participant}, {model: db.event}]
                                             }); //get the booking, but we can't send this as dangerous scope.

    booking.maxParticipants = booking.participants.length;

    await booking.save()

    const bookings = await getBookingAndCombineScopes(req.user, booking)

    res.json({bookings: bookings});
};

bookings.deletePayment = async function (req, res, next) {


    const payment = await db.payment.findOne({where: {id: {[Op.eq]: req.body.id}}});

    const booking = await db.booking.findOne({
                                                 where:   {id: {[Op.eq]: payment.bookingId}},
                                                 include: [{model: db.event}]
                                             }); //get the booking, but we can't send this as dangerous scope.

    await payment.destroy();

    const bookings = await getBookingAndCombineScopes(req.user, booking)

    res.json({bookings: bookings});
};

bookings.approveMembership = async function (req, res, next) {


    const participant = await db.participant.findOne({where: {id: {[Op.eq]: req.body.id}}});
    const booking = await db.booking.findOne({where: {id: {[Op.eq]: participant.bookingId}}, include: [{model: db.event}]});

    participant.internalExtra = {... participant.internalExtra, member: true};

    await participant.save();

    const bookings = await getBookingAndCombineScopes(req.user, booking);

    res.json({bookings: bookings});
};

bookings.unapproveMembership = async function (req, res, next) {
    const participant = await db.participant.findOne({where: {id: {[Op.eq]: req.body.id}}});
    const booking = await db.booking.findOne({where: {id: {[Op.eq]: participant.bookingId}}, include: [{model: db.event}]});

    participant.internalExtra = {... participant.internalExtra, member: false};

    await participant.save();

    const bookings = await getBookingAndCombineScopes(req.user, booking);

    res.json({bookings: bookings});
};

bookings.approveDBS = async function (req, res, next) {


    const participant = await db.participant.findOne({where: {id: {[Op.eq]: req.body.id}}});
    const booking = await db.booking.findOne({where: {id: {[Op.eq]: participant.bookingId}}, include: [{model: db.event}]});

    participant.internalExtra = {... participant.internalExtra, dbs: true};

    await participant.save();

    const bookings = await getBookingAndCombineScopes(req.user, booking);

    res.json({bookings: bookings});
};

bookings.unapproveDBS = async function (req, res, next) {
    const participant = await db.participant.findOne({where: {id: {[Op.eq]: req.body.id}}});
    const booking = await db.booking.findOne({where: {id: {[Op.eq]: participant.bookingId}}, include: [{model: db.event}]});

    participant.internalExtra = {... participant.internalExtra, dbs: false};

    await participant.save();

    const bookings = await getBookingAndCombineScopes(req.user, booking);

    res.json({bookings: bookings});
};

/**
 *  Test function to update a paricipants updatedAt, disabled in production enviroments.
 *
 */

bookings.updateParticipantDate = async function (req, res) {

    const results = await db.sequelize.query('UPDATE participants SET "updatedAt" = $date WHERE id = $id',
                                             {
                                                 bind: {
                                                     id:   req.params.participantId,
                                                     date: moment(req.params.date).format('YYYY-MM-DD HH:mm:ss.SSS')
                                                 },
                                                 type: db.sequelize.QueryTypes.UPDATE
                                             });

    const paricipant = await db.participant.findOne({where: {id: req.params.participantId}});

    res.json(paricipant);

};

const getBookingAndCombineScopes = async function (user, booking) {

    const scopes = getUserScopes(user, booking.event);
    const results = await Promise.all(scopes.map(s => db.booking.scope(s).findOne({where: {id: booking.id}})));

    const obj = results.filter(r => r).reduce((a, c) => {

        _.merge(a, c.get({plain: true}))
        return a

    }, {});

    return [obj]
}

const getBookingsAndCombineScopes = async function (user, event) {
    const scopes = getUserScopes(user, event);
    console.log(`getting details for ${scopes.length} scopes`)
    console.log(scopes)
    const results = await Promise.all(scopes.map(s => db.booking.scope(s).findAll()));

    const obj = results.filter(r => r).reduce((a, c) => {

        c.forEach(b => {

            a[b.id] = a[b.id] || {}

            _.merge(a[b.id], b.get({plain: true}))

        });

        return a

    }, {});

    const flat = []

    for (let key in obj) flat.push(obj[key])

    return flat
}



module.exports = wrapper(bookings);



