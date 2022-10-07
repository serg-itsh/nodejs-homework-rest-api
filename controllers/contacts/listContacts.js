const { Contact } = require("../../models/contact");

const listContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;

  if (req.query.favorite) {
    const { favorite } = req.query;
    const resultFilter = await Contact.find(
      { owner, favorite },
      "-createdAt -updatedAt",
      {
        skip,
        limit,
      }
    ).populate("owner", "email subscription name");
    res.json(resultFilter);
  } else {
    const result = await Contact.find({ owner }, "-createdAt -updatedAt", {
      skip,
      limit,
    }).populate("owner", "email subscription name");
    res.json(result);
  }
};

module.exports = listContacts;
