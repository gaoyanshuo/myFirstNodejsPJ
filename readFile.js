const fs = require('fs');
fs.readFile('./test.txt', (err, date) => {
  if (err) return console.log('err');
  console.log(date.toString());
});
