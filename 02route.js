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