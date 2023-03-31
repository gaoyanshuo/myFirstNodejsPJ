const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');
const db = mongoose.connection;
db.once('open', () => console.log('mongodb online'));
db.on('close', () => console.log('mongodb offline'));
db.on('error', () => console.log('mongodb error'));

const BookSchema = mongoose.Schema({
  name: String,
  author: String,
  is_hot: Boolean,
  price: Number,
});
const BookModel = new mongoose.model('novel', BookSchema);

// (async () => {
//   const findRes = await BookModel.find(
//     {
//       price: { $gt: 60 },
//     },
//     { name: 1, author: 1, price: 1 }
//   ).exec((err, data) => {
//     console.log(data);
//   });
//   console.log('findRes', findRes);
// })();

 BookModel.find(
  {
    price: { $gt: 60 },
  },
  { name: 1, author: 1, price: 1 }
)
  .then(res => {
    console.log('res', res);
  })
  .catch(err => console.log('err', err));
