const {createLogger, format, transports} = require('winston');

const WinstonCloudWatch = require('winston-cloudwatch');

const config = require('../config');

const alignedWithColorsAndTime = format.combine(
    format.splat(),
    format.colorize(),
    format.timestamp(),
    format.align(),
    format.printf((info) => {
        let {
            timestamp, level, message, ...args
        } = info;

        let keys = Object.keys(args);
        message = keys.reduce((a, k) => a.replace(k, args[k]), message);

        const ts = timestamp.slice(0, 19).replace('T', ' ');
        return `${ts} [${level}]: ${message}`;
    }),
);

const logger = createLogger({
    level: 'debug',
    transports: [new transports.Console({
        format: alignedWithColorsAndTime
    })]
});

if (config.AWS_LOGGING_KEY) {
    logger.add(new WinstonCloudWatch({
        format: format.combine(format.timestamp(), format.printf((info) => {
            let {
                timestamp, level, message, ...args
            } = info;

            let keys = Object.keys(args);
            message = keys.reduce((a, k) => a.replace(k, args[k]), message);

            const ts = timestamp.slice(0, 19).replace('T', ' ');
            info.message = `${ts} [${level}]: ${message}`;
        })),
        level: 'info',
        jsonMessage: true,
        logGroupName: 'bookings', // REQUIRED
        logStreamName: config.AWS_LOGGING_STREAM, // REQUIRED
        awsAccessKeyId: config.AWS_LOGGING_KEY,
        awsSecretKey: config.AWS_LOGGING_SECRET,
        awsRegion: 'eu-west-2'
    }))
}

logger.debug({message: "Logging configured"});

module.exports = logger;