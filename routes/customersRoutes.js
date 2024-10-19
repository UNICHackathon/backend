// Import required modules
import { Router } from 'express';
import { Customer } from '../controllers/Customer.js';
import { getCustomersMap } from '../src/customer_data.js';

const router = Router();
let customersArray = [];

// Load customers into memory on server start
const loadCustomers = async () => {
  try {
    const customersMap = await new Promise((resolve, reject) => {
      getCustomersMap((err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });

    customersArray = Object.values(customersMap).map(
      (obj) => new Customer(obj.account)
    );
    console.log('Customers loaded:', customersArray.length);
  } catch (error) {
    console.error('Error loading customers:', error);
  }
};

// Call loadCustomers when the server starts
loadCustomers();

// Middleware to find a customer by accountId
const findCustomerByAccountId = (req, res, next) => {
  const { accountId } = req.params;
  const customer = customersArray.find((c) => c.validateAccountId(accountId));

  if (!customer) {
    return res.status(404).json({ error: 'Customer not found' });
  }

  req.customer = customer; // Attach customer to the request object
  next();
};

// POST route to validate accountId
router.post('/validate', (req, res) => {
  const { accountId } = req.body;

  const isValid = customersArray.some((c) => c.validateAccountId(accountId));

  if (isValid) {
    res.json({ message: 'Account ID is valid.' });
  } else {
    res.status(400).json({ error: 'Invalid account ID.' });
  }
});


router.get('/customer/:accountId', findCustomerByAccountId, (req, res) => {
  res.json(req.customer.toJSON());
});


router.get('/customer/:accountId/iban', findCustomerByAccountId, (req, res) => {
  res.json({ IBAN: req.customer.IBAN });
});


router.get('/customer/:accountId/balance', findCustomerByAccountId, (req, res) => {
  res.json({ balance: 9999.99, currency: req.customer.currency }); // Mock data
});


router.get('/customers', (req, res) => {
  res.json(customersArray.map((c) => c.toJSON()));
});

export default router;
