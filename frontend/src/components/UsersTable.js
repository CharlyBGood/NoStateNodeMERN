import axios from "axios";
import { useEffect, useState } from "react";
import UsersForm from "./UsersForm";
import User from "./User";

function UsersTable() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:4000/api/users");
    setUsers(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // const addUser = (user) => {
  //   if (user.username.trim()) {
  //     user.username = user.username.trim();
  //     const usersUpdate = [user, ...users];
  //     setUsers(usersUpdate);
  //     console.log("user added");
  //   } else {
  //     console.log("user cannot be blank");
  //   }
  // };

  const addUser = async () => {
    console.log("adding user");
    fetchUsers();
  };

  const deleteBtn = (id) => {
    alert("sure to delete?")
    const usersUpdateDel = users.filter((user) => user._id !== id);
    setUsers(usersUpdateDel);
    console.log(id)
  }

  return (
    <div className="container">
      <UsersForm onSubmit={addUser} />
      <div className="table-container">
        <table className="links-table">
          <tbody className="table-body">
            {users.map((user) => (
              <User
                className="list-item"
                key={user._id}
                username={user.username}
                deleteBtn={deleteBtn}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersTable;
