import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">TeamSys</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add">Add Member</Link>
        <Link to="/members">View Members</Link>
      </div>
    </nav>
  );
}

export default Navbar;