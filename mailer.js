const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_SECURE === 'true',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

const sendMail = async (to, subject, html) => {
  return transporter.sendMail({
    from: `"NovionSign" <${process.env.MAIL_USER}>`,
    to,
    subject,
    html
  });
};

module.exports = { sendMail };