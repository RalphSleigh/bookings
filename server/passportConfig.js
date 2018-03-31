const config = require('../config');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const YahooStrategy = require('passport-yahoo-oauth2').OAuth2Strategy;
const MicrosoftStrategy = require('passport-microsoft').Strategy;
const bcrypt = require('bcrypt');

const log = require("./logging.js");

const db = require('./orm.js');
const Op = db.Sequelize.Op;

passport.use(new FacebookStrategy({
        clientID: config.FACEBOOK_APP_ID,
        clientSecret: config.FACEBOOK_APP_SECRET,
        callbackURL: config.BASE_PATH + "/auth/facebook/callback",
        profileFields: ['id', 'emails', 'displayName']
    },
    function (accessToken, refreshToken, profile, cb) {
        if (profile.emails) {
            db.user.scope('withData').findOrCreate({where: {email: profile.emails[0].value}})
                .spread((user, created) => {
                    if (created) {
                        log.info("Created User from Facebook %s %s", profile.displayName, user.email);
                        user.userName = profile.displayName;
                        user.source = "Facebook";
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
                        user.source = "Facebook";
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
        clientID: config.GOOGLE_CLIENT_ID,
        clientSecret: config.GOOGLE_CLIENT_SECRET,
        callbackURL: config.GOOGLE_CALLBACK
    },
    function (accessToken, refreshToken, profile, cb) {
        db.user.scope('withData').findOrCreate({where: {email: profile.emails[0].value}})
            .spread((user, created) => {
                if (created) {
                    user.userName = profile.displayName;
                    user.source = "Google";
                    //calling save will remove the assosiated Role data, lets get it again..
                    log.info("Created User from Google %s %s", profile.displayName, profile.emails[0].value);
                    return user.save({include: [{model: db.role}]}).then(u => db.user.scope('withData').findOne({where: {id: u.id}}))
                }
                return user;
            })
            .then(u => cb(null, u.get({plain: true})))
            .catch(e => cb(e, null));
    }
));

passport.use(new YahooStrategy({
        clientID: config.YAHOO_CLIENT_ID,
        clientSecret: config.YAHOO_CLIENT_SECRET,
        callbackURL: config.BASE_PATH + "/auth/yahoo/callback",

    },
    function (accessToken, refreshToken, token, profile, cb) {
        db.user.scope('withData').findOrCreate({where: {email: profile.emails[0].value}})
            .spread((user, created) => {
                if (created) {
                    user.userName = profile.displayName;
                    user.source = "Yahoo";
                    //calling save will remove the assosiated Role data, lets get it again..
                    log.info("Created User from Yahoo %s %s", profile.displayName, profile.emails[0].value);
                    return user.save({include: [{model: db.role}]}).then(u => db.user.scope('withData').findOne({where: {id: u.id}}))
                }
                return user;
            })
            .then(u => cb(null, u.get({plain: true})))
            .catch(e => cb(e, null));
    }
));

passport.use(new MicrosoftStrategy({
        clientID: config.MICROSOFT_CLIENT_ID,
        clientSecret: config.MICROSOFT_CLIENT_SECRET,
        callbackURL: config.BASE_PATH + "/auth/microsoft/callback"
    },
    function (accessToken, refreshToken, profile, cb) {
        db.user.scope('withData').findOrCreate({where: {email: profile.emails[0].value}})
            .spread((user, created) => {
                if (created) {
                    user.userName = profile.displayName;
                    user.source = "Microsoft";
                    //calling save will remove the assosiated Role data, lets get it again..
                    log.info("Created User from Microsoft %s %s", profile.displayName, profile.emails[0].value);
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


module.exports = passport;

