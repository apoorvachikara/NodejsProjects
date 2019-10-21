const fs = require('fs');
const fileName = './notes.json';
const chalk = require('chalk');
const getNotes = function () {
    console.log('Getting Notes');
}

const addNotes = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note)=> {
            return note.title === title;
    });

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
       });
       saveNotes(notes);
       console.log("Notes Added Successfully");
    }
    else {
        console.log("Notes Already exist");
    }

}

const saveNotes = function (notes) {
    fs.writeFileSync(fileName, JSON.stringify(notes));
}

const loadNotes = function ()   {
    try {
        const dataBuffer = fs.readFileSync(fileName);
        const data = dataBuffer.toString();
        return (JSON.parse(data));
    } catch (error) {
        return []
    }
}

const removeNotes = function (title) {
    const notes = loadNotes();
    const updatedNotes = notes.filter((note)=> {
            return note.title !== title;
        }
    );
    if (notes.length === updatedNotes.length) {
        console.log(chalk.bgRed('No note found!'));
    }
    else{
        saveNotes(updatedNotes);
        console.log(chalk.bgGreen('Note Removed!'));
    }

}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes
}