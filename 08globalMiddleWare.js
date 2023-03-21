const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');

// defind global middleware
function recordMiddleware(req, res, next) {
  let { ip, url } = req;
  fs.appendFileSync(path.resolve(__dirname, './asscess.log'), `ip: ${ip}  url: ${url}\r\n`);
  next();
}

app.use(recordMiddleware);

app.get('/home', (req, res) => {
  res.send('front');
});
app.get('/admin', (req, res) => {
  res.send('backend');
});
app.get('*', (req, res) => {
  res.send('<h1>not found</h1>');
});

app.listen(3000, () => {
  console.log('3000 port start');
});
