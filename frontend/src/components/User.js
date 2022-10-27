import "../stylesheets/Table.css";
import "../stylesheets/Link.css";
import "../stylesheets/User.css"
// import { FaTrash } from "react-icons/fa";

function User({ username, deleteBtn, id }) {

  
  return (
    <tr>
    
      <td className="todo-txt username" onDoubleClick={() => deleteBtn(id)}>
        {username}
      </td>
      <td className="todo-container-icons">
        {/* <FaTrash className="todo-icon" onDoubleClick={() => deleteBtn(id)}/> */}
        {/* <FaEdit className="todo-icon" /> */}
      </td>
    
    </tr>
  );
}

export default User;
