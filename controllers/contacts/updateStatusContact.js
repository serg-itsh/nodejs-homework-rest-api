const { Contact } = require("../../models/contact");

const { RequestError } = require("../../helpers");

const updateStatusContact = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, owner);
  if (!result) {
    throw RequestError(404);
  }
  res.json(result);
};

module.exports = updateStatusContact;
