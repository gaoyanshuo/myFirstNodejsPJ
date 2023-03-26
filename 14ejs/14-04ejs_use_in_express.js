const express = require('express');
const path = require('path')
const app = express();
const moduleName = 'ejs';

// 设置模板引擎
app.set('view engine', 'ejs'); //other: pub twing
// 设置模板文件存放位置
app.set('views', path.resolve(__dirname, './views'));

app.get('/', (req, res) => {
  res.render('home', { moduleName });
});

app.listen(3000, () => {
  console.log('3000 port is ok');
});
