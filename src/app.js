import express from 'express';
import cors from 'cors';
import bocRoutes from './routes/bocRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/boc', bocRoutes);

export default app;