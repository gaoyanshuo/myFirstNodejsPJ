const express = require('express');
const app = express();

// 静态资源中间件设置函数(参数是静态资源文件夹的路径)
app.use(express.static(__dirname + '/public'));

// 静态资源中间件与路由规则同时匹配时，谁先匹配谁响应

// 路由响应动态资源，静态资源中间件响应静态资源

app.get('/', (req, res) => {
  res.send('home');
});

app.get('/home', (req, res) => {
  res.send('front');
});

app.listen(3000, () => {
  console.log('3000 port start');
});