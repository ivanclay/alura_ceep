import React, { Component } from "react";
import NoteList from "./components/note-list/";
import RegistrationForm from "./components/registration-form/";
import CategoryList from './components/catergory-list';
import "./App.css";
import "./index.css";

import { NotesArray, Categories } from "./data";

class App extends Component {

  constructor(){
    super();
    this.categories = new Categories();
    this.notes = new NotesArray();
  }

  render() {
    return (
      <section className="container">
        <RegistrationForm 
          createNote={this.notes.createNote.bind(this.notes)} 
          categories={this.categories}
        />
        <main className="main-container">
          <CategoryList 
            addCategory={this.categories.addCategory.bind(this.categories)}
            categories={this.categories} 
          />
        <NoteList 
            notes={this.notes} 
            removeNote={this.notes.removeNote.bind(this.notes)} 
        />
        </main>
        
      </section>
    );
  }
}

export default App;
