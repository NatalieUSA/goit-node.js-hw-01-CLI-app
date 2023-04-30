const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require('./contacts');

// const { Command } = require('commander');
// const program = new Command();
// program
//   .option('-a, --action <type>', 'choose action')
//   .option('-i, --id <type>', 'user id')
//   .option('-n, --name <type>', 'user name')
//   .option('-e, --email <type>', 'user email')
//   .option('-p, --phone <type>', 'user phone');

// program.parse(process.argv);

// const argv = program.opts();

// TODO: рефакторить
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

// invokeAction(argv);
// invokeAction({ action: 'list' });
// invokeAction({ action: 'get', id: 'AeHIrLTr6JkxGE6SN-0Rw' });
// invokeAction({
//   action: 'add',
//   name: 'Monica Belucci',
//   email: 'belucci@gmail.com',
//   phone: '+1 (773) 289-73-09',
// });
const id = 'drsAJ4SHPYqZeG-83QTVW';
invokeAction({
  action: 'remove',
  id,
});
