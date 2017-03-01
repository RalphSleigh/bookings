var extend = require('util')._extend;
var log = require('./logging.js');

var User = require('./models/user.js');
var Role = require('./models/role.js');

var auth = {};

/*
auth.doLogin = function(req, res) {
		User.findOne({where:{email:req.body.email}, include:[{model:Role}]})
		.then((user) => {
			if(user !== null && bcrypt.compareSync(req.body.password, user.password)) {
								
				req.session.user = user;

				//send client a copy of user object without password field
				var resUser = extend({}, user.dataValues);
				delete resUser.password
				res.send(resUser).end();
			} else {
				res.status(401).end();
			}
		});
}
*/

auth.getUser = function(req, res) {
	log.log("debug","New Session: %s %s", req.ip, req.headers["user-agent"]);
	var resUser = extend({}, req.user);
	delete resUser.Password
	res.json(resUser);
}

auth.doLogout = function(req, res) {
	req.logout();
	User.findOne({where:{userName:'Guest'},include:[{model:Role}]})
		.then((user) => {
			req.user = user.get({plain:true});
			var resUser = extend({}, req.user);
			delete resUser.password
			res.send(resUser).end();
		});
}

module.exports = auth;