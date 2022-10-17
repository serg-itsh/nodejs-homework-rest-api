const { BASE_URL } = process.env;

const createVerifyEmail = (to, verificationToken) => {
  const mail = {
    to,
    subject: "Підтвердження реєстрації на сайті",
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/"/api/auth/verify/${verificationToken}">Натисніть для підтвердження реєстрації</a>`,
  };

  return mail;
};

module.exports = createVerifyEmail;
