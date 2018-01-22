const {createLogger, format, transports} = require('winston');

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

logger.info("Logging configurted");

module.exports = logger;