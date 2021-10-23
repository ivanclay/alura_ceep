import React, { Component } from "react";
import "./style.css";

class RegistrationForm extends Component {

  constructor(props){
    super(props);
    this.title = "";
    this.note = "";
  }

  _handleOnChangeTitle(event){
    event.stopPropagation();
    this.title = event.target.value;
    // console.log(this.title);
  }

  _handleOnChangeNote(event){
    event.stopPropagation();
    this.note = event.target.value;
    // console.log(this.note);
  }

  _createNote(event){
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.note);
  }

  render() {
    return (
      <form 
       className="registration-form"
       onSubmit={this._createNote.bind(this)}
       createNote
      >
        <input 
          className="registration-form-input" 
          type="text" 
          placeholder="Title" 
          onChange={this._handleOnChangeTitle.bind(this)}
        />
        <textarea 
          rows={15} 
          className="registration-form-input" 
          placeholder="Write a note"
          onChange={this._handleOnChangeNote.bind(this)}
        ></textarea>
        <button className="registration-form-input registration-form-submit">Create</button>
      </form>
    );
  }
}

export default RegistrationForm;
