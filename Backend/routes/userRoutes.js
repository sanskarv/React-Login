const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

// Register
router.post("/register", async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const user = new User({ name, email, password, role });
        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Request received with:", req.body); // Log incoming request body

        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            console.log("Invalid credentials"); // Log the error condition
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // If login succeeds
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error("Server error:", error); // Log unexpected server errors
        res.status(500).json({ message: "Server error. Please try again later." });
    }
});




module.exports = router;