#!/usr/bin/env node
(async () => {
var config = await require("../config.js");
var log = require("./logging.js");

var express = require('express');
var path = require('path');

    var auth = await require('./auth.js');
    var events = await require('./api/events.js');
    var bookings = await require('./api/bookings.js');
    const applications = await require('./api/applications');
    const roles = await require('./api/roles')

    var db = await require('./orm.js')

var passport = await require('./passportConfig.js');


    var P = await require('./permission.js')

var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')


var expressSession = require('express-session')
var SQLiteStore = require('connect-sqlite3')(expressSession);

/************************************
This file sets up the HTTP server 
*************************************/

var server = express();

/************************************
***** SERVER CONFIG *****************
*************************************/


//server.use(require('morgan')('common')); //logging
server.set("trust proxy",true); 

server.use(cookieParser());
server.use(expressSession({secret: 'woodcraft', resave:false, saveUninitialized: true, store: new SQLiteStore}));
server.use(bodyParser.json());
server.use(passport.initialize()); 
server.use(passport.session());
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
        res.redirect('/');
    });

server.get('/auth/google',
  passport.authenticate('google', { scope: ['email','profile'] })); //google OAuth redirect

server.get('/auth/google/callback', 
  passport.authenticate('google', {successRedirect:"/", failureRedirect: '/user' })); // google OAuth callback

server.post('/api/user/login', passport.authenticate('local'), auth.getUser);//local login
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
server.post('/api/booking/delete', P.bookEvent, bookings.deleteBooking);			//delete a booking
server.post('/api/booking/paid', P.bookEvent, bookings.togglePaid); //toggle paid indicator

server.post('/api/village/assign', P.assignVillage, bookings.assignVillage);
server.post('/api/village/create', P.addVillage, events.addVillage);
server.post('/api/village/delete', P.deleteVillage, events.deleteVillage);

server.get('/debug',(req, res) => { //this is a debug method
	console.log("User");
	console.log(req.user);
	console.log("Session");
	console.log(req.session);
	res.json({});
});

server.get('/api/*', function(req, res) { //404 unknown api calls
	res.status(404).end();
});




server.use('/', express.static(path.join(__dirname, '../public'), {fallthrough:true, index: "index.html"}));

server.get('*', function(req, res) {  //serve index.html on deep paths
    return res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

server.use((error, req, res, next) => {
    log.error("ERROR: " + error.message + " on " + req.url + " for " + req.user.userName);
    log.debug(error);
    res.status(500).json({message: error.message});
});

//GO GO GO
log.info("Listening");
server.listen(config.port, config.host);


/************************************
***** UTILITY FUNCTIONS *************
*************************************/

function apiLogger (req, res, next) {
	log.log("info", "%s called %s", req.user.email || "Guest", req.baseUrl);
	next();
}

let guestUser = false;//store the guest user objecct to avoid a query on every request.
function ensureUser (req, res, next) {
	if(req.user)return next();
	if(guestUser) {
		req.user = guestUser;
		return next();
	}
    db.user.scope('withData').findOne({where: {userName: 'Guest'}})
		.then((user) => {
			guestUser = req.user = user.get({plain:true});
		})
		.finally(() => next());
};

})();
