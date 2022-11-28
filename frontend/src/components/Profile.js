import React from "react";
import "../stylesheets/Profile.css";
import Table from "./Table";
import { useState, useEffect } from "react";
import axios from "axios";
// import Welcome from "./Welcome";

const Profile = () => {
  const [users, setUsers] = useState([]);
  // const [userSel, setUserSel] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:4000/api/users");
    setUsers(res.data.map((user) => user.username));
    // console.log(res.data.map((user) => user.username));
  };

  const selectUsr = async (e) => {
    let user = e.target.value
    console.log(user);
    fetchUsers(user);
    console.log(`hello ${user}`) 
    
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="main-profile-container">
      <div className="">
        <div className="profile-container">
          <h2>¡Hola {}, comienza organizando recursos!</h2>
        </div>
        <select name="userSelected" onChange={selectUsr}>
          {users.map((user) => (
            <option value={user} key={user}>
              {user}
            </option>
          ))}
        </select>
      </div>

      <div className="container">
        <Table />
      </div>
    </div>
  );
};

export default Profile;
