const {createLogger, format, transports} = require('winston');

const alignedWithColorsAndTime = format.combine(
    format.colorize(),
    format.timestamp(),
    format.align(),
    format.printf((info) => {
        const {
            timestamp, level, message, ...args
        } = info;

        const ts = timestamp.slice(0, 19).replace('T', ' ');
        return `${ts} [${level}]: ${message} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;
    }),
);

const logger = createLogger({
    format: alignedWithColorsAndTime,
    transports: [new transports.Console()]
});

logger.info("Logging configurted");

module.exports = logger;