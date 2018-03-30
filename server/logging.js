const {createLogger, format, transports} = require('winston');

const CloudWatchTransport = require('winston-aws-cloudwatch');

const config = require('../config');

const alignedWithColorsAndTime = format.combine(
    format.splat(),
    format.colorize(),
    format.timestamp(),
    format.align(),
    format.printf((info) => {
        const {
            timestamp, level, message, ...args
        } = info;

        const ts = timestamp.slice(0, 19).replace('T', ' ');
        return `${ts} [${level}]: ${message}`;
    }),
);

const logger = createLogger({
    level: 'debug',
    format: alignedWithColorsAndTime,
    transports: [new transports.Console()]
});

if (config.AWS_LOGGING_KEY) {
    logger.add(new CloudWatchTransport({
        logGroupName: 'bookings', // REQUIRED
        logStreamName: 'dev', // REQUIRED
        createLogGroup: true,
        createLogStream: true,
        submissionInterval: 2000,
        submissionRetryCount: 1,
        batchSize: 20,
        awsConfig: {
            accessKeyId: config.AWS_LOGGING_KEY,
            secretAccessKey: config.AWS_LOGGING_SECRET,
            region: 'eu-west-2'
        },
        formatLog: function (item) {
            return item.level + ': ' + item.message + ' ' + JSON.stringify(item.meta)
        }
    }))
}

logger.info("Logging configurted");

module.exports = logger;