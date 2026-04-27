import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../App.css";

function MemberDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/members/${id}`)
      .then(res => setMember(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!member) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <div className="card" style={{ width: "400px" }}>

        <h2>{member.name}</h2>
        <p><strong>Roll No:</strong> {member.rollNumber}</p>
        <p><strong>Role:</strong> {member.role}</p>
        <p><strong>Year:</strong> {member.year}</p>
        <p><strong>Degree:</strong> {member.degree}</p>

        <p><strong>Project:</strong> {member.project}</p>
        <p><strong>Hobbies:</strong> {member.hobbies}</p>
        <p><strong>Certificates:</strong> {member.certificate}</p>
        <p><strong>Internship:</strong> {member.internship}</p>
        <p><strong>Aim:</strong> {member.aim}</p>

        <img
          src={`http://localhost:5000/uploads/${member.image}`}
          width="150"
          alt="profile"
        />

        <br /><br />

        <button onClick={() => navigate("/members")}>
          Back
        </button>

      </div>
    </div>
  );
}

export default MemberDetails;