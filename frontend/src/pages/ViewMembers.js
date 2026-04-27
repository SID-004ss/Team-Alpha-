import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

function ViewMembers() {
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/members")
      .then(res => setMembers(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">
      <h2 className="title">Team Alpha Members</h2>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {members.map(member => (
          <div className="card" key={member._id}>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.degree}</p>

            <img
              src={`http://localhost:5000/uploads/${member.image}`}
              width="120"
              alt="profile"
            />

            <br /><br />

            <button onClick={() => navigate(`/members/${member._id}`)}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewMembers;