var express = require('express');
var path = require('path');
var o = require('./orm.js');
var auth = require('./auth.js');
var events = require('./api/events.js');
var bookings = require('./api/bookings.js');
var User = require('./models/user.js');
var Role = require('./models/role.js');

var P = require('./permission.js')

var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var expressSession = require('express-session')




var server = express();


function logErrors (err, req, res, next) {
  console.error(err.stack)
  next(err)
}

function ensureUser (req, res, next) {
	if(req.session.user)return next();

	User.findOne({where:{userName:'Guest'},include:[{model:Role}]})
		.then((user) => {
			req.session.user = user;
		})
		.finally(() => next());
}

server.use(require('morgan')('common'));
server.use(cookieParser());
server.use(expressSession({secret: 'woodcraft'}));
server.use(bodyParser.json());
server.use(ensureUser);
server.use(logErrors);

server.post('/api/user/login', auth.doLogin); 	//login
server.get('/api/user', auth.getUser);   		//get current user info
server.post('/api/user/logout', auth.doLogout); //logout

server.get('/api/events', events.getEvents);						//get list of events
server.get('/api/event/:eventId', events.getEvent);					//get single eventId
server.post('/api/event/edit', P.editEvent, events.editEvent);		//edit an event
server.post('/api/event/create', P.createEvent, events.createEvent);//create event
server.post('/api/event/delete', P.createEvent, events.deleteEvent);//delete event


server.get('/api/booking/user', bookings.getUserBookings);									//get users  own bookings
server.get('/api/booking/event/:eventId', P.getEventBookings, bookings.getEventBookings);	//get all bookings for an event
server.get('/api/booking/:bookingId', P.getBooking, bookings.getBooking);	//get a single booking

server.post('/api/booking/:eventId/create', P.bookEvent, bookings.createBooking);//create a booking
server.post('/api/booking/edit', P.bookEvent, bookings.editBooking);			//edit a booking
server.post('/api/booking/delete', P.bookEvent, bookings.deleteBooking);			//delete a booking

server.get('/api/*', function(req, res) {
	res.status(404).end();
});




server.use('/', express.static(path.join(__dirname, '../public'), {fallthrough:true, index: "index.html"}));

server.get('*', function(req, res, next) {
    return res.sendfile('./public/index.html');
});


server.listen(8080);