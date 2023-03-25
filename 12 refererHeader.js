const express = require('express');
const app = express();

app.use((req, res, next) => {
  let referer = req.get('referer');
  console.log('referer', referer);

  if (referer) {
    let url = new URL(referer);
    console.log('url', url);
    if (url.hostname === 'localhost') {
      res.status(404).send('<h1>404 NOT FOUND</h1>');
      return;
    }
  }

  next();
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
  console.log('server is running!');
});
