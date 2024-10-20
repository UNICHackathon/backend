import axios from "axios";

const customer = (async () => {
  try {
    const accountId = 351012345671;
    const response = await axios.get(
      `https://c28e-212-31-102-105.ngrok-free.app/customer/details/${accountId}`
    );

    console.log(response.data); // Log the response data
  } catch (error) {
    console.error("Error fetching customer details:", error.message);
  }
})();
