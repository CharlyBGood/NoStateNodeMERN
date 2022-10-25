import { Link } from "react-router-dom"
import "../stylesheets/Navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      <nav className="navbar-logos">
        <Link to="/">
          <h1>NoStateNode</h1>
        </Link>
        <img
          className="logo-img"
          src={require("../img/horsecoin.png")}
          alt="nostatenode horse logo"
        />
      </nav>
      <button className="log-button" onClick={() => alert("you're logged in!")}>
        Login
      </button>
    </div>
  );
}

export default Navbar;
