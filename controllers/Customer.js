// Customer.js
import { getCustomersMap as fetchCustomersMap } from "../src/test_customer_data.js";

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

  // Getters
  get bankId() {
    return this._bankId;
  }

  get accountId() {
    return this._accountId;
  }

  get accountAlias() {
    return this._accountAlias;
  }

  get IBAN() {
    return this._IBAN;
  }

  get currency() {
    return this._currency;
  }

  validateAccountId(inputAccountId) {
    return this._accountId === inputAccountId;
  }

  toJSON() {
    return {
      bankId: this.bankId,
      accountId: this.accountId,
      accountAlias: this.accountAlias,
      IBAN: this.IBAN,
      currency: this.currency,
    };
  }

  // Static method to create Customer instances from an array
  static fromAccountsArray(accounts) {
    return accounts.map((account) => new Customer(account));
  }
}

// Export the Customer class and fetchCustomersMap function
export { Customer, fetchCustomersMap };