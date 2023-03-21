const fs = require('fs');

// async
function writeFile() {
  fs.writeFile('./test.txt', 'test text', (err) => {
    if (err) return console.log('error');
    console.log('successed');
  });
  console.log('last');
}

function syncWriteFile() {
  fs.writeFileSync('./test.txt', 'testtt');
  console.log('last');
}

// writeFile();
// syncWriteFile();
