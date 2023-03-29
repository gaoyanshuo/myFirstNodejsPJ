const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');
const db = mongoose.connection;
db.once('open', () => {
  console.log('mongodb online');
});
db.on('close', () => {
  console.log('mongodb offline');
});

const BookSchema = new mongoose.Schema({
  name: String,
  author: String,
  price: Number,
  is_hot: Boolean,
});

const BookModel = db.model('novel', BookSchema);

// $lt <
// $lte <=
// $gt >
// $gte >=
// $ne !==
// $or:[{}, {}] or
// $and:[{}, {}] and

// (async () => {
//   const findRes = await BookModel.find({ price: { $lt: 20.9 } });
//   console.log('findRes', findRes);
//   mongoose.disconnect();
// })();

// $and
// const findOrRes = await db.novels.find({$and:[{author: '余华'},{price: {$gt: 20}}]})
// (async () => {
//   const findOrRes = await BookModel.find({ $or: [{ author: '余华' }, { author: '刘慈欣' }] });
//   console.log('findOrRes', findOrRes);
//   mongoose.disconnect();
// })();

// 正規表現
(async () => {
  const findRes = await BookModel.find({ name: /三/ });
  console.log('findRes', findRes);
  mongoose.disconnect();
})();
