import React from "react";
import { useState } from "react";
import Form from "./Form";
import Link from "./Link";
import "../stylesheets/Table.css";

function Table() {
  const [links, setLinks] = useState([]);

  const addLink = (link) => {
    const linksUpdate = [link, ...links];
    setLinks(linksUpdate);
  };

  const deleteLink = (id) => {
    alert("Are you sure you want to delete from the list?")
    const linksUpdateDel = links.filter((link) => link.id !== id);
    setLinks(linksUpdateDel);
  };

  return (
    <>
      <Form onSubmit={addLink} />
      <div className="table-container">
        <table className="links-table">
          <thead className="table-header">
            <tr>
              <th>LINK</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {links.map((link) => (
              <Link
                key={link.id}
                id={link.id}
                text={link.text}
                url={link.url}
                deleteLink={deleteLink}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
