import dotenv from 'dotenv'; // Load environment variables
import env from './env.js'; // Import your custom environment variables

dotenv.config(); // Initialize dotenv

const fetchData = async () => {
  try {
    const response = await fetch('https://sandbox-apis.bankofcyprus.com/df-boc-org-sb/sb/psd2/v1/accounts', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${env.TOKEN}`, // Use token from env.js
        'subscriptionId': `${env.SUB_ID}`,
        'journeyId': `abc`, 
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
};

fetchData(); // Call the function