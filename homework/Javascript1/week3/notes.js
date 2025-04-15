const notes = [];
function saveNotes(content, id) {
    const note = { content: content, id: id }
    notes.push(note);
    return note;
}
saveNotes("Do laundry", 1);
saveNotes("Do dishes", 2);
saveNotes("Prepare food", 4);
saveNotes("Buy groceries", 3);
saveNotes("Clean the house", 5);
saveNotes("Learn JS", 6);
console.log(notes);
function getNote(id) {
    for (let note of notes) {
        if (note.id === id) {
            console.log("Note with id:" + id + ",found");
            return note;
        }
    }
    console.error("Note with id:" + id + ",not found");
}
getNote(3);
getNote(7);
getNote(2);
function logOutNotesFormatted() {
    for (let note of notes) {
        console.log("The note with id:" + note.id + ",has the following note text:" + note.content);
    }

}
logOutNotesFormatted();
