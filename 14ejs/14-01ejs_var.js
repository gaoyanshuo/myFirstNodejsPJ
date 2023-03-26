const express = require('express');
const app = express();
// 模板引擎
const ejs = require('ejs');
const fs = require('fs');
const fsResult = fs.readFileSync(__dirname + '/14-01ejs_var.html').toString();
console.log('fsResult', fsResult);
let japan = '日本';
let htmlStr = ejs.render(fsResult, {japan});

app.get('/', (req, res) => {
  console.log('htmlStr', htmlStr);
  res.send(htmlStr);
});
// ejs.renderFile

app.listen(3000, () => {
  console.log('3000 port ok');
});
