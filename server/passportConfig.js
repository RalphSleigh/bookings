var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var LocalStrategy = require('passport-local').Strategy;

var bcrypt = require('bcrypt');

var config = require("./config.js");
var User = require('./models/user.js');
var Role = require('./models/role.js');

passport.use(new GoogleStrategy({
    clientID: config.GoogleClientID,
    clientSecret: config.GoogleClientSecret,
    callbackURL: config.GoogleCallback
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ where:{email:profile.emails[0].value},include:[{model:Role}]})
	.spread((user, created) => {
		if(created) {
			user.userName = profile.displayName;
			//calling save will remove the assosiated Role data, lets get it again..
			return user.save({include:[{model:Role}]}).then(u => User.findOne({where:{id:u.id},include:[{model:Role}]}))
		}
		return user;
		})
	.then(u => cb(null, u.get({plain:true})))
	.catch(e => cb(e, null));
  }
));

passport.serializeUser(function(user, done){
  done(null, user);
});

passport.deserializeUser(function(user, done){
  done(null, user);
});

passport.use(new LocalStrategy({
	usernameField: "email",
	password: "password"
	},
  function(username, password, done) {
    User.findOne({where:{email:username}, include:[{model:Role}]})
		.then((user) => {
			if(user !== null && bcrypt.compareSync(password, user.password)) {
				return done(null, user.get({plain:true}))
			} else {
				return done(null, false, { message: 'Incorrect password.' });
			}
		});
  }
));


module.exports = passport;