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

// findOne
// (async () => {
//   const findOneRes = await BookModel.findOne({ name: '三体' });
//   console.log('findOneRes', findOneRes);
//   mongoose.disconnect();
// })();

// findById
(async () => {
  const findByIdRes = await BookModel.findById('6422f9f30cab7c25ea4df018');
  console.log('findByIdRes', findByIdRes);
  mongoose.disconnect();
})();

db.once('open', () => console.log('mongodb online'));
db.on('close', () => console.log('mongodb offline'));
