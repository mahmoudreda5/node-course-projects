// const sum = require('./utils.js');
const notes = require('./notes');
// const validator = require('validator');
// const chalk = require('chalk');
const yargs = require('yargs');

// console.log(sum(7, 5));
// console.log(notes());
// console.log(validator.isEmail('mahmoud.reda@botme.com'));

// console.log(chalk.blue('success !'));

// yargs.version("1.2.7");
// console.log(process.argv);
// console.log(yargs.argv);

// add command
yargs.command({
    command: 'add',
    describe: 'Adding new note!',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder: {
        title: {
            describe: 'note title to remove.',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'Listing notes!',
    handler() {
        notes.listNotes();
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'note title.',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

yargs.parse();
// yargs.argv;
// console.log(yargs.argv);
