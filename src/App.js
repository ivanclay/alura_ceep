import React, { Component } from "react";
import NoteList from "./components/note-list/";
import RegistrationForm from "./components/registration-form/";
import CategoryList from './components/catergory-list';
import "./App.css";
import "./index.css";

class App extends Component {

  constructor(){
    super();
    this.state = {
      notes: [],
      categories: ["work", "vacation"],
      category: ''
    };
  }

  createNote(title, note, category){
    const newNote = {title,note, category};
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

  addCategory(categoryName){
    const newCategories = [...this.state.categories, categoryName];
    const newState = {...this.state, categories: newCategories};
    this.setState(newState);
  }

  render() {
    return (
      <section className="container">
        <RegistrationForm 
          createNote={this.createNote.bind(this)} 
          categories={this.state.categories}
        />
        <main className="main-container">
          <CategoryList 
            addCategory={this.addCategory.bind(this)}
            categories={this.state.categories} 
          />
        <NoteList 
            notes={this.state.notes} 
            removeNote={this.removeNote.bind(this)} 
            category={this.state.category}
        />
        </main>
        
      </section>
    );
  }
}

export default App;
