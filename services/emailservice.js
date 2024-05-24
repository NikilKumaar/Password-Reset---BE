const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nikilnike666@gmail.com",
    pass: " ttwm srez psgg tufg",
  },
});

const sendResetPasswordEmail = async (to, resetLink) => {
  const mailOptions = {
    from: "nikilnike666@gmail.com",
    to,
    subject: "Password Reset",
    html: `Click the following link to reset your password: <a href="${resetLink}">${resetLink}</a>`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendResetPasswordEmail };