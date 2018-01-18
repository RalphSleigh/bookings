module.exports = (async () => {
var extend = require('util')._extend;
var log = require('./logging.js');

    var db = await require('./orm.js')
const Op = db.Sequelize.Op;

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
        const resUser = extend({}, req.user);
        delete resUser.password;
        res.json(resUser);
};

    auth.doLogout = function(req, res) {
        req.logout();
        db.user.scope('withData').findOne({where: {userName: 'Guest'}})
            .then((user) => {
                req.logIn(user, (err => {
                    res.send(user).end();
                }))
            });
};

    auth.getUserList = async function (req, res) {
        const users = await db.user.findAll({where: {id: {[Op.not]: 1}}});
        res.json({users: users});
};

    return auth;

})();