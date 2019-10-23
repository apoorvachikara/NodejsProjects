const fs = require('fs');
const fileName = './notes.json';
const chalk = require('chalk');


const listNotes = () => {
    const allNotes = loadNotes();
    console.log(chalk.blue("All notes are dsiplayed below: "))
    allNotes.forEach(element => {
            console.log(chalk.cyan.inverse(element.title));
    });
   
}

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);
    console.log(__dirname);
    console.log(__filename);
    debugger;
    if (!duplicateNote) {
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

const saveNotes = (notes) => {
    fs.writeFileSync(fileName, JSON.stringify(notes));
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync(fileName);
        const data = dataBuffer.toString();
        return (JSON.parse(data));
    } catch (error) {
        return []
    }
}

const removeNotes = (title) => {
    const notes = loadNotes();
    const updatedNotes = notes.filter((note)=> note.title !== title);
    if (notes.length === updatedNotes.length) {
        console.log(chalk.bgRed('No note found!'));
    }
    else{
        saveNotes(updatedNotes);
        console.log(chalk.bgGreen('Note Removed!'));
    }
}

const readNotes = (title) => {
    const allNotes = loadNotes();
    const noteToDisplay = allNotes.find(note => note.title === title);
    if(noteToDisplay) {
        console.log(chalk.bgGreen(noteToDisplay.title));
        console.log(chalk.bgGreen(noteToDisplay.body));
    }
    else {
        console.log(chalk.bgRed("No Note Found!"));
    }
}
 
module.exports = {
    listNotes: listNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    readNotes: readNotes
}