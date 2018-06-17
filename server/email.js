var google = require('googleapis');
var gmail = google.gmail('v1');
var config = require('../config.js');
var log = require('./logging.js');

const Email = require('email-templates');
var path = require('path');
var mailcomposer = require("mailcomposer");
const htmlToText = require('html-to-text');

//var mimebuilder = require('mailbuild');


if (config.EMAIL) {

    var jwtClient = new google.auth.JWT(
        config.EMAIL_CLIENT_EMAIL,
        null,
        config.EMAIL_PRIVATE_KEY,
        ['https://www.googleapis.com/auth/gmail.send'],
        config.EMAIL_FROM
    );

    jwtClient.authorize(function (err) {
        if (err) {
            console.log(err);
        }
    });

    //const message = new mimebuilder("text/plain").setHeader("To", "ralph.sleigh@woodcraft.org.uk").setContent("Hello world!").build();

    module.exports = (to, templateName, values) => {
        log.info({
                     message:      "Emailing {to} template {templateName}",
                     to:           to,
                     templateName: templateName,
                 });

        const template = require(path.join(__dirname, 'emails', templateName));

        const subject = template.subject(values);
        const htmlEmail = template.html(values);
        const textEmail = htmlToText.fromString(htmlEmail);

        const mail = mailcomposer({
                                      from:    "Woodcraft Folk Bookings <" + config.emailFrom + ">",
                                      sender:  config.emailFrom,
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
            gmail.users.messages.send(
                {
                    auth:   jwtClient,
                    userId: 'bookings-auto@woodcraft.org.uk',
                    media:  {
                        body:     message,
                        mimeType: "message/rfc822"
                    }
                });
        })


        /*
        const templateDir = path.join(__dirname, 'templates');
        const email = new Email({
                                    views: {root: templateDir},
                                    juice: true,
                                    juiceResources: {
                                        preserveImportant: true,
                                        webResources:      {
                                            //
                                            // this is the relative directory to your CSS/image assets
                                            // and its default path is `build/`:
                                            //
                                            // e.g. if you have the following in the `<head`> of your template:
                                            // `<link rel="stylesheet" href="style.css" data-inline="data-inline">`
                                            // then this assumes that the file `build/style.css` exists
                                            //
                                            relativeTo: path.join(__dirname, 'templates')
                                            //
                                            // but you might want to change it to something like:
                                            // relativeTo: path.join(__dirname, '..', 'assets')
                                            // (so that you can re-use CSS/images that are used in your web-app)
                                            //
                                        }
                                    }
                                });
        email.renderAll(templateName, values)
        .then(parts => {
            const mail = mailcomposer({
                                          from:    "Woodcraft Folk Bookings <" + config.emailFrom + ">",
                                          sender:  config.emailFrom,
                                          to:      to,
                                          subject: parts.subject,
                                          text:    parts.text,
                                          html:    parts.html
                                      });
            mail.build((err, message) => {
                if (err) {
                    console.log(err);
                    return;
                }
                gmail.users.messages.send(
                    {
                        auth:   jwtClient,
                        userId: 'bookings-auto@woodcraft.org.uk',
                        media:  {
                            body:     message,
                            mimeType: "message/rfc822"
                        }
                    });
            })
        });
    };
    /*
	gmail.users.messages.send(
		{
			auth: jwtClient,
			userId: 'bookings-auto@woodcraft.org.uk',
			media: {
				body: message,
				mimeType: "message/rfc822"
			}
		});
    */
    }
} else {
    module.exports = (to, templateName, values) => {
        /*
        console.log(values);
        log.log("info", "NOT Emailing %s template %s", to, templateName);
        var templateDir = path.join(__dirname, 'templates', templateName);
        var template = new emailTemplate(templateDir);
        template.render(values)
            .then(parts => {
                var mail = mailcomposer({
                    from: "Woodcraft Folk Bookings <" + config.emailFrom + ">",
                    sender: config.emailFrom,
                    to: to,
                    subject: parts.subject,
                    text: parts.text,
                    html: parts.html
                });
                mail.build((err, message) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log(message.toString());
                })
            });*/
    };

}
;