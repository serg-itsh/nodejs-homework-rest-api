const { User } = require("../../models/user");

const { RequestError } = require("../../helpers");

const updateSubscription = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await User.findOneAndUpdate(owner, req.body);
  if (!result) {
    throw RequestError(404);
  }
  res.json(result);
};

module.exports = updateSubscription;
