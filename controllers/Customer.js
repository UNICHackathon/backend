// Import the customer data utility
import { getCustomersMap } from "../src/customer_data.js";

class Customer {
  constructor(account) {
    this._bankId = account.bankId;
    this._accountId = account.accountId;
    this._accountAlias = account.accountAlias;
    this._accountType = account.accountType;
    this._accountName = account.accountName;
    this._IBAN = account.IBAN;
    this._currency = account.currency;
    this._infoTimeStamp = account.infoTimeStamp;
  }

  // Getters for each property
  get bankId() {
    return this._bankId;
  }

  get accountId() {
    return this._accountId;
  }

  get accountAlias() {
    return this._accountAlias;
  }

  get accountType() {
    return this._accountType;
  }

  get accountName() {
    return this._accountName;
  }

  get IBAN() {
    return this._IBAN;
  }

  get currency() {
    return this._currency;
  }

  get infoTimeStamp() {
    return this._infoTimeStamp;
  }

  // Validator function to compare the accountId
  validateAccountId(inputAccountId) {
    return this._accountId === inputAccountId;
  }

  // Convert Customer object to JSON format (e.g., for logging)
  toJSON() {
    return {
      bankId: this.bankId,
      accountId: this.accountId,
      accountAlias: this.accountAlias,
      accountType: this.accountType,
      accountName: this.accountName,
      IBAN: this.IBAN,
      currency: this.currency,
      infoTimeStamp: this.infoTimeStamp,
    };
  }

  // Static method to create Customer instances from an array
  static fromAccountsArray(accounts) {
    return accounts.map((account) => new Customer(account));
  }
}

// Utility function to get customers asynchronously
const getCustomers = async () => {
  try {
    const customersMap = await new Promise((resolve, reject) => {
      getCustomersMap((err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });

    // Convert customers map to an array of Customer instances
    const customersArray = Customer.fromAccountsArray(
      Object.values(customersMap).map((obj) => obj.account)
    );

    console.log("Customers:", customersArray.map((c) => c.toJSON()));
    return customersArray;
  } catch (error) {
    console.error("Error fetching customers:", error);
  }
};

// Usage example
getCustomers().then((customers) => {
  if (customers) {
    // Find a specific customer by accountId
    const specificCustomer = customers.find((c) =>
      c.validateAccountId("123456")
    );
    console.log("Specific Customer:", specificCustomer?.toJSON());
  }
});
