'use strict';

const nodemailer = require('nodemailer');

/* Build transporter lazily so startup isn't blocked when SMTP not configured */
let transporter;

function getTransporter() {
  if (transporter) return transporter;

  if (!process.env.SMTP_HOST) {
    /* Dev/test fallback — logs to console instead of sending */
    transporter = {
      sendMail: async (opts) => {
        console.log('[Mailer] SMTP not configured. Email would have been sent:');
        console.log('  To:', opts.to);
        console.log('  Subject:', opts.subject);
        return { messageId: 'dev-noop' };
      },
    };
    return transporter;
  }

  transporter = nodemailer.createTransport({
    host:   process.env.SMTP_HOST,
    port:   parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  return transporter;
}

const FROM = process.env.MAIL_FROM || '"KinderBubble College" <noreply@kinderbubble.edu>';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@kinderbubble.edu';

async function sendContactNotification({ firstName, lastName, email, phone, program, message }) {
  const transport = getTransporter();

  await transport.sendMail({
    from:    FROM,
    to:      ADMIN_EMAIL,
    subject: `New Contact Form Submission — ${firstName} ${lastName}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <table>
        <tr><td><strong>Name:</strong></td><td>${firstName} ${lastName}</td></tr>
        <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
        <tr><td><strong>Phone:</strong></td><td>${phone || '—'}</td></tr>
        <tr><td><strong>Program:</strong></td><td>${program || '—'}</td></tr>
      </table>
      <h3>Message</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  });

  /* Send auto-reply to sender */
  await transport.sendMail({
    from:    FROM,
    to:      email,
    subject: 'We received your message — KinderBubble College',
    html: `
      <h2>Thank you, ${firstName}!</h2>
      <p>We have received your message and will get back to you within 24 business hours.</p>
      <p>If your enquiry is urgent, please call us at <strong>+1 (555) 234-5678</strong>.</p>
      <br>
      <p>Warm regards,<br><strong>KinderBubble College Admissions Team</strong></p>
    `,
  });
}

async function sendApplicationConfirmation({ firstName, lastName, email, programId }) {
  const transport = getTransporter();

  await transport.sendMail({
    from:    FROM,
    to:      email,
    subject: 'Application Received — KinderBubble College',
    html: `
      <h2>Application Received, ${firstName}!</h2>
      <p>Your application to KinderBubble College has been successfully submitted.</p>
      <p>Our admissions team will review your application and contact you within <strong>5–10 business days</strong>.</p>
      <p>In the meantime, if you have any questions, please email <a href="mailto:admissions@kinderbubble.edu">admissions@kinderbubble.edu</a> or call <strong>+1 (555) 234-5678</strong>.</p>
      <br>
      <p>Warm regards,<br><strong>KinderBubble College Admissions Office</strong></p>
    `,
  });
}

module.exports = { sendContactNotification, sendApplicationConfirmation };
