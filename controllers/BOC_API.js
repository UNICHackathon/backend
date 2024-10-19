import axios from "axios";
import env from "../env.js";

function getUnixTimestamp() {
  return Math.floor(Date.now() / 1000); // Returns current Unix timestamp in seconds
}

class BOC_API {
  // Dynamic headers function to include the current timestamp
  static headers() {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.TOKEN}`,
      subscriptionId: env.SUB_ID,
      journeyId: "abc",
      timeStamp: getUnixTimestamp(), // Call the timestamp function here
      Cookie:
        "TS013b36ab=0179594e118a6e41bb58665a8a47531fa989a4c3f7e53f708a66768f4724eb0be922d33ed80eccae65b17a4f9923e2da38740a71551ab6b62e8cb081f4ed83641b66c8bc50; de2a657d1673ca26a0e0abed5da67a83=c5a7b127c02a76d77fdf4912ee5581c6",
    };
  }

  static async getUserAccountDetails(accountId) {
    try {
      const config = {
        method: "get",
        url: `https://sandbox-apis.bankofcyprus.com/df-boc-org-sb/sb/psd2/v1/accounts/${accountId}`,
        headers: BOC_API.headers(), // Use dynamic headers
      };

      const response = await axios.request(config);
      console.log("Response Body:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching user account details:", error.message);
      throw error;
    }
  }

  static async getUserBankStatement(accountId, startDate, endDate, maxCount = 10) {
    try {
      const config = {
        method: "get",
        url: `https://sandbox-apis.bankofcyprus.com/df-boc-org-sb/sb/psd2/v1/accounts/${accountId}/statement?startDate=${startDate}&endDate=${endDate}&maxCount=${maxCount}`,
        headers: BOC_API.headers(),
      };
      const response = await axios.request(config);
      console.log("Response Body:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching user bank statement:", error.message);
      throw error;
    }
  }

  static async getAccountBalance(accountId) {
    try {
      const config = {
        method: "get",
        url: `https://sandbox-apis.bankofcyprus.com/df-boc-org-sb/sb/psd2/v1/accounts/${accountId}/balance`,
        headers: BOC_API.headers(),
      };

      const response = await axios.request(config);
      console.log("Response Body:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching account balance:", error.message);
      throw error;
    }
  }
}

export default BOC_API;
