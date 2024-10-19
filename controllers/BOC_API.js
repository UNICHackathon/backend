import axios from "axios";
import env from "../env.js";

class BOC_API {
  static headers() {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.TOKEN}`,
      subscriptionId: env.SUB_ID,
      journeyId: "dc309183-8ded-47c8-be05-437742fc8d3f",
      timeStamp: "1729342544",
    };
  }

  static async getUserAccountDetails(accountId) {
    try {
      const config = {
        method: "get",
        url: `https://sandbox-apis.bankofcyprus.com/df-boc-org-sb/sb/psd2/v1/accounts/${accountId}`,
        headers: BOC_API.headers(),
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