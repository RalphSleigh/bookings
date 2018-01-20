module.exports = (async () => {
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const bcrypt = require('bcrypt');

const log = require("./logging.js");
const config = await require("../config.js");

    const db = await require('./orm.js');
const Op = db.Sequelize.Op;

passport.use(new FacebookStrategy({
        clientID: config.FacebookAppID,
        clientSecret: config.FacebookAppSecret,
        callbackURL: config.basePath + "/auth/facebook/callback",
        profileFields: ['id', 'emails', 'displayName']
    },
    function (accessToken, refreshToken, profile, cb) {
        if (profile.emails) {
            db.user.scope('withData').findOrCreate({where: {email: profile.emails[0].value}})
                .spread((user, created) => {
                    if (created) {
                        log.info("Created User from Facebook %s %s", profile.displayName, user.email);
                        user.userName = profile.displayName;
                        //calling save will remove the assosiated Role data, lets get it again..
                        return user.save({include: [{model: db.role}]}).then(u => db.user.scope('withData').findOne({where: {id: u.id}}))
                    }
                    return user;
                })
                .then(u => cb(null, u.get({plain: true})))
                .catch(e => cb(e, null));
        } else {
            db.user.scope('withData').findOrCreate({where: {facebookProfileId: profile.id}})
                .spread((user, created) => {
                    if (created) {
                        log.info("Created User from Facebook with profile ID %s %s (no e-mail)", profile.displayName, profile.id);
                        user.userName = profile.displayName;
                        //calling save will remove the assosiated Role data, lets get it again..
                        return user.save({include: [{model: db.role}]}).then(u => db.user.scope('withData').findOne({where: {id: u.id}}))
                    }
                    return user;
                })
                .then(u => cb(null, u.get({plain: true})))
                .catch(e => cb(e, null));
        }
    }));


passport.use(new GoogleStrategy({
        clientID: config.GoogleClientID,
        clientSecret: config.GoogleClientSecret,
        callbackURL: config.GoogleCallback
    },
    function (accessToken, refreshToken, profile, cb) {
        db.user.scope('withData').findOrCreate({where: {email: profile.emails[0].value}})
            .spread((user, created) => {
                if (created) {
                    user.userName = profile.displayName;
                    //calling save will remove the assosiated Role data, lets get it again..
                    return user.save({include: [{model: db.role}]}).then(u => db.user.scope('withData').findOne({where: {id: u.id}}))
                }
                return user;
            })
            .then(u => cb(null, u.get({plain: true})))
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
        db.user.scope('withPassword').findOne({where: {email: username}})
            .then((user) => {
                if (user !== null && bcrypt.compareSync(password, user.password)) {
                    return db.user.scope('withData').findOne({where: {id: {[Op.eq]: user.id}}});
                } else {
                    done(null, false, {message: 'Incorrect password.'});
                    return Promise.reject();
                }
            })
            .then(user => done(null, user.get({plain: true})));
    }
));


return passport;

})();