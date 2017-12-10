var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var LocalStrategy = require('passport-local').Strategy;

var bcrypt = require('bcrypt');

var config = require("./config.js");

var db = require('./orm.js')

passport.use(new GoogleStrategy({
	clientID: config.GoogleClientID,
	clientSecret: config.GoogleClientSecret,
	callbackURL: config.GoogleCallback
},
	function (accessToken, refreshToken, profile, cb) {
		db.user.findOrCreate({ where: { email: profile.emails[0].value }, include: [{ model: db.role }] })
			.spread((user, created) => {
				if (created) {
					user.userName = profile.displayName;
					//calling save will remove the assosiated Role data, lets get it again..
					return user.save({ include: [{ model: db.role }] }).then(u => user.findOne({ where: { id: u.id }, include: [{ model: db.role }] }))
				}
				return user;
			})
			.then(u => cb(null, u.get({ plain: true })))
			.catch(e => cb(e, null));
	}
));

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (user, done) {
	done(null, user);
});

passport.use(new LocalStrategy({
	usernameField: "email",
	password: "password"
},
	function (username, password, done) {
		db.user.findOne({ where: { email: username }, include: [{ model: db.role }] })
			.then((user) => {
				if (user !== null && bcrypt.compareSync(password, user.password)) {
					return done(null, user.get({ plain: true }))
				} else {
					return done(null, false, { message: 'Incorrect password.' });
				}
			});
	}
));


module.exports = passport;