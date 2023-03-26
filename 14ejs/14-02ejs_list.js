const ejs = require('ejs');
const express = require('express');
const fs = require('fs');
const app = express();
const singers = ['back number', 'girs\'s generation', 'aw'];
const fsStr = fs.readFileSync(__dirname + '/14-02ejs_list.html');
console.log('fsStr', typeof fsStr);
const ejsStr = ejs.render(fsStr.toString(), { singers });

app.get('/', (req, res) => {
  res.send(ejsStr);
});

app.listen(3000, () => {
  console.log('3000 port is ok');
});
