import { getCustomersMap } from "./customer_data.js";

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
}

getCustomersMap((err, customersMap) => {
  if (err) {
    console.error("Error:", err);
    return;
  }

  const customersArray = Object.values(customersMap).map(
    (obj) => new Customer(obj.account)
  );

  console.log("Customers Array:", customersArray);
});
