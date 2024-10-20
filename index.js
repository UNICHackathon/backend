import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
//import bocRoutes from './routes/bocRoutes.js';
import customerRoutes from './routes/customersRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON requests

app.use(cors());

// Define a route for the root path
app.get("/", (req, res) => {
  res.send({ message: "Welcome to the API!" }); // A simple welcome message
});

// Routes
// app.use('/api', bocRoutes);
app.use('/customer',customerRoutes)

// Start the server and Ngrok tunnel
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
