const { program } = require('commander');

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require('./contacts');

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);
const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const contacts = await listContacts();
      return console.table(contacts);
      break;

    case 'get':
      const contact = await getContactById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found in contacts list`);
      }
      return console.table(contact);
      break;

    case 'add':
      const newContact = await addContact(name, email, phone);
      return console.table(newContact);
      break;

    case 'remove':
      const deleteContactById = await removeContact(id);
      return console.table(deleteContactById);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction(argv);
