const Sib = require('sib-api-v3-sdk');

// Initialize Brevo client
const client = Sib.ApiClient.instance;
const apiKey = client.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY;

// Create transactional email API instance
const tranEmailApi = new Sib.TransactionalEmailsApi();

// Send welcome email (similar to SendGrid)
const sendWelcomeEmail = async (email, name) => {
    try {
        await tranEmailApi.sendTransacEmail({
            sender: {
                email: 'kiprono.tech@gmail.com',  // Must be your verified sender
                name: 'Vincent from Task Manager',
            },
            to: [{ email }], // dynamic recipient
            subject: 'Welcome to Task Manager!',
            textContent: `Hi ${name}, welcome to Task Manager.`,
            htmlContent: `<strong>Hi ${name},</strong><br>Welcome to Task Manager!`,
        });
    } catch (error) {
        console.error('❌ Error sending welcome email:', error);
    }
};

// You can create other reusable email functions too
const sendCancellationEmail = async (email, name) => {
    try {
        await tranEmailApi.sendTransacEmail({
            sender: {
                email: 'kiprono.tech@gmail.com',
                name: 'Vincent from Task Manager',
            },
            to: [{ email }],
            subject: 'Sorry to see you go!',
            textContent: `Goodbye ${name}, your account has been deleted.`,
            htmlContent: `<strong>Goodbye ${name},</strong><br>Your account has been deleted. We're sorry to see you go.`,
        });

        console.log('✅ Cancellation email sent successfully!');
    } catch (error) {
        console.error('❌ Error sending cancellation email:', error);
    }
};

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail,
};



// const sgMail = require('@sendgrid/mail');

// // Set your API key
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// // Create your message
// const sendWelcomeEmail = async (email, name) => {
//     sgMail.send({
//         to: email,        // Change to your recipient
//         from: 'kiprono.tech@gmail.com', // Must match your verified sender
//         subject: `Welcome to Task Manager, ${name}!`,
//         text: `Hello ${name}, welcome to Task Manager. We're glad to have you.`,
//         html: `<strong>Hello ${name}, welcome to Task Manager!</strong>`,
//     })

//     // try {
//     //     await sgMail.send({
//     //         to: email, // recipient (user)
//     //         from: 'kiprono.tech@gmail.com', // verified sender in SendGrid
//     //         subject: `Welcome to Task Manager, ${name}!`,
//     //         text: `Hello ${name}, welcome to Task Manager. We're glad to have you.`,
//     //         html: `<strong>Hello ${name}, welcome to Task Manager!</strong>`,
//     //     });
//     //     console.log(`✅ Welcome email sent to ${email}`);
//     // } catch (error) {
//     //     console.error('❌ Error sending email:', error);
//     //     if (error.response) {
//     //         console.error(error.response.body);
//     //     }
//     // }
// };

// const sendCancellationEmail = async (email, name) => {
//     sgMail.send({
//         to: email,        // Change to your recipient
//         from: 'kiprono.tech@gmail.com', // Must match your verified sender
//         subject: 'Sorry to see you go!',
//         text: `Goodbye ${name}, your account has been deleted.`,
//         html: `<strong>Goodbye ${name},</strong><br>Your account has been deleted. We're sorry to see you go.`,
//     })

//     // try {
//     //     await tranEmailApi.sendTransacEmail({
//     //         sender: {
//     //             email: 'kiprono.tech@gmail.com',
//     //             name: 'Vincent from Task Manager',
//     //         },
//     //         to: [{ email }],
//     //         subject: 'Sorry to see you go!',
//     //         textContent: `Goodbye ${name}, your account has been deleted.`,
//     //         htmlContent: `<strong>Goodbye ${name},</strong><br>Your account has been deleted. We're sorry to see you go.`,
//     //     });

//     //     console.log('✅ Cancellation email sent successfully!');
//     // } catch (error) {
//     //     console.error('❌ Error sending cancellation email:', error);
//     // }
// }

// module.exports = {
//     sendWelcomeEmail,
//     sendCancellationEmail
// }

