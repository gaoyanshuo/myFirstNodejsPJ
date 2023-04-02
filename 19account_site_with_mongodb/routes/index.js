const express = require('express');
const router = express.Router();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync(__dirname + '/../data/data.json');
const moment = require('moment')
const AccountModel = require('../models/AccountModel')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});

// 账单一览
router.get('/account/', async (req, res, next) => {
  await AccountModel.find().sort({time: -1}).then((result) => {
    // moment(new date()).format('YYYY-MM-DD')
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
  AccountModel.create({...req.body}).then(result => {
    res.render('success', {success_msg: 'add successed!', url: '/account'});
  }).catch(err => {
    if (err) res.status(500).send(err.msg)
    console.log(err.msg)
  })
});

// create account
router.get('/account/create', (req, res, next) => {
  res.render('create');
});

// remove account
router.get('/account/delete/:id', async (req, res, next) => {
  const id = req.params.id;
  await AccountModel.deleteOne({_id: id}).then(result => {
    res.render('success', {success_msg: 'remove successed!', url: '/account'});
  }).catch(err => {
    if (err) res.status(500).send(err.msg)
  });
});

module.exports = router;
