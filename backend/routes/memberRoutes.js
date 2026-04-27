const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const Member = require("../models/Member");

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });


// ✅ POST - Add new member (FULLY UPDATED)
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const newMember = new Member({
      name: req.body.name,
      rollNumber: req.body.rollNumber,
      role: req.body.role,
      year: req.body.year,
      degree: req.body.degree,
      project: req.body.project,
      hobbies: req.body.hobbies,
      certificate: req.body.certificate,
      internship: req.body.internship,
      aim: req.body.aim,
      email: req.body.email,
      contact: req.body.contact,
      image: req.file ? req.file.filename : ""
    });

    const savedMember = await newMember.save();
    res.status(201).json(savedMember);

  } catch (error) {
    console.error("ERROR:", error);   // 🔥 helps debug
    res.status(500).json({ message: error.message });
  }
});


// GET - All members
router.get("/", async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// GET - Single member
router.get("/:id", async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    res.json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;