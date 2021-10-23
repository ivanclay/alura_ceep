import React, { Component } from "react";
import "./style.css";

class RegistrationForm extends Component {
  render() {
    return (
      <form className="registration-form">
        <input className="registration-form-input" type="text" placeholder="Title" />
        <textarea className="registration-form-input" placeholder="Write a note"></textarea>
        <button className="registration-form-input registration-form-submit">Create</button>
      </form>
    );
  }
}

export default RegistrationForm;
