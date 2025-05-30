import express from 'express';
import user from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import verifyToken from "../middleware/verifToken.js";
import User from "../models/user.js";
const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new user({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    res.status(201).json({ message: "User registered", user: savedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const User = await user.findOne({ email: req.body.email });
    if (!User) return res.status(401).json({ error: "User not found" });

    const validPassword = await bcrypt.compare(req.body.password, User.password);
    if (!validPassword) return res.status(401).json({ error: "Wrong password" });

    const token = jwt.sign({ id: User._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({ message: "Login successful", token, user: {
      username: User.username,
      email: User.email,
      interests: User.interests
    } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// İlgi alanlarını güncelle
router.put("/interests", verifyToken, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { interests: req.body.interests },
      { new: true }
    );
    res.json({
      message: "İlgi alanları güncellendi",
      interests: updatedUser.interests,
    });
  } catch (err) {
    res.status(500).json({ error: "Güncelleme hatası: " + err.message });
  }
});

export default router;

