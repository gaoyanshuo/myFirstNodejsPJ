const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');
const db = mongoose.connection;
const BookSchema = new mongoose.Schema({
  name: String,
  author: String,
  price: Number,
  is_hot: Boolean,
});
const BookModel = mongoose.model('novel', BookSchema);

db.once('open', () => {
  console.log('mongodb online');
});

db.once('close', () => {
  console.log('mongodb offline');
});

// update document
// 1. updateOne
// (async () => {
//   const updateOneRes = await BookModel.updateOne({ name: '红楼梦' }, { $set: { price: 66.9 } });
//   console.log('updateOneRes', updateOneRes);
//   mongoose.disconnect();
// })();

// 2. updateMany
(async () => {
  const updateManyRes = await BookModel.updateMany({ author: '余华' }, { is_hot: false });
  console.log('updateManyRes', updateManyRes);
})();
