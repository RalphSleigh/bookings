var google = require('googleapis');
var gmail = google.gmail('v1');
var config = require('../config.js');
var log = require('./logging.js');

var emailTemplate = require('email-templates').EmailTemplate;
var path = require('path');
var mailcomposer = require("mailcomposer");

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
			return;
		}
	});

	//const message = new mimebuilder("text/plain").setHeader("To", "ralph.sleigh@woodcraft.org.uk").setContent("Hello world!").build();

	module.exports = (to, templateName, values) => {
		log.log("info", "Emailing %s template %s", to, templateName);
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
					gmail.users.messages.send(
						{
							auth: jwtClient,
							userId: 'bookings-auto@woodcraft.org.uk',
							media: {
								body: message,
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