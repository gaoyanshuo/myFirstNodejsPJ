/**
 *
 * @param {*} success connect success callback
 * @param {*} error connect error callback
 */
module.exports = function (success, error) {
  const mongoose = require('mongoose');
  // connect mongoose
  // mongodb:协议名称、127.0.0.1：ipAdress、27017：ポート、bilibili：DB Name
  mongoose.connect('mongodb://127.0.0.1:27017/bilibili');
  // 4.setting call back (when open or error or close)
  mongoose.connection.on('error', () => {
    error();
    console.log('mongoose connect failed');
  });
  mongoose.connection.on('close', () => {
    console.log('mongoose closed');
  });
  mongoose.connection.once('open', () => {
    success();
    console.log('mongoose connect succeeded');
  });
};
