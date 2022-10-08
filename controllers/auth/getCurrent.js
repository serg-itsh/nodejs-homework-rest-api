const getCurrent = async (req, res) => {
  const { email, subscription, name } = req.user;

  res.json({
    email,
    subscription,
    name,
  });
};

module.exports = getCurrent;
