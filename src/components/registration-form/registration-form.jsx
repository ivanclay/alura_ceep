import React, { Component } from "react";
import "./style.css";

class RegistrationForm extends Component {

  constructor(props){
    super(props);
    this.title = "";
    this.note = "";
    this.category = "no category";
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

  _hadleChangeCategory(event){
    event.stopPropagation();
    this.category = event.target.value;
  }

  _createNote(event){
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.note, this.category);
  }

  render() {
    return (
      <form 
       className="registration-form"
       onSubmit={this._createNote.bind(this)}
       createNote
      >
        <select 
            className="registration-form-input"
            onChange={this._hadleChangeCategory.bind(this)}
        >
          <option>Sem categoria</option>
          {this.props.categories.map((category, index) => {
            return <option key={index}>{category}</option>
          })}
        </select>
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
