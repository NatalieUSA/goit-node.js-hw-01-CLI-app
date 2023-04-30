// const contacts = require('./contacts');
// console.log(contacts);

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
      return console.log(contacts);
      break;

    case 'get':
      const contact = await getContactById(id);
      return console.log(contact);
      break;

    // case 'add':
    //   // ... name email phone
    //   break;

    // case 'remove':
    //   // ... id
    //   break;

    // default:
    //   console.warn('\x1B[31m Unknown action type!');
  }
};

// invokeAction(argv);
// invokeAction({ action: 'list' });
invokeAction({ action: 'get', id: 'AeHIrLTr6JkxGE6SN-0Rw' });
