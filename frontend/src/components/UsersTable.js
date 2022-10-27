import axios from "axios";
import { useEffect, useState } from "react";
import UsersForm from "./UsersForm";
import User from "./User";

function UsersTable() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:4000/api/users");
    setUsers(res.data);
    // console.log(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = () => {
    console.log("adding user");
    fetchUsers();
  };

  const deleteBtn = async (id) => {
    alert("sure to delete?");
    await axios.delete("http://localhost:4000/api/users/" + id);

    // const usersUpdateDel =  users.filter((user) => user._id !== id);
    // setUsers(usersUpdateDel);
    // props.onClick(usersUpdateDel)
    console.log(id);
    fetchUsers();
  };

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
                deleteBtn={() => deleteBtn(user._id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersTable;
