'use strict';

const FROM = process.env.MAIL_FROM || '"Kinder Bubble International School" <onboarding@resend.dev>';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'info@kbubble.edu.gh';
const SCHOOL_PHONE = process.env.SCHOOL_PHONE_DISPLAY || '+233 24 493 8605';
const SCHOOL_EMAIL = process.env.SCHOOL_OFFICE_EMAIL || 'info@kbubble.edu.gh';

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function nl2br(value = '') {
  return escapeHtml(value).replace(/\r?\n/g, '<br>');
}

async function sendEmail({ to, subject, html, replyTo }) {
  if (!process.env.RESEND_API_KEY) {
    console.log('[Mailer] RESEND_API_KEY not configured. Email would have been sent:');
    console.log('  To:', to);
    console.log('  Subject:', subject);
    return { id: 'dev-noop' };
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
      reply_to: replyTo,
    }),
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    const err = new Error(result.message || result.error || 'Resend email failed.');
    err.details = result;
    throw err;
  }

  return result;
}

function contactNotificationHtml({ firstName, lastName, email, phone, program, message, source, pagePath }) {
  return `
    <h2>New website form submission</h2>
    <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(firstName)} ${escapeHtml(lastName)}</td></tr>
      <tr><td><strong>Email</strong></td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
      <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone || '-')}</td></tr>
      <tr><td><strong>Subject</strong></td><td>${escapeHtml(program || '-')}</td></tr>
      <tr><td><strong>Source</strong></td><td>${escapeHtml(source || 'website')}</td></tr>
      <tr><td><strong>Page</strong></td><td>${escapeHtml(pagePath || '-')}</td></tr>
    </table>
    <h3>Message</h3>
    <p>${nl2br(message)}</p>
  `;
}

function contactAutoReplyHtml({ firstName }) {
  return `
    <h2>Thank you, ${escapeHtml(firstName)}.</h2>
    <p>We have received your message and the Kinder Bubble International School team will respond as soon as possible.</p>
    <p>For urgent enquiries, please call <strong>${escapeHtml(SCHOOL_PHONE)}</strong> or email <a href="mailto:${escapeHtml(SCHOOL_EMAIL)}">${escapeHtml(SCHOOL_EMAIL)}</a>.</p>
    <p>Warm regards,<br><strong>Kinder Bubble International School</strong></p>
  `;
}

async function sendContactNotification(payload) {
  const fullName = `${payload.firstName} ${payload.lastName}`.trim();
  await sendEmail({
    to: ADMIN_EMAIL,
    subject: `New website enquiry - ${fullName}`,
    html: contactNotificationHtml(payload),
    replyTo: payload.email,
  });

  await sendEmail({
    to: payload.email,
    subject: 'We received your message - Kinder Bubble International School',
    html: contactAutoReplyHtml(payload),
  });
}

async function sendApplicationConfirmation({ firstName, lastName, email, reference, programName }) {
  const fullName = `${firstName} ${lastName}`.trim();

  await sendEmail({
    to: ADMIN_EMAIL,
    subject: `New admission application - ${fullName}`,
    html: `
      <h2>New admission application</h2>
      <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      <p><strong>Reference:</strong> ${escapeHtml(reference || '-')}</p>
      <p><strong>Programme:</strong> ${escapeHtml(programName || 'Not specified')}</p>
    `,
    replyTo: email,
  });

  await sendEmail({
    to: email,
    subject: 'Application received - Kinder Bubble International School',
    html: `
      <h2>Application received, ${escapeHtml(firstName)}.</h2>
      <p>Your application has been submitted successfully${reference ? ` with reference <strong>${escapeHtml(reference)}</strong>` : ''}.</p>
      <p>Admissions will review it and contact you about the next step.</p>
      <p>Warm regards,<br><strong>Kinder Bubble International School Admissions</strong></p>
    `,
  });
}

async function sendNewsletterNotification({ email }) {
  await sendEmail({
    to: ADMIN_EMAIL,
    subject: 'New newsletter signup',
    html: `<h2>New newsletter signup</h2><p><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>`,
    replyTo: email,
  });
}

module.exports = {
  sendContactNotification,
  sendApplicationConfirmation,
  sendNewsletterNotification,
};
