import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      
      <h1 className="title">Team Alpha</h1>

      <h2 className="subtitle" style={{ fontSize: "1.5rem", marginTop: "10px" }}>
        Team Management System
      </h2>

      <p className="subtitle">
        Manage your team members efficiently and professionally
      </p>

      <div className="button-group">
        <button onClick={() => navigate("/add")}>
          Add Member
        </button>

        <button onClick={() => navigate("/members")}>
          View Members
        </button>
      </div>
    </div>
  );
}

export default Home;