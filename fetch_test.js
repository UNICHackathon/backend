import dotenv from 'dotenv'; // Load environment variables
import env from './env.js'; // Import your custom environment variables
import BOC_API from './controllers/BOC_API.js';

dotenv.config(); // Initialize dotenv

const api = new BOC_API();

api.getUserAccountDetails(351012345671);