const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
    //can use any object with subject and recipient and not specific to surveys
    constructor({subject, recipients}, content) {
        super();

        this.from_email = new helper.Email('pppchevy@gmail.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(recipients);
    }
}

module.exports = Mailer;