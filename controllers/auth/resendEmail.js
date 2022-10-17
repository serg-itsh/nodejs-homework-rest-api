const { User } = require("../../models/user");

const { RequestError, sendEmail, createVerifyEmail } = require("../../helpers");

const resendEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.verify) {
    throw RequestError(404, "Not found");
  }

  const mail = createVerifyEmail(email, user.verificationToken);

  await sendEmail(mail);

  res.json({
    messsage: "Email verify resend success",
  });
};

module.exports = resendEmail;
