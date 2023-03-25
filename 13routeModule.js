const express = require('express');
const app = express();
const homeRouter = require('./public/routes/homeRouter');

// set router
app.use(homeRouter);

app.get('*', (req, res) => {
  res.send('<h1>not found</h1>');
});

app.listen(3000, () => {
  console.log('3000 port start');
});
