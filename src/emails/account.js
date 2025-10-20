const Sib = require('sib-api-v3-sdk');
require('dotenv').config();

const client = Sib.ApiClient.instance;
const apiKey = client.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY;

const tranEmailApi = new Sib.TransactionalEmailsApi();

const sender = {
    email: 'your_verified_sender@example.com', // must match verified sender in Brevo
    name: 'Your App or Name',
};

const receivers = [{ email: 'recipient@example.com' }];

tranEmailApi
    .sendTransacEmail({
        sender,
        to: receivers,
        subject: 'Hello from Brevo!',
        textContent: 'This is a test email using Brevo API.',
        htmlContent: '<strong>This is a test email using Brevo API.</strong>',
    })
    .then(() => console.log('✅ Email sent successfully!'))
    .catch((error) => console.error('❌ Error:', error));



// const sgMail = require('@sendgrid/mail');

// const SENDGRID_API_KEY = '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'

// // Set your API key
// sgMail.setApiKey(SENDGRID_API_KEY);

// // Create your message
// const msg = {
//     to: 'recipient@example.com',        // Change to your recipient
//     from: 'verified-sender@example.com', // Must match your verified sender
//     subject: 'Hello from SendGrid!',
//     text: 'This is a test email using SendGrid API.',
//     html: '<strong>This is a test email using SendGrid API.</strong>',
// };

// // Send the email
// sgMail
//     .send(msg)
//     .then(() => console.log('✅ Email sent successfully!'))
//     .catch((error) => console.error('❌ Error:', error));
