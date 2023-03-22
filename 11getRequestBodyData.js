const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('home');
});

app.get('/login', (req, res) => {
  //  res.send('form page');
  // 响应html文件内容
  res.sendFile(__dirname + '/11_form.html');
});

app.post('/login', (req, res) => {
  //   console.log('body', req.body);
  //   res.json({ requestBody: req.body });
  res.send(`username: ${req.body.username} password: ${req.body.password}`);
});

app.listen(3000, () => {
  console.log('3000 port OK!');
});
