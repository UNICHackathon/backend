import { Router } from 'express';
import {Customer, getCustomersArray} from '../controllers/Customer.js';
import { getCustomersMap } from '../src/customer_data.js';

const router = Router();
const customers = getCustomersMap(getCustomersArray);


