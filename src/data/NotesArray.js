export default class NotesArray {
    
    constructor(){
        this.notes = [];
        this._subscribers = [];
    }

    createNote(title, note, category){
        const newNote = new Note(title, note, category);
        this.notes.push(newNote);
        this.notifySubscribers();
    }

    removeNote(index){
        this.notes.splice(index,1);
        this.notifySubscribers();
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