import React, { Component } from "react";
import "./style.css";
import {ReactComponent as DeleteSVG} from '../../assets/delete.svg';

class NoteCard extends Component {
  remove(){
    const index = this.props.noteIndex;
    this.props.removeNote(index);
  }

  render() {
    return (
      <section className="note-card">
        <header className="note-card-header">
          <div className="note-card-header-div">
            <h3 className="note-card-title">{ this.props.title }</h3>
            <DeleteSVG 
              onClick={this.remove.bind(this)} 
              className="note-card-trash"
            />
          </div>
          <h6>{this.props.category}</h6>
          <hr/>
        </header>
        <p className="note-card-text">{ this.props.note}</p>
      </section>
    );
  }
}

export default NoteCard;
