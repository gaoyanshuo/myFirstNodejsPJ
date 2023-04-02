const express = require('express');
const router = express.Router();
const moment = require('moment');
const AccountModel = require('../../models/AccountModel');

// 账单一览
router.get('/account/', async (req, res, next) => {
  await AccountModel.find()
    .sort({ time: -1 })
    .then((result) => {
      // moment(new date()).format('YYYY-MM-DD')
      // return json
      res.json({
        retcode: '0000',
        msg: 'get account list successed',
        data: result,
      });
    })
    .catch((error) => {
      res.json({
        retcode: '9999',
        msg: 'get account list failed',
        data: null,
      });
    });
});

// add account
router.post('/account/', (req, res, next) => {
  //  time: 20xx-xx-xx => Object => time Obeject by momentjs
  console.log('time obj: ', moment(req.body.time).toDate());
  // get request body
  const body = req.body;
  body.time = moment(req.body.time).toDate();
  AccountModel.create({ ...req.body })
    .then((result) => {
      res.json({
        retcode: '0000',
        msg: 'add account successed',
        data: result,
      });
    })
    .catch((err) => {
      res.json({
        retcode: '9999',
        msg: err.message,
        data: null,
      });
    });
});

// remove account
router.delete('/account/delete/:id', async (req, res, next) => {
  const id = req.params.id;
  await AccountModel.deleteOne({ _id: id })
    .then((result) => {
      res.json({
        retcode: '0000',
        msg: 'delete account successed',
        data: result,
      });
    })
    .catch((err) => {
      res.json({
        retcode: '9999',
        msg: err.message,
        data: null,
      });
    });
});

module.exports = router;
