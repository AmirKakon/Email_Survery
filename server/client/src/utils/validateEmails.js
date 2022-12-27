const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) => {
    emails = emails.replace(/,\s*$/, ''); //used to deal with trailing comma
    const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => re.test(email) === false);

    if(invalidEmails.length) { //if length > 0
        return `These emails are invalid: ${invalidEmails}`;
    }
};