import React, { Component } from "react";
import NoteList from "./components/note-list/";
import RegistrationForm from "./components/registration-form/";
import "./App.css";
import "./index.css";

class App extends Component {

  constructor(){
    super();
    this.state = {
      notes: []
    };
  }

  createNote(title, note){
    const newNote = {title,note};
    const newNotes = [...this.state.notes, newNote];
    const newState = { notes: newNotes};
    this.setState(newState);
  }

  removeNote(index){
    let noteArray = this.state.notes;
    noteArray.splice(index,1);
    const newState = { notes: noteArray};
    this.setState(newState);
  }

  render() {
    return (
      <section className="container">
        <RegistrationForm createNote={this.createNote.bind(this)} />
        <NoteList notes={this.state.notes} removeNote={this.removeNote.bind(this)} />
      </section>
    );
  }
}

export default App;
