import React from "react";
import "../stylesheets/Table.css";
import "../stylesheets/Link.css";
import { FaEdit, FaTrash } from "react-icons/fa";

function User({ username }) {
  return (
    <tr>
      <td className="todo-txt">
        {username}
      </td>
      <td className="todo-container-icons">
        <FaTrash className="todo-icon" />
        <FaEdit className="todo-icon" />
      </td>
    </tr>
  );
}

export default User;
