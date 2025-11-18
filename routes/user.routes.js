const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

// CREATE USER
router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ message: "User created successfully", user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// GET ALL USERS
router.get('/', async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

// GET USER BY ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        res.json(user);
    } catch (error) {
        res.status(400).json({ error: "Invalid ID" });
    }
});

// UPDATE USER
router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!user) return res.status(404).json({ message: "User not found" });

        res.json({ message: "User updated successfully", user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE USER
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) return res.status(404).json({ message: "User not found" });

        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: "Invalid ID" });
    }
});

module.exports = router;
