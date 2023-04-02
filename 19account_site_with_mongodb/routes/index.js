var express = require('express');
var router = express.Router();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync(__dirname + '/../data/data.json');
const db = low(adapter);
const shortid = require('shortid');
const moment = require('moment')
const AccountModel = require('../models/AccountModel')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});

// 账单一览
router.get('/account/', async (req, res, next) => {
//  仮想DB
//  const account_list = db.get('accounts').value();
  await AccountModel.find().sort({time: -1}).then((result) => {
    res.render('account', {account_list: result, moment: moment});
  }).catch(error => {
    res.status(500).send('get account list failed!')
    console.log(error)
  })
});

// add account
router.post('/account/', (req, res, next) => {
//  time: 20xx-xx-xx => Object => time Obeject by momentjs
  console.log('time obj: ', moment(req.body.time).toDate())
  // get request body
  const body = req.body;
  body.time = moment(req.body.time).toDate()
  AccountModel.create({
    ...req.body
  }).then(result => {
    res.render('success', {success_msg: 'add successed!', url: '/account'});
  }).catch(err => {
    if (err) res.status(500).send('insert failed')
    console.log(err.msg)
  })
  // generate db id
  const id = shortid.generate();
  // save date
  db.get('accounts')
    .unshift({id, ...body})
    .write();
});

// create account
router.get('/account/create', (req, res, next) => {
  res.render('create');
});

// remove account
router.get('/account/delete/:id', (req, res, next) => {
  console.log('delete', req.params)
  const id = req.params.id;
  db.get('accounts').remove({id}).write();
  res.render('success', {success_msg: 'remove successed!', url: '/account'});
});

module.exports = router;
