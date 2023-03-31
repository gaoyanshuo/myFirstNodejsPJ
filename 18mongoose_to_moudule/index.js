// import mongodb module
const db = require('./db/mongodb');
const mongoose = require('mongoose');
// 関数呼び出し
db(
  () => {
    let BookSchema = mongoose.Schema({
      name: String,
      author: String,
      price: Number,
      is_sale: Boolean,
      pub_time: Date,
      tags: Array,
    });
    // create model object 对文档操作的封装对象
    // CRUD for schema
    let bookModel = mongoose.model('books', BookSchema);

    // add document (row) & close connect
    bookModel
      .create({
        name: '蛤蟆先生去看心理医生',
        author: 'xxx',
        price: 2000,
        is_sale: true,
        pub_time: new Date(),
        tags: [1, 2, 3],
      })
      .then((result) => console.log(result))
      .catch((error) => console.error(error))
      .finally(() => mongoose.disconnect());
  },
  () => {
    console.log('mongodb connect error');
  }
);
