// backend/parents.js
import express from 'express';
import Parent from './Parent.js';

const router = express.Router();

// Register a new parent
router.post('/register', async (req, res) => {
  try {
    const { name, mobile, password } = req.body;

    const existingParent = await Parent.findOne({ mobile });
    if (existingParent) {
      return res.status(400).json({ error: 'Mobile number already registered' });
    }

    const newParent = new Parent({ name, mobile, password });
    await newParent.save();

    res.status(201).json({ message: 'Parent registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login a parent
router.post('/login', async (req, res) => {
  try {
    const { mobile, password } = req.body;

    const parent = await Parent.findOne({ mobile });
    if (!parent || parent.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', parent });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
