const { Contact } = require("../../models/contact");

const { RequestError } = require("../../helpers");

const removeContact = async (req, res) => {
  const { _id: owner } = req.params;
  const { id } = req.params;
  const result = await Contact.findOneAndRemove(id, owner);
  if (!result) {
    throw RequestError(404);
  }
  res.json({ message: "contact deleted" });
};

module.exports = removeContact;
