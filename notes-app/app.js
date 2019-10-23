const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./note.js');

yargs.version('1.0.0');


yargs.command({
    command: 'add',
    describe: 'Add a new Note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Details about the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
            notes.addNotes(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Delete note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.removeNotes(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler () {
       notes.listNotes();
    }
});

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Title of the notes',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.readNotes(argv.title);
    }
})

// console.log(yargs.argv);

// console.log(process.argv);

yargs.parse();
