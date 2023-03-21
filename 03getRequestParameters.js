const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('3000 port opening');
});

app.get('/home', (req, res) => {
  res.end('express hello');
});

app.post('/post', (req, res) => {
  res.end('post page');
});

app.get('/request', (req, res) => {
  // 原生
  console.log('method: ', req.method);
  console.log('url: ', req.url);
  console.log('headers: ', req.headers);
  console.log('httpVersion: ', req.httpVersion);

  // express
  console.log('path', req.path);
  console.log('query', req.query);
  console.log('ip', req.ip);
  // get header
  console.log('host', req.get('host'));
  res.end('request page');
});

