const fs = require('fs');
const chalk = require('chalk');

getNotes = () => {
    return 'my notes...';
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const dupNote = notes.find(note => note.title === title);
    
    if(!dupNote) {
        notes.push({title: title, body: body});
        saveNotes(notes);  
        console.log('note added.');
    } else {
        console.log('note title token.');
    }
};

const loadNotes = () => {
    try {
        dataBuffer = fs.readFileSync('notes.json');
        notesJson = dataBuffer.toString();
        return JSON.parse(notesJson);
    } catch (e) {
        return [];   
    }
};

const saveNotes = notes => fs.writeFileSync('notes.json', JSON.stringify(notes));
const removeNote = title => {
    const notes = loadNotes();
    const restNotes = notes.filter(note => note.title !== title);

    if(restNotes.length < notes.length) {
        saveNotes(restNotes);
        console.log(chalk.green('note removed.'));
    } else {
        console.log(chalk.red('not does not exist.'));
    }

    // let removed = false;
    // notes.forEach(function (note, index) {
    //     if(note.title === title) {
    //         // remove the note
    //         notes.splice(index, 1);
    //         saveNotes(notes);
    //         removed = true;
    //     }
    // });

    // if(removed) {
    //     console.log('note removed.');
    // } else {
    //     console.log('not does not exist.');
    // }
};

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach(note => console.log(note.title));
};

const readNote = title => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);

    if(note) {
        console.log(chalk.blue.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('not does not exist'));
    }
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};