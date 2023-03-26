var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// 账单一览
router.get('/account/', (req, res, next) => {
  res.render('account');
});

// add account
router.post('/account/', (req, res, next) => {
  const body = req.body;
  console.log('body', body);
  res.send('add account');
});

// create account
router.get('/account/create', (req, res, next) => {
  res.render('create');
});

module.exports = router;
