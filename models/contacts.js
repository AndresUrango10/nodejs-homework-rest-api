const Contact = require("./modelContacts");

const listContacts = async () => Contact.find();

const getContactById = async (contactId) => Contact.findById(contactId);

const removeContact = async (contactId) => Contact.findByIdAndDelete(contactId);

const addContact = async (body) => Contact.create(body);

const updateContact = async (contactId, body) =>
  Contact.findByIdAndUpdate(contactId, body, { new: true });

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
