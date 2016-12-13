var bcrypt = require('bcrypt');
var extend = require('util')._extend;

var User = require('./models/user.js');
var Role = require('./models/role.js');

var auth = {};


auth.doLogin = function(req, res) {
		User.findOne({where:{Email:req.body.email}, include:[{model:Role}]})
		.then((user) => {
			if(user !== null && bcrypt.compareSync(req.body.password, user.Password)) {
								
				req.session.user = user;

				//send client a copy of user object without password field
				var resUser = extend({}, user.dataValues);
				delete resUser.Password
				res.send(resUser).end();
			} else {
				res.status(401).end();
			}
		});
}

auth.getUser = function(req, res) {

	if(!req.session.user) {
		User.findOne({where:{UserName:'Guest'},include:[{model:Role}]})
		.then((user) => {
			req.session.user = user;
			var resUser = extend({}, user.dataValues);
			delete resUser.Password
			res.send(resUser).end();
		})
	} else {
		var resUser = extend({}, req.session.user);
		delete resUser.Password
		res.send(resUser).end();
	}
}

auth.doLogout = function(req, res) {
	delete req.session.user;
	User.findOne({where:{UserName:'Guest'},include:[{model:Role}]})
		.then((user) => {
			req.session.user = user;
			var resUser = extend({}, user.dataValues);
			delete resUser.Password
			res.send(resUser).end();
		});
}

module.exports = auth;