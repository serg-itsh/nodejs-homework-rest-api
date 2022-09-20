const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

const updateContacts = async (phones) => {
  await fs.writeFile(contactsPath, JSON.stringify(phones, null, 2));
};

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  console.log(contactId);
  const phones = await listContacts();
  const result = phones.find((item) => item.id === contactId);
  return result || null;
};

const removeContact = async (contactId) => {
  const phones = await listContacts();
  const index = phones.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = phones.splice(index, 1);
  await updateContacts(phones);
  return result;
};

const addContact = async ({ name, email, phone }) => {
  const phones = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  phones.push(newContact);
  await updateContacts(phones);
  return newContact;
};

const updateContact = async (contactId, { name, email, phone }) => {
  const phones = await listContacts();
  const index = phones.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }
  phones[index] = {
    contactId,
    name,
    email,
    phone,
  };
  await updateContacts(phones);
  return phones[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
