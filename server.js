const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to Local MongoDB
mongoose.connect("mongodb://localhost:27017/userCRUD")
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((err) => console.log("MongoDB Error:", err));

// Import routes
const userRoutes = require('./routes/user.routes');
app.use('/api/users', userRoutes);

// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
