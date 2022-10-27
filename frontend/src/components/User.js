import "../stylesheets/Table.css";
import "../stylesheets/Link.css";
import "../stylesheets/User.css"
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function User({ username, deleteBtn, id }) {

  
  return (
    <tr>
    
      <td className="todo-txt username">
        <Link to="../Profile">
        {username}
        </Link>
        
      </td>
      <td className="todo-container-icons">
        <FaTrash className="todo-icon" onClick={() => deleteBtn(id)}/>
        {/* <FaEdit className="todo-icon" /> */}
      </td>
    
    </tr>
  );
}

export default User;
