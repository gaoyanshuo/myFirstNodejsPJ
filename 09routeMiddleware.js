const express = require('express');
const app = express();

// defind route middleware
function checkCodeMiddleware(req, res, next) {
  if (req.query.code === 's') {
    next();
  } else {
    res.send('ERROR');
  }
}

app.get('/home', (req, res) => {
  res.send('front');
});
app.get('/admin', checkCodeMiddleware, (req, res) => {
  res.send('backend');
});
app.get('*', (req, res) => {
  res.send('<h1>not found</h1>');
});

app.listen(3000, () => {
  console.log('3000 port start');
});
