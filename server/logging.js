var winston = require('winston');

var logger = new winston.Logger({level:"debug"});


logger.add(winston.transports.Console, {colorize: true, prettyPrint: true});

logger.info("Logging configurted");

module.exports = logger;