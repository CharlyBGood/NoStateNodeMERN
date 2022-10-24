import React from "react";
import "../stylesheets/Profile.css";
import Table from "./Table";
// import Welcome from "./Welcome";

const Profile = () => {
  return (
    <>
      <div className="profile-container">
        <h2>¡Hola, comienza organizando recursos!</h2>
      </div>
      <div className="container">
        <Table />
      </div>
    </>
  );
};

export default Profile;
