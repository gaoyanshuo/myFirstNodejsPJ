const fs = require('fs');
function addText() {
  fs.appendFile('./test.txt', '\r\naddpend text content', (err) => {
    if (err) return console.log('error');
    console.log('successed');
  });
}

addText();