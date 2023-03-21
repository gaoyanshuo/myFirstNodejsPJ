const express = require('express');
const app = express();
// 解构赋值{}
const { singers } = require('./singers.json');
console.log(singers);
app.listen(3000, () => {
  console.log('3000 port opening');
});

// app.get('/request/101.html', (req, res) => {
//   res.setHeader('content-type', 'text/html;charset=utf-8');
//   res.end('リクエスト page');
// });

app.get('/singer/:id.html', (req, res) => {
  res.setHeader('content-type', 'text/html;charset=utf-8');
  let id = req.params.id;
  const singerInfo = singers.find((e) => {
    if (e.id === Number(id)) return true;
  });

  if (singerInfo) {
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h2>singer: ${singerInfo.singer_name}</h2>
    </body>
    </html>`);
  } else {
    res.end('not found singer');
  }
});
