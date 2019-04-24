import nodemailer from "nodemailer";

const from = '"Student_Portal" <info@dci.com>';

function setup() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
}

export function sendConfirmationEmail(user) {
  const transport = setup();
  const email = {
    from,
    to: user.email,
    subject: "DCi Students Portal | Registration Confirmation",
    text: `Now you can login. Please follow this link .
    ${user.generateConfirmationUrl()}`
  };
  transport.sendMail(email);
}

export function sendResetPasswordEmail(user) {
  const transport = setup();
  const email = {
    from,
    to: user.email,
    subject: "DCi Students Portal | Reset Password",
    text: `Please click follow this link to reset your password.
    ${user.generateResetPasswordUrl()}`
  };
  transport.sendMail(email);
}

export function sendRejectEmail(user) {
  const transport = setup();
  const email = {
    from,
    to: user.email,
    subject: "DCi Students Portal | Registration Request",
    text:
      "We are sorry, but your registration request is not approved. Please contact our administration team for more info."
  };
  transport.sendMail(email);
}

export function sendDeleteUserEmail(user) {
  const transport = setup();
  const email = {
    from,
    to: user.email,
    subject: "DCi Students Portal | Account Status Notification",
    text:
      "It seems that your user has been deleted from our DB. Please contact our administration team for more info. "
  };
  transport.sendMail(email);
}
