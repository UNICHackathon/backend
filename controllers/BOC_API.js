const axios = require("axios");

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
      const response = await axios.get(
        `https://apis.bankofcyprus.com/df-boc-org-prd/prod/psd2/v2/accounts/${params.accountId}`,
        {
          headers: {
            Authorization: params.authorization,
            journeyId: params.journeyId,
            timeStamp: params.timeStamp,
            correlationId: params.correlationId,
            subscriptionId: params.subscriptionId,
            accept: "application/json",
          },
        }
      );

      console.log("Response Body:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching user account details:", error.message);
      throw error;
    }
  }

  async getUserBankStatement(params, start_date, end_date, max_count = 10) {
    // date format = 1/8/2082
    try {
      if (
        BOC_API.date_validator(start_date) &&
        BOC_API.date_validator(end_date)
      ) {
        const response = await axios.get(
          `https://apis.bankofcyprus.com/df-boc-org-prd/prod/psd2/v2/accounts/${params.accountId}/statement?startDate=${start_date}&endDate=${end_date}&maxCount=${max_count}`,
          {
            headers: {
              Authorization: params.authorization,
              journeyId: params.journeyId,
              timeStamp: params.timeStamp,
              correlationId: params.correlationId,
              subscriptionId: params.subscriptionId,
              accept: "application/json",
            },
          }
        );
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
      const response = await axios.get(
        `https://apis.bankofcyprus.com/df-boc-org-prd/prod/psd2/v2/accounts/${params.accountId}/balance`,
         {
            headers: {
                Authorization: params.authorization,
                journeyId: params.journeyId,
                timeStamp: params.timeStamp,
                correlationId: params.correlationId,
                subscriptionId: params.subscriptionId,
                accept: "application/json",
            },
         }
      );

      console.log("Response Body:", response.data);
      return response.data;
    } catch (error) {
        console.error("Error fetching user account details:", error.message);
        throw error;
    }
  }
}

module.exports = BOC_API;
