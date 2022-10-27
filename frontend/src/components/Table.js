import axios from "axios";
import { useState, useEffect } from "react";
import Form from "./Form";
import Link from "./Link";
import "../stylesheets/Table.css";

function Table() {
  const [links, setLinks] = useState([]);

  const fetchLinks = async () => {
    const res = await axios.get("http://localhost:4000/api/links");
    setLinks(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  const addLink = (link) => {
    // const linksUpdate = [link, ...links];
    // setLinks(linksUpdate);
    fetchLinks();
    console.log(link);
  };

  const deleteLink = async (id) => {
    // alert("Are you sure you want to delete from the list?")
    // const linksUpdateDel = links.filter((link) => link.id !== id);
    // setLinks(linksUpdateDel);
    alert("sure to delete?");
    await axios.delete("http://localhost:4000/api/links/" + id);

    // const usersUpdateDel =  users.filter((user) => user._id !== id);
    // setUsers(usersUpdateDel);
    // props.onClick(usersUpdateDel)
    console.log(id);
    fetchLinks();
  };

  return (
    <>
      <Form onSubmit={addLink} />
      <aside className="table-container">
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
                key={link._id}
                // id={link._id}
                text={link.title}
                url={link.link}
                deleteLink={() => deleteLink(link._id)}
              />
            ))}
          </tbody>
        </table>
      </aside>
    </>
  );
}

export default Table;
