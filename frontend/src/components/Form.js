import React, { useState } from "react";
import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
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

  const handleSend = async (e) => {
    e.preventDefault();
    // const newLink = {
    //   id: uuidv4(),
    //   text: input,
    //   url: url,
    // };
    const newLink = await axios.post("http://localhost:4000/api/links", {
      title: input, link: url
    });
    props.onSubmit(newLink);
    console.log(newLink);
    // localStorage.setItem("link", newLink.text);
    form.reset();
  };
  return (
    <main className="main-container">
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
    </main>
  );
}

export default Form;
