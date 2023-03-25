const express = require('express');
const router = express.Router();

// module 化
router.get('/home', (req, res) => {
  res.send('front');
});
router.get('/search', (req, res) => {
  res.send('search');
});

module.exports = router;