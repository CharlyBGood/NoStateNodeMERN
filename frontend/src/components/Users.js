import axios from "axios";
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:4000/api/users");
    setUsers(res.data);
    console.log();
  };

  useEffect(() => {
    fetchUsers(users);
  }, [users]);

  return (
    <div>
      <div>
        <div className="form-user">
          <p>¡Crea un usuario para poder participar!!</p>
          <form className="users-form">
            <div>
              <input type="text" />
            </div>
          </form>
        </div>
        <div className="users-col">
          <ul className="list-group">
            {users.map((user) => (
              <li className="list-item" key={user._id}>
                {user.username}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Users;
