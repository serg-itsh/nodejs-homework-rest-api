const { Contact } = require("../../models/contact");
const { RequestError } = require("../../helpers");

const listContacts = async (req, res) => {
  const result = await Contact.find();
  if (!result) {
    throw RequestError(404);
  }

  res.json(result);
};

module.exports = listContacts;
