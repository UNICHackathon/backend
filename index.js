import express from 'express';
import dotenv from 'dotenv';
import bocRoutes from './routes/bocRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON requests

// Define a route for the root path
app.get("/", (req, res) => {
    res.send("Welcome to the API!"); // A simple welcome message
});

// Routes
app.use('/api', bocRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});