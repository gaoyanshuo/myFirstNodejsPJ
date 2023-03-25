const express = require('express');
const router = express.Router();

// module 化
router.get('/admin', (req, res) => {
  res.send('backend');
});
router.get('/setting', (req, res) => {
  res.send('setting');
});

module.exports = router;
