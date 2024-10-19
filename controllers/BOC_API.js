import axios from "axios";
import env from "../env.js";

class BOC_API {
  static date_validator(date) {
    try {
      const reg_exp_date = /^\d{2}\/\d{2}\/\d{4}$/;

      if (!reg_exp_date.test(date)) {
        throw new Error("Invalid date format. Expected format: DD/MM/YYYY");
      }

      console.log("Valid date format:", date);
      return true;
    } catch (error) {
      console.error("Validation error:", error.message);
      return false;
    }
  }

  async getUserAccountDetails(params) {
    try {
      const config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `https://sandbox-apis.bankofcyprus.com/df-boc-org-sb/sb/psd2/v1/accounts/${params.accountId}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.TOKEN}`,
          subscriptionId: `${env.SUB_ID}`,
          journeyId: "dc309183-8ded-47c8-be05-437742fc8d3f",
          timeStamp: "1729342544",
          Cookie:
            "TS013b36ab=0179594e116a346f608698f6482f03ed7409f9196d521ce941a83adbdf8f5e81767d682d2cd22ed2226d05a48aaa899e4e0e346e8b63062febf546ada5b4665487ab367bf8; de2a657d1673ca26a0e0abed5da67a83=c5a7b127c02a76d77fdf4912ee5581c6",
        },
      };

      const response = await axios.request(config);
      console.log("Response Body:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching user account details:", error.message);
      throw error;
    }
  }

  async getUserBankStatement(params, start_date, end_date, max_count = 10) {
    try {
      if (
        BOC_API.date_validator(start_date) &&
        BOC_API.date_validator(end_date)
      ) {
        const config = {
          method: "get",
          url: `https://apis.bankofcyprus.com/df-boc-org-prd/prod/psd2/v2/accounts/${params.accountId}/statement`,
          params: { startDate: start_date, endDate: end_date, maxCount: max_count },
          headers: {
            Authorization: params.authorization,
            journeyId: params.journeyId,
            timeStamp: params.timeStamp,
            subscriptionId: params.subscriptionId,
            accept: "application/json",
          },
        };

        const response = await axios.request(config);
        console.log("Response Body:", response.data);
        return response.data;
      }
    } catch (error) {
      console.error("Error fetching user account statement:", error.message);
      throw error;
    }
  }

  async getAccountBalance(params) {
    try {
      const config = {
        method: "get",
        url: `https://apis.bankofcyprus.com/df-boc-org-prd/prod/psd2/v2/accounts/${params.accountId}/balance`,
        headers: {
          Authorization: params.authorization,
          journeyId: params.journeyId,
          timeStamp: params.timeStamp,
          subscriptionId: params.subscriptionId,
          accept: "application/json",
        },
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