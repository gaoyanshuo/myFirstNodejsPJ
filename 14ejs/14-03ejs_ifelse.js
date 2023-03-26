const ejs = require('ejs');
const express = require('express');
const fs = require('fs');
const app = express();
const isLogin = true;
const fsStr = fs.readFileSync(__dirname + '/14-03ejs_ifelse.html');
console.log('fsStr', typeof fsStr);
const ejsStr = ejs.render(fsStr.toString(), { isLogin });

app.get('/', (req, res) => {
  res.send(ejsStr);
});

app.listen(3000, () => {
  console.log('3000 port is ok');
});
