var express = require('express');
var router = express.Router();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync(__dirname + '/../data/data.json');
const db = low(adapter);
const shortid = require('shortid');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// 账单一览
router.get('/account/', (req, res, next) => {
  const account_list = db.get('accounts').value();
  console.log('account_list', account_list);
  res.render('account', {account_list});
});

// add account
router.post('/account/', (req, res, next) => {
  // get request body
  const body = req.body;
  // generate db id
  const id = shortid.generate();
  console.log('body', body);
  // save date
  db.get('accounts')
    .unshift({ id, ...body })
    .write();
  res.render('success', { success_msg: 'add successed!', url: '/account' });
});

// create account
router.get('/account/create', (req, res, next) => {
  res.render('create');
});

module.exports = router;
