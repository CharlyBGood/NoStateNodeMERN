import axios from "axios";
import { useState } from "react";
import "../stylesheets/Form.css";

function UsersForm(props) {
  // const [input, setInput] = useState("");
  const [input, setInput] = useState("");
  const form = document.getElementById("form");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    // const newUser = {
    //   username: input,
    // };
    const newUser = await axios.post("http://localhost:4000/api/users", {username: input})
    props.onSubmit(newUser);
    console.log(newUser);
    form.reset();
  };


  return (
    <div className="main-container">
      <form id="form" className="form-container" onSubmit={handleSend}>
        <label>¡Crea un usuario para poder participar!!</label>
        <input
          placeholder="Username"
          type="text"
          className="form-title"
          onChange={handleChange}
        />
        <button className="form-btn" type="submit">
          Add user
        </button>
      </form>
    </div>
  );
}

export default UsersForm;
