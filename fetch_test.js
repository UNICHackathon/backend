import dotenv from 'dotenv'; // Load environment variables
import env from './env.js'; // Import your custom environment variables
import BOC_API from './controllers/BOC_API.js';
import { response } from 'express';

dotenv.config(); // Initialize dotenv
 // Create an instance of the BOC_API class
BOC_API.getUserAccountDetails("351012345671");
BOC_API.getAccountBalance("351012345671");
BOC_API.getUserBankStatement("351012345671", "22/08/2018", "22/08/2024", 10);
