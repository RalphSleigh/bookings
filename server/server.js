#!/usr/bin/env node
require("babel-register");
require("../config.js")()//config returns a promise the first time then overwrites its own module.exports to return a plain object on subsequent requires.
    .then(config => {
        const db = require('./orm.js');

        const log = require("./logging.js");
        const backup = require("./backup");

        const express = require('express');
        const path = require('path');

        const auth = require('./auth.js');
        const events = require('./api/events.js');
        const bookings = require('./api/bookings.js');
        const applications = require('./api/applications');
        const roles = require('./api/roles');


        const passport = require('./passportConfig.js');


        const P = require('./permission.js');

        const cookieParser = require('cookie-parser');
        const bodyParser = require('body-parser');

        const expressSession = require('express-session');
        const SQLiteStore = require('connect-sqlite3')(expressSession);

        /************************************
         This file sets up the HTTP server
         *************************************/

        const server = express();

        /************************************
         ***** SERVER CONFIG *****************
         *************************************/


//server.use(require('morgan')('common')); //logging
        server.set("trust proxy", true);

        server.use(cookieParser());
        server.use(expressSession({
            secret: 'woodcraft',
            resave: false,
            saveUninitialized: true,
            store: new SQLiteStore,
            cookie: {maxAge: 1000 * 60 * 60 * 24}
        }));
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({extended: true}));
        server.use(passport.initialize());
        server.use(passport.session());
        server.use(newSessionLogger);
        server.use(ensureUser);  //if passport does not log us in, set req.user to the guest user object, this makes handlers simpler.
        server.use('/api/*', apiLogger);

        /************************************
         ***** ROUTES ************************
         *************************************/

        server.get('/auth/facebook',
            passport.authenticate('facebook', {scope: ['email']}));

        server.get('/auth/facebook/callback',
            passport.authenticate('facebook', {failureRedirect: '/user'}),
            function (req, res) {
                // Successful authentication, redirect home.
                log.info({
                    message: "User logged in from Facebook {ip} {session} {user} {email}",
                    ip: req.ip,
                    session: req.session.id,
                    user: req.user.userName,
                    email: req.user.email
                });
                res.redirect('/');
            });

        server.get('/auth/google',
            passport.authenticate('google', {scope: ['email', 'profile']})); //google OAuth redirect

        server.get('/auth/google/callback',
            passport.authenticate('google', {failureRedirect: '/user'}),
            function (req, res) {
                // Successful authentication, redirect home.
                log.info({
                    message: "User logged in from Google {ip} {session} {user} {email}",
                    ip: req.ip,
                    session: req.session.id,
                    user: req.user.userName,
                    email: req.user.email
                });
                res.redirect('/');
            }); // google OAuth callback

        server.get('/auth/yahoo',
            passport.authenticate('yahoo')); //google OAuth redirect

        server.get('/auth/yahoo/callback',
            passport.authenticate('yahoo', {failureRedirect: '/user'}),
            function (req, res) {
                // Successful authentication, redirect home.
                log.info({
                    message: "User logged in from Yahoo {ip} {session} {user} {email}",
                    ip: req.ip,
                    session: req.session.id,
                    user: req.user.userName,
                    email: req.user.email
                });
                res.redirect('/');
            }); // google OAuth callback

        server.get('/auth/microsoft', passport.authenticate('azuread-openidconnect', {failureRedirect: '/'}));

        server.post('/auth/microsoft/callback',
            passport.authenticate('azuread-openidconnect', {failureRedirect: '/'}),
            (req, res) => {
                log.info({
                    message: "User logged in from Microsoft {ip} {session} {user} {email}",
                    ip: req.ip,
                    session: req.session.id,
                    user: req.user.userName,
                    email: req.user.email
                });
                res.redirect('/');
            });

        server.get('/api/env', (req, res) => res.json({env: config.ENV}));


        server.get('/api/user', auth.getUser);   		//get current user info
        server.post('/api/user/logout', auth.doLogout); //logout
        server.get('/api/users', P.getUserList, auth.getUserList);

        server.post('/api/role/create', P.createRole, roles.createRole);
        server.post('/api/role/delete', P.deleteRole, roles.deleteRole);

        server.get('/api/events', events.getEvents);						//get list of events
        server.get('/api/event/:eventId', events.getEvent);					//get single eventId
        server.post('/api/event/edit', P.editEvent, events.editEvent);		//edit an event
        server.post('/api/event/create', P.createEvent, events.createEvent);//create event
        server.post('/api/event/delete', P.createEvent, events.deleteEvent);//delete event
        server.post('/api/event/:eventId/apply', P.applyToBookEvent, applications.addApplication); //apply to book for event
        server.get('/api/event/:eventId/details', P.getEventBookings, events.getDetails);

        server.post('/api/application/approve', P.decideApplication, applications.approveApplication);
        server.post('/api/application/decline', P.decideApplication, applications.declineApplication);

        server.get('/api/booking/user', bookings.getUserBookings);									//get users  own bookings
        server.get('/api/booking/event/:eventId', P.getEventBookings, bookings.getEventBookings);	//get all bookings for an event
        server.get('/api/booking/:bookingId', P.getBooking, bookings.getBooking);	//get a single booking

        server.post('/api/booking/:eventId/create', P.bookEvent, P.bookIntoOrganisation, bookings.createBooking);//create a booking
        server.post('/api/booking/edit', P.editBooking, P.bookIntoOrganisation, bookings.editBooking);			//edit a booking
        server.post('/api/booking/delete', P.deleteBooking, bookings.deleteBooking);			//delete a booking
        server.post('/api/booking/paid', P.bookEvent, bookings.togglePaid); //toggle paid indicator

        server.post('/api/village/assign', P.assignVillage, bookings.assignVillage);
        server.post('/api/village/create', P.addVillage, events.addVillage);
        server.post('/api/village/delete', P.deleteVillage, events.deleteVillage);

        server.post('/api/payment/add', P.addPayment, bookings.addPayment);
        server.post('/api/payment/delete', P.addPayment, bookings.deletePayment);

        if (config.ENV === 'dev') {

            server.post('/api/user/login', passport.authenticate('local'), auth.getUser);//local login

            server.get('/api/setdate/:participantId/:date', bookings.updateParticipantDate);

            server.get('/debug', (req, res) => { //this is a debug method
                console.log("User");
                console.log(req.user);
                console.log("Session");
                console.log(req.session);
                res.json({});
            });
        }

        server.get('/api/*', function (req, res) { //404 unknown api calls
            res.status(404).end();
        });

        server.use('/', express.static(path.join(__dirname, '../public'), {fallthrough: true, index: "index.html"}));

        server.get('*', function (req, res) {  //serve index.html on deep paths
            return res.sendFile(path.join(__dirname, '../public', 'index.html'));
        });

        server.use((error, req, res, next) => {
            log.error({
                message: "{errorMessage} on {url} for {user}",
                errorMessage: error.message,
                url: req.url,
                user: req.user.userName
            });
            log.debug(error.stack);
            res.status(500).json({message: error.message});
        });

//GO GO GO
        log.info({
            message: "Server Startup {hostname}:{port} for {baseURL}",
            hostname: config.HOST,
            port: config.PORT,
            baseURL: config.BASE_PATH
        });
        server.listen(config.PORT, config.HOST);


        /************************************
         ***** UTILITY FUNCTIONS *************
         *************************************/

        function apiLogger(req, res, next) {
            res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
            res.header('Expires', '-1');
            res.header('Pragma', 'no-cache');
            log.info({
                message: "{email} called {url} {session}",
                email: req.user.email || "Guest",
                url: req.baseUrl,
                session: req.session.id
            });

            next();
        }

        let guestUser = false;//store the guest user object to avoid a query on every request.
        function ensureUser(req, res, next) {
            if (req.user) return next();
            if (guestUser) {
                req.user = guestUser;
                return next();
            }
            db.user.scope('withData').findOne({where: {userName: 'Guest'}})
                .then((user) => {
                    guestUser = req.user = user.get({plain: true});
                })
                .finally(() => next());
        }

        function newSessionLogger(req, res, next) {
            if (!req.session.logged) {
                req.session.logged = true;
                log.info({
                    message: "New Session: {ip} {userAgent} {session}",
                    ip: req.ip,
                    userAgent: req.headers["user-agent"],
                    session: req.session.id
                });
            }
            next();
        }

    }).catch(e => {
    console.log(e)
});
