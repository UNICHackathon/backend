import fs from "fs";

export const getCustomersMap = (callback) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return callback(err, null);
    }
    const jsonData = JSON.parse(data);

    const customersMap = jsonData.reduce((map, obj) => {
      if (obj.account && obj.account.accountId) {
        map[obj.account.accountId] = obj;
      }
      return map;
    }, {});

    callback(null, customersMap); // Return the customers map
  });
};