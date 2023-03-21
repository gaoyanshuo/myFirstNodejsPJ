const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('3000 port is open');
});

app.get('/other', (req, res) => {
  // redirect
  //   res.redirect('https://www.google.jp');
  // download
  // res.download(__dirname + '/singers.json')
  // json response
  res.json({
    name: 'singer',
    info: 'xxxxx',
  });
  // file content
  //   res.sendFile(__dirname + '/postForm.html');
});
