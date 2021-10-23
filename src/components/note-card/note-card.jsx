import React, { Component } from "react";
import "./style.css";

class NoteCard extends Component {
  render() {
    return (
      <section className="note-card">
        <header className="note-card-header">
          <h3 className="note-card-title">{ this.props.title }</h3>
          <hr/>
        </header>
        <p className="note-card-text">{ this.props.note}</p>
      </section>
    );
  }
}

export default NoteCard;
