const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'TU_CORREO@gmail.com',
      pass: 'TU_CONTRASEÑA_O_APP_PASSWORD'
    }
  });

  await transporter.sendMail({
    from: '"Rakonti" <TU_CORREO@gmail.com>',
    to,
    subject,
    html
  });
};

module.exports = sendEmail;