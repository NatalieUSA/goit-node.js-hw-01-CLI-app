const fs = require('fs/promises');
const { nanoid } = require('nanoid');

const path = require('path');
const contactsPath = path.join(__dirname, 'db/contacts.json');
console.log(contactsPath);

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  console.log(data);
  return JSON.parse(data);
};

const getContactById = async contactId => {
  const contacts = await listContacts();
  const result = contacts.find(contact => contact.id === contactId);
  return result || null;
};

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };

  const updatedContacts = [newContact, ...contacts];
  await fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
  return newContact;
};

const removeContact = async contactId => {
  const contacts = await listContacts();
  const index = contacts.findIndex(contact => contact.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
};

module.exports = { listContacts, getContactById, removeContact, addContact };
