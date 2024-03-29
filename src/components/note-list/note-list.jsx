import React, { Component } from "react";
import NoteCard from "../note-card";
import "./style.css";

class NoteList extends Component {

  constructor(){
    super();
    this.state = {notes: []};
    this._newNotes = this._newNotes.bind(this);
  }

  componentDidMount(){
    this.props.notes.subscribe(this._newNotes);
  }

  componentWillUnmount(){
    this.props.notes.unsubscribe(this._newNotes);
}

  _newNotes(notes){
      this.setState({...this.state, notes});
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
