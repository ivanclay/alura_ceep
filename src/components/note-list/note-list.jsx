import React, { Component } from "react";
import NoteCard from "../note-card";
import "./style.css";

class NoteList extends Component {
  render() {
    return (
      <ul className="note-list">
        {Array.of("Work", "Work", "Learn").map((category, index) => {
          return (
              <li className="note-list-item" key={index}>
                  <div>{category}</div>
                <NoteCard />
              </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;
