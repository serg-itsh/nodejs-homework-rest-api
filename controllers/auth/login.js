const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const { RequestError } = require("../../helpers");

const { User } = require("../../models/user");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw RequestError(401, "Email wrong ");
  }

  if (!user.verify) {
    throw RequestError(401, "Email not verify ");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw RequestError(401, "Password wrong");
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  res.json({
    token,
  });
};

module.exports = login;
