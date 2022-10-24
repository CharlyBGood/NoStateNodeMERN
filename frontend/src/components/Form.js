import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../stylesheets/Form.css";

function Form(props) {
  const [input, setInput] = useState("");
  const [url, setUrl] = useState("");
  const form = document.getElementById("form");

  const handleURL = (e) => {
    setUrl(e.target.value);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();
    const newLink = {
      id: uuidv4(),
      text: input,
      url: url,
    };
    props.onSubmit(newLink);
    localStorage.setItem("link", newLink.text);
    form.reset();
  };
  return (
    <div className="main-container">
      <form id="form" onSubmit={handleSend} className="form-container">
        <label>Descriptive Title</label>
        <input
          placeholder="Title"
          type="text"
          className="form-title"
          onChange={handleChange}
          required
        />
        <label>Link URL</label>
        <input
          placeholder="URL"
          type="url"
          className="form-content"
          onChange={handleURL}
          required
        />
        {/* <textarea rows="6" className="form-content" placeholder="Sing your song here..."></textarea> */}
        <button className="form-btn">Add</button>
      </form>
    </div>
  );
}

export default Form;
