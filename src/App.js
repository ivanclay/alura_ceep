import React, { Component } from "react";
import NoteList from "./components/note-list/";
import RegistrationForm from "./components/registration-form/";
import "./App.css";
import "./index.css";

class App extends Component {
  render() {
    return (
      <section className="container">
        <RegistrationForm />
        <NoteList />
      </section>
    );
  }
}

export default App;
