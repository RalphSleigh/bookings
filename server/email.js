const google = require('googleapis');
const gmail = google.gmail('v1');
const config = require('../config.js');
const log = require('./logging.js');
const db = require('./orm.js');
const Op = db.Sequelize.Op;
const { backOff } = require('exponential-backoff');

const path = require('path');
const mailcomposer = require("mailcomposer");
const htmlToText = require('html-to-text');

class realEmailSender {

    constructor() {

        this.jwtClient = new google.auth.JWT(
            config.EMAIL_CLIENT_EMAIL,
            null,
            config.EMAIL_PRIVATE_KEY,
            ['https://www.googleapis.com/auth/gmail.send'],
            config.EMAIL_FROM
        );

        this.jwtClient.authorize(function (err) {
            if (err) {
                console.log(err);
            }
        });

    }

    single(to, templateName, values) {
        log.info({
                     message:      "Emailing {to} template {templateName}",
                     to:           to,
                     templateName: templateName,
                 });

        const template = require(path.join(__dirname, 'emails', templateName));
        values.event.customQuestions.emailSubjectTag = values.event.customQuestions.emailSubjectTag || '';


        const subject = template.subject(values);
        const htmlEmail = template.html(values);
        const textEmail = htmlToText.fromString(htmlEmail);

        const mail = mailcomposer({
                                      from:    "Woodcraft Folk Bookings <" + config.emailFrom + ">",
                                      sender:  config.emailFrom,
                                      replyTo: values.event.customQuestions.emailReply ? values.event.customQuestions.emailReply : config.emailFrom,
                                      to:      to,
                                      subject: subject,
                                      text:    textEmail,
                                      html:    htmlEmail
                                  });

        mail.build((err, message) => {

            if (err) {
                console.log(err);
                return;
            }

            backOff(() => gmail.users.messages.send(
                {
                    auth:   this.jwtClient,
                    userId: 'bookings-auto@woodcraft.org.uk',
                    media:  {
                        body:     message,
                        mimeType: "message/rfc822"
                    }
                }), {startingDelay: 2000})
                .catch (e => console.log);
        })
    }

    async toManagers(templateName, values) {
        log.info({
                     message:      "Emailing managers of {event} template {templateName}",
                     event:        values.event.name,
                     templateName: templateName,
                 });

        const owner = await db.user.findOne({where: {id: {[Op.eq]: values.event.userId}}});

        const managers = await db.role.findAll({
                                                   where:   {
                                                       [Op.and]: {
                                                           eventId:        {[Op.eq]: values.event.id},
                                                           name:           {[Op.eq]: 'Manage'},
                                                           organisationId: {[Op.eq]: null},
                                                           villageId:      {[Op.eq]: null}
                                                       }
                                                   },
                                                   include: [{model: db.user}]
                                               });

        values.emailUser = owner;
        this.single(owner.email, templateName, values);
        managers.forEach(m => {
            values.emailUser = m.user;
            this.single(m.user.email, templateName, values);
        });
    }
}

class nullEmailSender {

    constructor() {
    }

    single(to, templateName, values) {
        log.info({
                     message:      "NOT Emailing {to} template {templateName}",
                     to:           to,
                     templateName: templateName,
                 });
    }

    toManagers(templateName, values) {
        log.info({
                     message:      "NOT Emailing managers of {event} template {templateName}",
                     event:        values.event.name,
                     templateName: templateName,
                 });
    }
}


if (config.EMAIL) {
    module.exports = new realEmailSender();
} else {
    module.exports = new nullEmailSender();
}
