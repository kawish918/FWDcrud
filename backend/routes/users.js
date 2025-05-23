const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const USERS_FILE = path.join(__dirname, '..', 'users.json');

// Helper function to read users
function readUsers() {
    if (!fs.existsSync(USERS_FILE)) {
        fs.writeFileSync(USERS_FILE, '[]');
    }
    const data = fs.readFileSync(USERS_FILE);
    return JSON.parse(data);
}

// Helper function to write users
function writeUsers(users) {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// GET: List all users
router.get('/', (req, res) => {
    const users = readUsers();
    res.json(users);
});

// POST: Sign up new user
router.post('/signup', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

    const users = readUsers();
    const existingUser = users.find(u => u.email === email);

    if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
    }

    const newUser = { id: Date.now(), email, password }; // You can hash the password later
    users.push(newUser);
    writeUsers(users);

    res.status(201).json({ message: 'User registered successfully', user: newUser });
});

// POST: Sign in
router.post('/signin', (req, res) => {
    const { email, password } = req.body;
    const users = readUsers();

    const user = users.find(u => u.email === email && u.password === password); // Add proper security later

    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    res.json({ message: 'Sign in successful', user });
});

module.exports = router;
