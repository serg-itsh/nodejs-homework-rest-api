const { Contact } = require("../../models/contact");
const { RequestError } = require("../../helpers");

const getContactById = async (req, res) => {
  const { _id: owner } = req.params;
  const { id } = req.params;
  const result = await Contact.findById(id, owner);
  if (!result) {
    throw RequestError(404);
  }

  res.json(result);
};

module.exports = getContactById;
