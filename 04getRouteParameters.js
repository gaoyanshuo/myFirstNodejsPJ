const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('3000 port opening');
});

// app.get('/request/101.html', (req, res) => {
//   res.setHeader('content-type', 'text/html;charset=utf-8');
//   res.end('リクエスト page');
// });

app.get('/request/:id.html', (req, res) => {
  res.setHeader('content-type', 'text/html;charset=utf-8');
  console.log('params', req.params.id);
  res.end('リクエスト page');
});
