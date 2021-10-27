import React, { Component } from "react";
import NoteCard from "../note-card";
import "./style.css";

class NoteList extends Component {

  render() {
    return (
      <ul className="note-list">
        {this.props.notes.map((note, index) => {
          return (
              <li className="note-list-item" key={index}>
                <NoteCard 
                  noteIndex={index}
                  removeNote={this.props.removeNote}
                  title={note.title} 
                  note={note.note} 
                  category={note.category}
                />
              </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;
