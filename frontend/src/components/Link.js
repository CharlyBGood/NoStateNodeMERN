import React from "react";
import "../stylesheets/Table.css";
import "../stylesheets/Link.css";
import { FaTrash } from "react-icons/fa";

function Link({ id, text, url, deleteLink }) {
  return (
    <tr>
      <td className="todo-txt">
        <a href={url} target="_blank" rel="noreferrer">
          {text}
        </a>
      </td>
      <td className="todo-container-icons">
        <FaTrash onClick={() => deleteLink(id)} className="todo-icon" />
      </td>
    </tr>
  );
}

export default Link;
