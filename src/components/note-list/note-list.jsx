import React, { Component } from "react";
import NoteCard from "../note-card";
import "./style.css";

class NoteList extends Component {

  constructor(){
    super();
    this.state = {notes: []};
  }

  componentDidMount(){
    this.props.notes.subscribe(this._newNotes.bind(this));
  }

  _newNotes(newNotes){
      this.setState({...this.state, newNotes});
      console.log(this.state.notes);
  }

  render() {
    return (
      <ul className="note-list">
        {this.state.notes.map((note, index) => {
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
