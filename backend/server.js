const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const memberRoutes = require("./routes/memberRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static folder for uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/members", memberRoutes);

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/teamdb")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});