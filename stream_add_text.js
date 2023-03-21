const fs = require('fs');
const ws = fs.createWriteStream('./test.txt');
ws.write('\r\naaa');
ws.write('\r\nbbb');
ws.write('\r\nccc');

ws.close()