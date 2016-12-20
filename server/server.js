var express = require('express');
var path = require('path');
var o = require('./orm.js');
var auth = require('./auth.js');
var events = require('./api/events.js');

var P = require('./permission.js')

var bodyParser = require('body-parser')
var expressSession = require('express-session')




var server = express();


function logErrors (err, req, res, next) {
  console.error(err.stack)
  next(err)
}


server.use(expressSession({secret: 'woodcraft'}));
server.use(bodyParser.json());
server.use(logErrors);

server.post('/api/user/login', auth.doLogin);
server.get('/api/user', auth.getUser);
server.post('/api/user/logout', auth.doLogout);

server.get('/api/events', events.getEvents);
server.get('/api/event/:eventId', events.getEvent);
server.post('/api/event/edit', P.editEvent, events.editEvent);
server.post('/api/event/create', P.createEvent, events.createEvent);
server.post('/api/event/delete', P.createEvent, events.deleteEvent);


server.get('/api/*', function(req, res) {
	res.status(404).end();
});




server.use('/', express.static(path.join(__dirname, '../public'), {fallthrough:true, index: "index.html"}));

server.get('*', function(req, res, next) {
    return res.sendfile('./public/index.html');
});


server.listen(8080);