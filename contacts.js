const fs = require('fs/promises');
/*
 * Раскомментируй и запиши значение
 * const contactsPath = ;
 */
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

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = { listContacts, getContactById, removeContact, addContact };
