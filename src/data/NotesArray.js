export default class NotesArray {
    
    constructor(){
        this.notes = [];
        this._subscribers = [];
    }

    addNote(title, note, category){
        const newNote = new Note(title, note, category);
        this.notes.push(newNote);
    }

    removeNote(index){
        this.notes.splice(index,1);
    }

    notifySubscribers(){
        this._subscribers.forEach(f => {
            f(this.notes);
        });
    }

    subscribe(f){
        this._subscribers.push(f);
    }

    unsubscribe(){
        
    }
}

class Note {
    constructor(title, note, category){
        this.title = title;
        this.note = note;
        this.category = category;
    }
}