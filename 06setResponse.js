const express = require('express');
const app = express();

app.get('/response', (req, res) => {
  // 原生
  //   res.statusCode = 404;
  //   res.setHeader('name', 'value');
  //   res.statusMessage = 'not found';
  //   res.write('helo express');
  //   res.end('response page');
  // express响应
  res.status(404);
  res.set('aaa', 'bbb');
  res.send('こんにちは');
});
app.listen(3000, () => {
  console.log('3000 port opening');
});
