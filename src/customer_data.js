import fs from 'fs';

fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }
    const jsonData = JSON.parse(data);
    // console.log(jsonData[0].account.accountId);

    const cusomersTable = jsonData.reduce((map, obj) => {
        map[obj.account.accountId] = obj;
        return map;
      }, {});

      console.log(cusomersTable);
  });