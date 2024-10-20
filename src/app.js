import express from 'express';
import cors from 'cors';
// import bocRoutes from './routes/bocRoutes.js'; // Make sure the path is correct
import customerRoutes from './routes/customersRoutes.js'; // Ensure the path is correct

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Use the routes
// app.use('/api/boc', bocRoutes); // Uncomment and ensure the route is properly defined
app.use('/customer', customerRoutes); // Make sure the route is correct

export default app;
