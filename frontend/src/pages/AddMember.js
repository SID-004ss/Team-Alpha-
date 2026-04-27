import React, { useState } from "react";
import axios from "axios";
import "../App.css";

function AddMember() {
  const [form, setForm] = useState({
    name: "",
    rollNumber: "",
    role: "",
    year: "",
    degree: "",
    project: "",
    hobbies: "",
    certificate: "",
    internship: "",
    aim: "",
    email: "",          // ✅ ADDED
    contact: ""         // ✅ ADDED
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.keys(form).forEach(key => {
      data.append(key, form[key]);
    });

    if (image) {
      data.append("image", image);
    }

    try {
      console.log("Sending Data:", form); // 🔥 debug

      await axios.post("http://localhost:5000/api/members", data);

      alert("Member Added Successfully!");

      setForm({
        name: "",
        rollNumber: "",
        role: "",
        year: "",
        degree: "",
        project: "",
        hobbies: "",
        certificate: "",
        internship: "",
        aim: "",
        email: "",          // ✅ reset
        contact: ""         // ✅ reset
      });

      setImage(null);
      document.querySelector("input[type='file']").value = "";

    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Error adding member");
    }
  };

  return (
    <div className="container">
      <div className="card" style={{ width: "350px" }}>
        <h2>Add Member</h2>

        <form onSubmit={handleSubmit}>

          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required /><br /><br />
          <input name="rollNumber" placeholder="Roll Number" value={form.rollNumber} onChange={handleChange} /><br /><br />
          <input name="role" placeholder="Role" value={form.role} onChange={handleChange} required /><br /><br />
          <input name="year" placeholder="Year" value={form.year} onChange={handleChange} /><br /><br />
          <input name="degree" placeholder="Degree" value={form.degree} onChange={handleChange} /><br /><br />

          {/* ✅ NEW FIELDS */}
          <input 
            name="email" 
            type="email"
            placeholder="Email" 
            value={form.email} 
            onChange={handleChange} 
            required 
          /><br /><br />

          <input 
            name="contact" 
            placeholder="Contact Number" 
            value={form.contact} 
            onChange={handleChange} 
            required 
          /><br /><br />

          <textarea name="project" placeholder="About Project" value={form.project} onChange={handleChange} /><br /><br />
          <textarea name="hobbies" placeholder="Hobbies" value={form.hobbies} onChange={handleChange} /><br /><br />
          <textarea name="certificate" placeholder="Certificates" value={form.certificate} onChange={handleChange} /><br /><br />
          <textarea name="internship" placeholder="Internship" value={form.internship} onChange={handleChange} /><br /><br />
          <textarea name="aim" placeholder="Career Aim" value={form.aim} onChange={handleChange} /><br /><br />

          <input type="file" onChange={(e) => setImage(e.target.files[0])} required /><br /><br />

          <button type="submit">Submit</button>

        </form>
      </div>
    </div>
  );
}

export default AddMember;